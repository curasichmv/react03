// Importa las bibliotecas de Firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Define una variable para almacenar el código de configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDtSvGppZzvf-0zHmBtDwDpewu4xyS9l1Y",
  authDomain: "alexacsara-b3e12.firebaseapp.com",
  projectId: "alexacsara-b3e12",
  storageBucket: "alexacsara-b3e12.appspot.com",
  messagingSenderId: "524156827691",
  appId: "1:524156827691:web:fa0fc16f5eb20cc662126e"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Define un método de callback para manejar los errores
const onError = (error) => {
  console.log("Error al inicializar Firebase:", error);
};

// Inicializa Firebase con un método de callback
initializeApp(firebaseConfig, onError);

// Obtén los servicios de Firebase
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
