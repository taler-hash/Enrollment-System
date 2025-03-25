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

    public function displayStudents($request) {
        $students = Student::whereAny((new Student())->getFillable(), 'LIKE', "%$request->filter%")
        ->orderBy($request?->sort_by ?? 'id', $this->getSortType($request?->sort_type) ?? 'desc')
        ->paginate($request?->per_page ?? 10);

        return response()->json($students);
    }

    private function getSortType($sortType) {

        if(empty($sortType)) return null;

        return $sortType <= 0 ? 'desc' : 'asc';
    }
}