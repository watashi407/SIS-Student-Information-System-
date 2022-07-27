<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class offers extends Model
{
    use HasFactory;
        protected $fillable = [
            'college_id',
            'program_id',
            'cn_id',
    ];

    protected $with = [
            'colleges',
            'programs',
            'cns'
    ];




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