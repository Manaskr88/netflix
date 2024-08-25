// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {
    createUserWithEmailAndPassword,
     getAuth,
      signInWithEmailAndPassword,
      signOut} from "firebase/auth"

import {addDoc, collection, getFirestore} from "firebase/firestore"
import { toast } from "react-toastify";



// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyB33FrFKf_wgaooYG648yknGDHVlRM0XvE",
  authDomain: "netflix-clone-13e7a.firebaseapp.com",
  projectId: "netflix-clone-13e7a",
  storageBucket: "netflix-clone-13e7a.appspot.com",
  messagingSenderId: "608398445274",
  appId: "1:608398445274:web:9646dc5fe805baeea333e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);  // initialised authentication

const db = getFirestore(app); // initialised databse

const signUp = async (name , email , password)=>{
    
    try {
        const response = await createUserWithEmailAndPassword(auth , email , password);

        const user = response.user;

        await addDoc(collection(db , "user" , {  // storing in database
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        }))
        
    } catch (error) {
        console.log(error);
        // alert("");
        toast.error("Something Went Wrong")
        
        
    }

}

const login = async (email , password)=>{
    try {

   await  signInWithEmailAndPassword(auth , email , password);

    

        
    } catch (error) {
        console.log(error);
        // alert("Something went wrong");
        toast.error("Something Went Wrong")

        
        
    }

}

const logout = async ()=>{
    signOut(auth);
}

export {auth , login , signUp , logout , db}