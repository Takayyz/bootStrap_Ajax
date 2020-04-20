<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class testController extends Controller
{
    /**
     * top画面を表示する
     */
    public function index()
    {
        return view('index');
    }

    public function create(Request $request)
    {
        $data = $request->all();
        return view('list', compact('data'));
    }
}
