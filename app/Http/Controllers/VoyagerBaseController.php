<?php

namespace App\Http\Controllers;

use App\Field;
use Illuminate\Http\Request;
use TCG\Voyager\Facades\Voyager;
use Illuminate\Support\Facades\DB;
use TCG\Voyager\Events\BreadDataUpdated;
use TCG\Voyager\Http\Controllers\VoyagerBaseController as BaseVoyagerBaseController;

class VoyagerBaseController extends BaseVoyagerBaseController
{
    public function edit(Request $request, $id)
    {
        $slug = $this->getSlug($request);

        $dataType = Voyager::model('DataType')->where('slug', '=', $slug)->first();

        $relationships = $this->getRelationships($dataType);

        $dataTypeContent = (strlen($dataType->model_name) != 0)
            ? app($dataType->model_name)->with($relationships)->findOrFail($id)
            : DB::table($dataType->name)->where('id', $id)->first(); // If Model doest exist, get data from table name

        if ($dataType->slug == 'pages') {
            $customFields = Field::where('page_id', $id)->get();

            foreach ($customFields as $key => $field) {
                $dataRow = Voyager::model('DataRow');
                $dataRow->id = $field->id;
                $dataRow->data_type_id = $dataType->id; // type Pages
                $dataRow->field = $field->name;
                $dataRow->type = $field->type;
                $dataRow->isCustomField = true;
                $dataRow->display_name = $field->label;
                $dataRow->required = 0;
                $dataRow->browse = 1;
                $dataRow->read = 1;
                $dataRow->edit = 1;
                $dataRow->add = 1;
                $dataRow->delete = 1;
                $dataRow->details = null;
                $dataRow->order = $dataType->editRows[count($dataType->editRows)-1]->order + $key + 1;
                $dataType->editRows[] = $dataRow;

                $dataTypeContent->{$field->name} = $field->value;
            }
        }

        //dd($dataType->editRows);

        foreach ($dataType->editRows as $key => $row) {
            $details = json_decode($row->details);
            $dataType->editRows[$key]['col_width'] = isset($details->width) ? $details->width : 100;
        }

        // If a column has a relationship associated with it, we do not want to show that field
        $this->removeRelationshipField($dataType, 'edit');

        // Check permission
        $this->authorize('edit', $dataTypeContent);

        // Check if BREAD is Translatable
        $isModelTranslatable = is_bread_translatable($dataTypeContent);

        $view = 'voyager::bread.edit-add';

        if (view()->exists("voyager::$slug.edit-add")) {
            $view = "voyager::$slug.edit-add";
        }

        return Voyager::view($view, compact('dataType', 'dataTypeContent', 'isModelTranslatable'));
    }

    public function update(Request $request, $id)
    {
        $slug = $this->getSlug($request);

        $dataType = Voyager::model('DataType')->where('slug', '=', $slug)->first();

        // Compatibility with Model binding.
        $id = $id instanceof Model ? $id->{$id->getKeyName()} : $id;

        $data = call_user_func([$dataType->model_name, 'findOrFail'], $id);

        // Check permission
        $this->authorize('edit', $data);

        $all = $request->all();
        // Validate fields with ajax
        $val = $this->validateBread($all, $dataType->editRows, $dataType->name, $id);

        if ($val->fails()) {
            return response()->json(['errors' => $val->messages()]);
        }

        if (!$request->ajax()) {
            $this->insertUpdateData($request, $slug, $dataType->editRows, $data);

            event(new BreadDataUpdated($dataType, $data));


            if ($dataType->slug == 'pages') {
                $customFields = Field::where('page_id', $id)->get();
                foreach ($customFields as $key => $field) {
                    if (isset($all[$field->name])) {
                        $value = $all[$field->name];
                        $updateField = '';
                        if ($field->type == 'image' OR $field->type == 'multiple_images') {
                            $field->field = $field->name;
                            $value = $this->getContentBasedOnType($request, $field->name, $field, null);
                            $updateField = Field::where('page_id', $id)->where('name', $field->name)->first();
                            if ($field->type == 'multiple_images') {
                                $arr = json_decode($updateField->value, true);
                                $arr2 = json_decode($value, true);
                                foreach ($arr2 as $image) {
                                    $arr[] = $image;
                                }
                                $updateField->value = json_encode($arr);
                            }
                        } else {
                            $updateField = Field::where('page_id', $id)->where('name', $field->name)->first();
                            $updateField->value = $value;
                        }
                        $updateField->save();
                    }
                }
            }

            return redirect()
                ->route("voyager.{$dataType->slug}.index")
                ->with([
                    'message'    => __('voyager::generic.successfully_updated')." {$dataType->display_name_singular}",
                    'alert-type' => 'success',
                ]);
        }
    }
}
