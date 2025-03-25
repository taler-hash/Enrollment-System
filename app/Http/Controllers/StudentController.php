<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\StudentServices;
use Inertia\Inertia;
use App\Http\Requests\CreateStudentRequest;

class StudentController extends Controller
{
    public function displayEnrollment() {
        return Inertia::render('Enrollment');
    }

    public function create(CreateStudentRequest $request, StudentServices $studentServices): void {
        $studentServices->createStudent($request);
    }
}
