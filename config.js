import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDH2JIIs_Fb2LMk0sun_zVPfYtpomDTcac",
    authDomain: "classtest-53c9e.firebaseapp.com",
    projectId: "classtest-53c9e",
    storageBucket: "classtest-53c9e.appspot.com",
    messagingSenderId: "506152165795",
    appId: "1:506152165795:web:fd736ef38eba7a18b33a16"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebase.database();