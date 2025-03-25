<?php

namespace App\Services;
use App\Models\Student;
use Illuminate\Support\Facades\Mail;
use App\Mail\EnrollmentSuccessEmail;

class StudentServices {

    public function createStudent($request) {
        Student::create($request->all());
    }

    public function sendEnrollmentSuccessEmail($request) {
        Mail::to($request->parent_email_address)->send(new EnrollmentSuccessEmail($request));
    }
}