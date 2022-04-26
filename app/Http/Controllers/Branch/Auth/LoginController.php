<?php

namespace App\Http\Controllers\Branch\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function index(){
        return view('branch.auth.login');
    }

    public function login(Request $request){
        $credentials = [
            'email' => $request->email,
            'password' => $request->password,
        ];
        if (! auth('branch')->attempt($credentials)) {
            return back()->withInput()->with('error', 'Invalid Credentials!');
        }
        return redirect('/branch/dashboard');
    }

    public function logout(){
        auth()->logout();
        session()->invalidate();
        session()->regenerateToken();
        return redirect()->route('branch.loginPage');
    }

}
