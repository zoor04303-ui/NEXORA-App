import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Firebase config (حطي بيانات مشروعك هنا)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "nexora-43ca3",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ➕ إضافة طلب
window.addOrder = async function () {
  await addDoc(collection(db, "orders"), {
    name: "Order #" + Math.floor(Math.random() * 1000),
    price: Math.floor(Math.random() * 500),
    status: "pending",
    createdAt: new Date()
  });

  alert("Order Added Successfully 🚀");
};

// ▶️ تحميل الطلبات
window.loadOrders = async function () {
  const querySnapshot = await getDocs(collection(db, "orders"));
  const list = document.getElementById("ordersList");
  list.innerHTML = "";

  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const li = document.createElement("li");
    li.textContent = `${data.name} - $${data.price} - ${data.status}`;
    list.appendChild(li);
  });
};
