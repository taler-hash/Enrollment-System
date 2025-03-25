<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateStudentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'child_name' => 'required|string|unique:students,child_name',
            'birth_date' => 'required|string',
            'student_id' => 'required|numeric|unique:students,student_id',
            'parent_name' => 'required|string',
            'parent_contact_number' => 'required|numeric',
            'parent_email_address' => 'required|email',
            'parent_relationship' => 'required|string',
        ];
    }
}
