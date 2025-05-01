import React, { useEffect,useRef  } from "react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "../firebase-config";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "./AuthContext";


const RealtimeNotifications = () => {
    const {currentUser} = useAuth();
    // Use a Set to track shown notifications
    const shownNotifications = useRef(new Set());
      
    
    useEffect(() => {
        if (!currentUser) {
          console.log("No currentUser, skipping notifications");
          return;
        }
      
        
        const notificationsRef = collection(db, "updates");
        const q = query(notificationsRef, orderBy("timestamp", "desc"));
      
        const unsubscribe = onSnapshot(q, (snapshot) => {
          snapshot.docChanges().forEach((change) => {
            if (change.type === "added") {
              const notification = change.doc.data();
              const notificationId = change.doc.id; // Unique ID for each notification
      
              // Skip if notification is already shown
              if (shownNotifications.current.has(notificationId)) {
                return;
              }
      
              // Skip if the notification is not for the current user
              if (notification.recipientID !== currentUser.StaffID) {
                return;
              }
      
              // Mark this notification as shown
              shownNotifications.current.add(notificationId);
      
              // Only show a toast for valid messages
              if (notification.message) {
                toast(`${notification.message}`, {
                  type: notification.type || "info",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                });
              }
            }
          });
        });
      
        return () => unsubscribe(); // Cleanup on unmount
      },[]);

  
  return <div></div>;
};

export default RealtimeNotifications;
