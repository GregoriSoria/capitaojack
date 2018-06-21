<?php
namespace App\Http\Controllers\Api;
use App\Field;
use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PagesController extends Controller
{
    public function findBySlug(Request $request, $slug = '') {
        $page = DB::table('pages')
            ->where('slug', $slug)
            ->first([
                'id',
                "title",
                "excerpt",
                "body",
                "image",
                "slug",
                "meta_description",
                "meta_keywords"
            ]);

        if ($page) {
            $pageFields = Field::where('page_id', $page->id)->get();
            foreach ($pageFields as $field) {
                $page->{$field->name} = $field->value;
            }


            return new JsonResponse($page, 200, ['Content-type'=> 'application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
        } else {
            return new JsonResponse([
                'error' => [
                    'message' => 'Página "' . $slug . '" não encontrada'
                ]
            ], 204, ['Content-type'=> 'application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
        }
    }
}