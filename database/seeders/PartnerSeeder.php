<?php

namespace Database\Seeders;

use App\Models\Partner;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class PartnerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Partner::create([
           'name' => 'Mousam Store',
           'address' => 'Itahari',
           'email' => 'mousam@gmail.com',
           'phone' => '9810431583',
           'password' => Hash::make('nepal123')
        ]);
    }
}
