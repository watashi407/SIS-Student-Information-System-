<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Log;
use Exception;
use App\Models\Student;

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
                        'college' => $College,
                        'program' => $Program,
                        'coruseCode' =>  $CoruseCode,
                        'courseName' =>  $CourseName,
                        'studentId' =>  $StudentNum
                    ]
                    );
                    return response()->json([
                        'studentName' =>  $StudentName,
                        'college' => $College,
                        'program' => $Program,
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

    public function studentCreate(Request $request)
    {
        try
        {       
                $StudentId= $request->get('StudentId');
                $StudentName=$request->get('StudentName');
                $College=$request->get('College');
                $Program=$request->get('Program');
                $CoruseCode=$request->get('CoruseCode');
                $CourseName=$request->get('CourseName');

            

                Student::create(
                    [
                        'studentId' =>  $StudentId,
                        'studentName' =>  $StudentName,
                        'college' => $College,
                        'program' => $Program,
                        'coruseCode' =>  $CoruseCode,
                        'courseName' =>  $CourseName,
                    
                    ]
                    );
                    return response()->json([
                        
                        'studentId' =>  $StudentId,
                        'studentName' =>  $StudentName,
                        'college' => $College,
                        'program' => $Program,
                        'coruseCode' =>  $CoruseCode,
                        'courseName' =>  $CourseName,
                        
                    ]);
        }
        catch(Exception $e)
        {
            Log::error($e);
        }
    }


    
}