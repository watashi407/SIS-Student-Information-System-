<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model; 

class colleges extends Model
{
    use HasFactory;

        protected $fillable = [
            'collegeName',
            'collegeFN',

    ];

        public function programs() {
        return $this->hasOne(programs::class);
    }


        public function getPrograms() {
            return $this->hasMany(programs::class,'college_id','id'); 
        }
}