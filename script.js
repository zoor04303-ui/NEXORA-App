
// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// 🔥 بيانات مشروعك من Firebase
const firebaseConfig = {
  apiKey: "حطي apiKey هنا",
  authDomain: "حطي authDomain هنا",
  projectId: "حطي projectId هنا",
  storageBucket: "حطي storageBucket هنا",
  messagingSenderId: "حطي messagingSenderId هنا",
  appId: "حطي appId هنا"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// تجربة إضافة طلب
async function addTestOrder() {
  try {
    await addDoc(collection(db, "orders"), {
      name: "Order #1",
      price: 150,
      status: "pending",
      createdAt: new Date()
    });

    console.log("✅ Order added successfully!");
  } catch (error) {
    console.error("❌ Error adding order: ", error);
  }
}

// تشغيل التجربة
addTestOrder();
