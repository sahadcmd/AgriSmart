import { initializeApp } from "firebase/app";
import {
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  getFirestore,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getCurrentCity } from "../utility";

const firebaseConfig = {
  apiKey: "AIzaSyBcjmzpHRKTt1iTIJSxdzqU-KQHlVHbdZk",
  authDomain: "agrismart-33311.firebaseapp.com",
  projectId: "agrismart-33311",
  storageBucket: "agrismart-33311.appspot.com",
  messagingSenderId: "755500564959",
  appId: "1:755500564959:web:cd2b208851efc82c81446a",
  measurementId: "G-CQ860D3MCX",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

async function SignupWithEmailAndPass(email: string, password: string) {
  const userCred = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCred.user;
  return user;
}

async function SigninWithEmailAndPass(email: string, password: string) {
  const userCred = await signInWithEmailAndPassword(auth, email, password);
  const user = userCred.user;
  return user;
}

export async function api_loginUser(
  email: string,
  password: string,
  type: "farmer" | "customer"
) {
  try {
    const db = getFirestore(firebaseApp);
    const user = await SigninWithEmailAndPass(email, password);

    if (user) {
      const docRef = await getDoc(doc(db, type, user.uid));
      if (docRef.exists()) {
        return docRef.data();
      }
      throw "Something went wrong";
    } else {
      throw "Failed to signup";
    }
  } catch (e) {
    console.error("api::error", e);
    throw e;
  }
}

export function isEmailverified() {
  return auth.currentUser?.emailVerified;
}

export async function api_registerUSer(
  name: string,
  location: string,
  email: string,
  password: string
) {
  try {
    const db = getFirestore(firebaseApp);
    const user = await SignupWithEmailAndPass(email, password);
    const userlocation = await getCurrentCity();

    if (user) {
      await setDoc(doc(db, "farmer", user.uid), {
        name: name,
        email: email,
        uid: user.uid,
        location: userlocation,
      });

      await setDoc(doc(db, "customer", user.uid), {
        name: name,
        email: email,
        uid: user.uid,
        location: userlocation,
      });

      try {
        await sendEmailVerification(user);
      } catch (e) {
        /* handle error */
        console.error("failed to send verification email", e);
      }
      return user.uid;
    } else {
      throw "Failed to signup";
    }
  } catch (e) {
    console.error("api::error", e);
    throw e;
  }
}

export async function api_readSensorData() {
  const db = getFirestore(firebaseApp);
  const querySnapshot = await getDocs(collection(db, "agri"));
  const data: any = [];
  querySnapshot.forEach((doc) => {
    data.push(doc.data());
  });
  console.log("data is ", data);
  return data;
}

export async function api_addItem(
  name: string,
  price: number,
  quantity: number,
  type: string,
  farmerName: string,
  file: File
) {
  try {
    const db = getFirestore(firebaseApp);
    const user = auth.currentUser;
    if (user) {
      const location = await getCurrentCity();
      const fileUrl = await api_uploadFile(file, name);
      const docRef = await addDoc(collection(db, "items"), {
        name: name,
        price: price,
        image: fileUrl,
        type: type,
        quantity: quantity,
        farmerName: farmerName,
        location: location,
        uid: Date.now(),
      });
      console.log("Document written with ID: ", docRef.id);
      console.log("user is ", user);
    } else {
      throw "Please signin";
    }
  } catch (e) {
    /* handle error */
    console.error("api::error", e);
  }
}

export async function api_deleteItem(uid: string) {
  try {
    const db = getFirestore(firebaseApp);
    const user = auth.currentUser;
    if (user) {
      const itemRef = collection(db, "items");

      // Create a query against the collection.
      const q = query(itemRef, where("uid", "==", uid));
      const querySnapshot = await getDocs(q);
      const ids: any = [];
      querySnapshot.forEach((doc) => {
        // deleteDoc(doc(db, "items"))
        ids.push(doc.id);
        console.log(doc.id, " => ", doc.data());
      });

      for (const i of ids) {
        await deleteDoc(doc(db, "items", i));
      }
    } else {
      throw "Failed to delete";
    }
  } catch (e) {
    /* handle error */
    console.error("api::error", e);
  }
}

export async function api_getItems() {
  try {
    const db = getFirestore(firebaseApp);
    const itemsRef = await getDocs(collection(db, "items"));
    const items: any = [];
    itemsRef.forEach((doc) => items.push(doc.data()));
    return items;
  } catch (e) {
    /* handle error */
    console.error("api::error", e);
  }
}

export async function api_uploadFile(file: File, id: string) {
  try {
    const storage = getStorage();
    const fileRef = ref(storage, `images/${id}`);
    const snap = await uploadBytes(fileRef, file);
    console.log("Uploaded a blob or file!");
    const link = await getDownloadURL(snap.ref);
    console.log("got donload link", link);
    return link;
  } catch (e) {
    /* handle error */
    console.error("api::error", e);
  }
}
