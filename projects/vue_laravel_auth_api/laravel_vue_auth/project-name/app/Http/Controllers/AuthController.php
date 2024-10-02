<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class AuthController extends Controller
{
    //
    public function register(Request $request)
    {
    dd($request->all());
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255',
            'password' => 'required|string|min:8', // 'confirmed' checks for password confirmation
        ]);
        $user = User::create([
            'name' => $validatedData['name'],
            'email' => $validatedData['email'],
            'password' => Hash::make($validatedData['password']),
        ]);
    
        // Generate a custom token (for example, using the email and timestamp)
        $token = hash('sha256', $user->email . Str::random(60) . now());
    
        // Return the response with the token
        return response()->json([
            'message' => 'Registration successful',
            'data' => $validatedData,
            'token' => $token
        ], 201);
    
        return response()->json(['message' => 'Registration successful', 'data' => $validatedData], 201);
    }
    
    
}
