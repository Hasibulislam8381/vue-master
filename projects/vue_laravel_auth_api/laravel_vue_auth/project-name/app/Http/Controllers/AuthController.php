<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    //
    public function register(Request $request)
    {
        // Check if the function is reached
        echo 'Register function hit!';
    
        // Optionally, dump the request data to see what's being received
        dd($request->all());
    }
    
}
