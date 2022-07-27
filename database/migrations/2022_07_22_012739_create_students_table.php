<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStudentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('students', function (Blueprint $table) {
            $table->id();
            $table->foreignId('enroll_id')->nullable()->constraint('enrolls');
            $table->foreignId('cn_id')->nullable()->constraint('cns');
            $table->foreignId('college_id')->nullable()->constraint('colleges');
            $table->foreignId('program_id')->nullable()->constraint('programs');


            // foreign Key
            // $table->foreign('program_id')->references('id')->on('programs')->onDelete('cascade');
            // $table->foreign('college_id')->references('id')->on('colleges')->onDelete('cascade');
            // $table->foreign('cn_id')->references('id')->on('program__c_n_s')->onDelete('cascade');
            $table->timestamps();

            // $table->foreign('college_id')->on('colleges')->references('id')->onDelete('cascade');
            // $table->foreign('program_id')->on('programs')->references('id')->onDelete('cascade');
        });



    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('students');
    }
}