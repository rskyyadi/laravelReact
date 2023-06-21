<?php
  
namespace App\Http\Controllers;
  
use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;
use Exception;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
  
class FacebookController extends Controller
{
    public function redirectToFacebook(){
        return Socialite::driver('facebook')->redirect();
    }
           
    public function handleFacebookCallback(){
        try {
            $user = Socialite::driver('facebook')->user();
            $finduser = User::where('fb_id', $user->getId())->first();
            if($finduser){
                Auth::login($finduser);
                return redirect()->intended('dashboard');
            }else{
                $newUser = User::create([
                        'name' => $user->getName(),
                        'email' => $user->getEmail(),
                        'fb_id' => $user->getId(),
                        'password' => bcrypt('12345678')
                        // 'password' => Hash::make('password')
                    ]);
                    
                Auth::login($newUser);
                return redirect()->intended('dashboard');
            }
       
        } catch (Exception $e) {
            dd($e->getMessage());
        }
    }
}