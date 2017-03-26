import { AuthProviders, AuthMethods } from 'angularfire2';

export const firebaseConfig = {
    apiKey: "AIzaSyAyIdgL5mQTJY9pW1P14OmLVzw3chw41tU",
    authDomain: "hanbit-angular-first.firebaseapp.com",
    databaseURL: "https://hanbit-angular-first.firebaseio.com",
    storageBucket: "hanbit-angular-first.appspot.com",
    messagingSenderId: "721541388016"
};

export const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
};
