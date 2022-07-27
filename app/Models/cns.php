<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class cns extends Model
{
    use HasFactory;

            protected $fillable = [
            'courseName',
            'courseCode',
            'program_id'
    ];
}