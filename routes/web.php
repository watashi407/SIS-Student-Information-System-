<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StudentController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/get/student/list',
[StudentController::class, 'getStudentList'])->name('student.list');

Route::post('/get/individual/student/details',
[StudentController::class, 'getStudentDetails'])->name('student.details');

Route::post('/get/individual/student/update',
[StudentController::class, 'getStudentUpdate'])->name('student.update');

Route::post('/update/student/data',
[StudentController::class, 'studentUpdate']);

Route::delete('/delete/student/data/{student}',
[StudentController::class, 'destroy']);


Route::post('/create/student/data',
[StudentController::class, 'studentCreate']);

Route::get('/get/college/list',
[StudentController::class, 'getCollegeList'])->name('college.list');

Route::get('/get/program/list',
[StudentController::class, 'getProgramList'])->name('program.list');

Route::get('/get/course/list',
[StudentController::class, 'getCourseList'])->name('course.list');

Route::post('/enroll/student/data',
[StudentController::class, 'studentEnroll']);

Route::get('/get/enroll/list',
[StudentController::class, 'getEnrollList'])->name('enroll.list');


// Route::get('/get/offer/list',
// [StudentController::class, 'test']);

Route::post('/get/offer/list',
[StudentController::class, 'getOfferDetails'])->name('offer.details');