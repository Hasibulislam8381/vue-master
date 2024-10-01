<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    //
    public function register(Request $request)
    {
    
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255',
            'password' => 'required|string|min:8', // 'confirmed' checks for password confirmation
        ]);
    
        // If validation fails, Laravel automatically redirects back with errors (in case of web) 
        // or returns 422 JSON response (in case of API).
    
        // If validation passes, handle registration logic (e.g., create user)
        // echo 'Register function hit!' can be removed since validation will now be handled
        // $user = User::create(...);
    
        return response()->json(['message' => 'Registration successful', 'data' => $validatedData], 201);
    }
    
    
}
