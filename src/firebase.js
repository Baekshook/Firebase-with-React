import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_KEY}`,
  authDomain: "fir-react-638b3.firebaseapp.com",
  projectId: "fir-react-638b3",
  storageBucket: "fir-react-638b3.appspot.com",
  messagingSenderId: "904943003694",
  appId: `${process.env.REACT_APP_FIREBASE_ID}`,
  measurementId: "G-8FK79L5SZM",
};

firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 다른 곳에서 불러올때 firestore로 불러와야 함!!
export { firestore };
