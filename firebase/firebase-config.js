
import { initializeApp } from "firebase/app";
import {getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDr5PfL527MvYqZTpJ3zqRXBoD5i86pVfM",
  authDomain: "fir-9dk-example.firebaseapp.com",
  projectId: "fir-9dk-example",
  storageBucket: "fir-9dk-example.appspot.com",
  messagingSenderId: "267400602319",
  appId: "1:267400602319:web:6c162243d92d78a511cdba"
};

if(!firebase.apps.length){

}

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app)