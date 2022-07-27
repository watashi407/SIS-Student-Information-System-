<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class StudentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
           'studentId' => $this->faker->numberBetween(2000000,2500000),
           'studentName' => $this->faker->name(),
           'college_id' => $this->faker->randomElement([
            'CAS',
            'COED',
            'CME',
           ]),
           'program_id' =>$this->faker->randomElement([
            'BSIT',
            'BSED',
            'BSTM',
            'BSSW',
            'ABCOM',
            'AB POSCI',
            'BEED',
            'BSPED',
            'BSTM',
            'BSHM',
            'BSEntrep'
           ]),
           'coruseCode' =>$this->faker->randomElement([
            'IT_206',
            'IT_146',
            'IT_484',
            'IT_187',
            'IT_385',
            'BSED_160',
            'BSED_490',
            'BSED_457',
            'BSED_130',
            'BSTM_453',
            'BSTM_163',
            'BSTM_294',
           ]),
           'courseName' =>$this->faker->randomElement([
            'IT FUNDAMENTALS',
            'Database Management System',
            'Web Development',
            'Data Structures',
            'Systems Analysis and Design',
            'Principle of Teaching ',
            'Facilitating Learning',
            'Assessment of Student Learning',
            'Social Dimensions of Education',
            'Total Qualities Management',
            'Food and Beverage Service Procedures',
            'Tourism Planning and Development',
           ]),
        ];
    }
}