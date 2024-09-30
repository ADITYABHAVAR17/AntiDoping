// src/components/NotificationRequest.jsx
import React, { useEffect, useState } from 'react';
import { requestNotificationPermission } from '../firebase';
import { AiOutlineClose } from 'react-icons/ai';

function NotificationRequest() {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    requestNotificationPermission();
  }, []);

  if (!showPopup) return null;

  return (
    <div className="fixed bottom-4 right-4 p-4 bg-white shadow-lg rounded-lg flex items-center space-x-4 animate-slide-up">
      <p>Allow notifications to stay updated!</p>
      <button onClick={() => setShowPopup(false)} className="p-1 bg-red-500 text-white rounded-full">
        <AiOutlineClose />
      </button>
    </div>
  );
}

export default NotificationRequest;
