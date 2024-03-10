
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDT_7oALQMuX-z8Ac_rH6KHQ7sRP_5-EK8",
  authDomain: "expenseclaim-c1517.firebaseapp.com",
  projectId: "expenseclaim-c1517",
  storageBucket: "expenseclaim-c1517.appspot.com",
  messagingSenderId: "301715201015",
  appId: "1:301715201015:web:c65e86219e2e270295ecf2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app)