<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\colleges;
use App\Models\programs;
use App\Models\cns;
use App\Models\enrolls;


class Student extends Model
{
    use HasFactory;
    protected $fillable = [
            'enroll_id',
            'college_id',
            'program_id',
            'cn_id',
    ];

    protected $with = [
            'colleges',
            'programs',
            'cns',
            'enrolls'
    ];



    
    public function enrolls() {
        return $this->belongsTo(enrolls::class,'enroll_id','id');
    }

    public function cns() {
        return $this->belongsTo(cns::class,'cn_id','id');
    }

        public function colleges() {
        return $this->belongsTo(colleges::class,'college_id','id');
    }

        public function programs() {
        return $this->belongsTo(programs::class,'program_id','id');
    }
}