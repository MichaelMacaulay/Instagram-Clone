import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAO6QbEZeqsUHRD6Ee8WTVW1JkDr_wafsg",
    authDomain: "instagram-clone-33615.firebaseapp.com",
    projectId: "instagram-clone-33615",
    storageBucket: "instagram-clone-33615.appspot.com",
    messagingSenderId: "903071863009",
    appId: "1:903071863009:web:4462f13735f8ced200e7a0"
};

const firebase = Firebase.initializeApp(config);
const {
    FieldValue
} = Firebase.firestore;


export {
    firebase,
    FieldValue
};