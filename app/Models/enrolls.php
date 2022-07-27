<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class enrolls extends Model
{
    use HasFactory;

        protected $fillable = [
            'studentN',
            'id'

    ];

}