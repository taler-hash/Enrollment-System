<?php

namespace App\Services;
use App\Models\Student;

class StudentServices {

    public function createStudent($request) {
        Student::create($request->all());
    }
}