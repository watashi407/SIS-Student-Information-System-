<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Log;
use Exception;
use App\Models\Student;
use Haruncpi\LaravelIdGenerator\IdGenerator;
use App\Models\colleges;
use App\Models\programs;
use App\Models\cns;
use App\Models\enrolls;
use App\Models\offers;

class StudentController extends Controller
{
    // get employee List from databaser
    public function getStudentList()
    {
        try
        {
        $students = Student::orderBy('id','DESC')->get();
        return response()->json($students);
        }
        catch(Exception $e)
        {
            Log::error($e);
        }
    }


    // View Data

    public function getStudentDetails(Request $request)
    {
        try
        {
        $studentData = Student::findOrFail($request->get('studentID'));
        return response()->json($studentData);
        }
        catch(Exception $e)
        {
            Log::error($e);
        }
    }


    // update data

    public function getStudentUpdate(Request $request)
    {
        try
        {
        $studentUpdate = Student::findOrFail($request->get('studentID'));
        return response()->json($studentUpdate);
        }
        catch(Exception $e)
        {
            Log::error($e);
        }
    }

        public function studentUpdate(Request $request)
    {
        try
        {       
                $id = $request->get('SID');
                $StudentNum= $request->get('StudentId');
                $StudentName=$request->get('StudentName');
                $College=$request->get('College');
                $Program=$request->get('Program');
                $CoruseCode=$request->get('CoruseCode');
                $CourseName=$request->get('CourseName');

            

                Student::where('id',$id)->update(
                    [
                        'studentName' =>  $StudentName,
                        'college_id' => $College,
                        'program_id' => $Program,
                        'coruseCode' =>  $CoruseCode,
                        'courseName' =>  $CourseName,
                        'studentId' =>  $StudentNum
                    ]
                    );
                    return response()->json([
                        'studentName' =>  $StudentName,
                        'college_id' => $College,
                        'program_id' => $Program,
                        'coruseCode' =>  $CoruseCode,
                        'courseName' =>  $CourseName,
                        'studentId' =>  $StudentNum
                    ]);
        }
        catch(Exception $e)
        {
            Log::error($e);
        }
    }


    // Create Student With data



    // delete data
    public function destroy(Student $student)
    {
        try
        {
        $student->delete();

        }
        catch(Exception $e)
        {
            Log::error($e);
        }
    }


    // create student

    public function studentCreate(Request $request)
    {
        try
        {       

                
                $enroll_id=$request->get('Enroll');
                $College=$request->get('College');
                $Program=$request->get('Program');
                $Course=$request->get('Course');


            

                Student::create(
                    [

                        'enroll_id' =>  $enroll_id,
                        'college_id' => $College,
                        'program_id' => $Program,
                        'cn_id' =>  $Course,
                    
                    ]
                    );
                    return response()->json([
                        
                        'enroll_id' =>  $enroll_id,
                        'college_id' => $College,
                        'program_id' => $Program,
                        'cn_id' =>  $Course,

                        
                    ]);
        }
        catch(Exception $e)
        {
            Log::error($e);
        }
    }


    // enroll student

        public function studentEnroll(Request $request)
    {
        try
        {       

                
	            $ids = IdGenerator::generate(['table' => 'students', 'length' => 8, 'prefix' => date('y')]);
                $studentN=$request->get('StudentN');



            

                enrolls::create(
                    [
      
                    'studentN' =>  $studentN,
                    
                    ]
                    );
                    return response()->json([
       
                        'studentN' =>  $studentN,
                        
                    ]);
        }
        catch(Exception $e)
        {
            Log::error($e);
        }
    }
    // get college 
    
        public function getCollegeList()
    {
        try
        {
        $colleges = colleges::orderBy('id','DESC')->get();
        return response()->json($colleges);
        }
        catch(Exception $e)
        {
            Log::error($e);
        }
    }


    // get program

            public function getProgramList()
    {
        try
        {
        $programs = programs::orderBy('id','DESC')->get();
        return response()->json($programs);
        }
        catch(Exception $e)
        {
            Log::error($e);
        }
    }


    
    // get program

            public function getCourseList()
    {
        try
        {
        $cns = cns::orderBy('id','DESC')->get();
        return response()->json($cns);
        }
        catch(Exception $e)
        {
            Log::error($e);
        }
    }

        // get enrolls

            public function getEnrollList()
    {
        try
        {
        $cns = enrolls::orderBy('id','DESC')->get();
        return response()->json($cns);
        }
        catch(Exception $e)
        {
            Log::error($e);
        }
    }


        // View offers


// get colleges
    public function test(){
         return colleges::find(1)->getPrograms;
    }


        public function getOfferDetails(Request $request)
    {
        try
        {
        // $offerData = 
       return colleges::find($request->get('offerID'))->getPrograms;
        // return response()->json($offerData);
        }
        catch(Exception $e)
        {
            Log::error($e);
        }
    }
}