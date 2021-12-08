import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCWXW-aUiXBNp6aveT2oASipijRUEbEbR8",
    authDomain: "grocerymagix.firebaseapp.com",
    projectId: "grocerymagix",
    storageBucket: "grocerymagix.appspot.com",
    messagingSenderId: "229045206559",
    appId: "1:229045206559:web:6218e18b2e6ee1d352df2a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)