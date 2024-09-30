<?php

use App\Http\Controllers\MyRegistrationController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});
Route::get('/register',[MyRegistrationController::class,'registration']);