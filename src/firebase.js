// src/firebase.js
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-app-id",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id",
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// Requesting notification permission
export const requestNotificationPermission = () => {
  return getToken(messaging, { vapidKey: 'your-public-vapid-key' })
    .then((currentToken) => {
      if (currentToken) {
        console.log('Notification Token:', currentToken);
        // Send token to server, or store locally
      } else {
        console.log('No registration token available. Request permission to generate one.');
      }
    })
    .catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
    });
};
