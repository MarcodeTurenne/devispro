
// Firebase config (à personnaliser avec les vraies clés)
const firebaseConfig = {
  apiKey: "xxx",
  authDomain: "xxx.firebaseapp.com",
  projectId: "xxx",
  storageBucket: "xxx.appspot.com",
  messagingSenderId: "xxx",
  appId: "xxx"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
