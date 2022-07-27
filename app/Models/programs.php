<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\colleges;

class programs extends Model
{
    use HasFactory;

        protected $fillable = [
            'programName',
            'cn_id',
            'programFN',
            'college_id'
    ];

    
        public function cns() {
        return $this->hasOne(cns::class);
    }


    public function getColleges()
    {
        return $this->belongsTo(collges::class);
    }
}