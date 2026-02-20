import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCqCIhyNviNcSnD6627aUwQ4RDkXhgqMfI",
  authDomain: "humanis-2ae13.firebaseapp.com",
  projectId: "humanis-2ae13",
  storageBucket: "humanis-2ae13.firebasestorage.app",
  messagingSenderId: "142243824080",
  appId: "1:142243824080:web:07610404a383ee59abb9d5",
  measurementId: "G-QV5B1PCGW5",
};

// Singleton pattern — avoid re-init on HMR
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const db = getFirestore(app);

// Analytics only in browser
export async function initAnalytics() {
  if (typeof window !== "undefined" && (await isSupported())) {
    return getAnalytics(app);
  }
  return null;
}

export default app;
