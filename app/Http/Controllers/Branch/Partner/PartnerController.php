<?php

namespace App\Http\Controllers\Branch\Partner;

use App\Http\Controllers\Controller;
use App\Models\Partner;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class PartnerController extends Controller
{
    public function listPartners(Request $request){
        $data = DB::table('partners')->orderByDesc('created_at')->get();
        if($request->ajax()){
            return datatables($data)->make(true);
        }
        return response()->json($data);
    }

    public function register(Request $request){
        $data = Partner::create([
           'name' => $request->name,
           'address' => $request->address,
           'email' => $request->email,
           'phone' => $request->phone,
           'password' => Hash::make('nepal')
        ]);

        return response()->json($data);
    }
}
