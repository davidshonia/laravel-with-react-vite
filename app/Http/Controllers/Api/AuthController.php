<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignUpRequest;
use App\Models\User;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    /**
     * @param SignUpRequest $request
     * @return Application|ResponseFactory|Response
     */
    public function signup(SignUpRequest $request): Response|Application|ResponseFactory
    {
        $data = $request->validated();

        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['name']),
        ]);

        $token = $user->createToken('main')->plainTextToken;

        return response(compact([
            'user' => $user,
            'token' => $token,
        ]));
    }


    /**
     * @param LoginRequest $request
     * @return Application|ResponseFactory|Response
     */
    public function login(LoginRequest $request): Response|Application|ResponseFactory
    {
        $cred = $request->validated();
        if (!Auth::attempt($cred)) {
            return response(['message' => 'Email or password is incorrect']);
        }

        $user = Auth::user();
        $token = $user->createToken('main')->plainTextToken;

        return response(compact('user', 'token'));
    }


    /**
     * @param Request $request
     * @return Application|ResponseFactory|Response
     */
    public function logout(Request $request): Response|Application|ResponseFactory
    {
        $user = $request->user();
        $user->currentAccessToken()->delete();

        return response('', 204);
    }
}
