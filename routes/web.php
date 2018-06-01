<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index', [
        'ogSiteName' => 'http://capitaojack.com.br',
        'seoH1' => 'Capitão Jack',
        'seoH2' => 'O Paraíso Que Escolhi',
        'seoP' => 'Porto Belo e Bombinhas. Paraíso o Ano Todo',
    ]);
});


Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});
