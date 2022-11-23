// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

const firebaseConfig = {
  apiKey: "AIzaSyDdVvHEOFnewsGp7k27mNoUgRUMpyJ73qQ",
  authDomain: "oratioapp-a2201.firebaseapp.com",
  projectId: "oratioapp-a2201",
  storageBucket: "oratioapp-a2201.appspot.com",
  messagingSenderId: "543466938170",
  appId: "1:543466938170:web:9e9e61739c22bc67c13a03",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const subirVideo = async (file) => {
  try {
    const id = v4();
    const storageRef = ref(storage, id);

    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    return url;
  } catch (error) {
    console.error(error);
  }
};
export { storage, ref, uploadBytes, subirVideo };
