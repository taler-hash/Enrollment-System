<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\StudentController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

// Parent Route
Route::get('/enrollment', [StudentController::class, 'displayEnrollment'])->name('enrollment');
Route::post('/enroll', [StudentController::class, 'create'])->name('enroll');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
