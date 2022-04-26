<?php

use Illuminate\Support\Facades\Route;

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
    return view('home');
})->name('home');

Route::get('/branch/login', [\App\Http\Controllers\Branch\Auth\LoginController::class, 'index'])->name('branch.loginPage');
Route::post('/branch/login', [\App\Http\Controllers\Branch\Auth\LoginController::class, 'login'])->name('branch.login');
Route::get('/branch/logout', [\App\Http\Controllers\Branch\Auth\LoginController::class, 'logout'])->name('branch.logout');

Route::middleware(['auth:branch'])->prefix('branch')->group(function (){

    Route::get('/get/partner-list', [\App\Http\Controllers\Branch\Partner\PartnerController::class, 'listPartners']);
    Route::post('/register/partner', [\App\Http\Controllers\Branch\Partner\PartnerController::class, 'register']);

    Route::view('/{path?}', 'dashboard')
        ->where('path', '.*')
        ->name('react');
});

Route::middleware(['partnerAuthMiddleware'])->prefix('partner')->group(function (){
    Route::view('/{path?}', 'partner.layout')
        ->where('path', '.*')
        ->name('react');
});






