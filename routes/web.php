<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\StudentController;

Route::get('/', function () {
    return to_route('students.display');
})->name('home');

// Parent Route
Route::get('/enrollment', [StudentController::class, 'displayEnrollment'])->name('enrollment');
Route::post('/enroll', [StudentController::class, 'create'])->name('enroll');

Route::middleware(['auth', 'verified'])->group(function () {
    //Admin Route
    Route::prefix('/students')->name('students.')
    ->group(function () {
        Route::get('/', [StudentController::class, 'displayStudents'])->name('display');
        Route::get('/index', [StudentController::class, 'index'])->name('index');
    });
    
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
