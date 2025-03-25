<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Carbon\Carbon;

class Student extends Model
{
    protected $fillable = [
        'child_name', 
        'birth_date', 
        'student_id', 
        'parent_name', 
        'parent_contact_number', 
        'parent_email_address', 
        'parent_relationship'
    ];

    protected function birthDate(): Attribute
    {
        return Attribute::make(
            set: fn (string $value) => Carbon::parse($value)->addDay()->format('Y-m-d'),
        );
    }
}
