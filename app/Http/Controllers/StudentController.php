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

    public function displayStudents() {
        return Inertia::render('Students');
    }

    public function create(CreateStudentRequest $request, StudentServices $studentServices): void {
        $studentServices->createStudent($request);
        $studentServices->sendEnrollmentSuccessEmail($request);
    }

    public function index(Request $request, StudentServices $studentServices) {
        return $studentServices->displayStudents($request);
    }

    public function export(StudentServices $studentServices) {
        return $studentServices->exportStudents();
    }
}
