<?php

namespace Database\Seeders;

use App\Models\Branch;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class BranchSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Branch::create([
           'name' => 'Itahari Branch',
           'address' => 'Itahari',
           'phone' => '9845698562',
           'email' => 'itahari@ds.com',
           'password' => Hash::make('nepal123'),
        ]);
    }
}
