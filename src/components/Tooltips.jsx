// import React from 'react';

// const Tooltips = ({  text }) => {
//   import React, { useState, useEffect } from "react";
// import { collection, query, where, onSnapshot, orderBy } from "firebase/firestore";
// import { toast } from "react-toastify";
// import { db } from "./firebase-config"; // Your Firebase config file

// const NotificationsPage = ({ currentUser }) => {
//   const [welcomeMessage, setWelcomeMessage] = useState(null);
//   const [userMessages, setUserMessages] = useState([]);

//   // Listener for Welcome Message
//   useEffect(() => {
//     const welcomeRef = collection(db, "welcomeMessages"); // Your Firestore collection for welcome messages
//     const q = query(welcomeRef, orderBy("timestamp", "desc")); // Adjust query logic if needed

//     const unsubscribe = onSnapshot(q, (snapshot) => {
//       snapshot.docs.forEach((doc) => {
//         const message = doc.data();
//         setWelcomeMessage(message); // Store the welcome message
//         toast(message.message, {
//           type: "info",
//           autoClose: 5000,
//         });
//       });
//     });

//     return () => unsubscribe(); // Cleanup on unmount
//   }, []);

//   // Listener for User-Specific Messages
//   useEffect(() => {
//     if (!currentUser) return;

//     const userMessagesRef = collection(db, "updates"); // Your Firestore collection for user messages
//     const q = query(
//       userMessagesRef,
//       where("recipientId", "==", currentUser.StaffID), // Filter by currentUser ID
//       orderBy("timestamp", "desc")
//     );

//     const unsubscribe = onSnapshot(q, (snapshot) => {
//       const messages = snapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setUserMessages(messages);

//       // Show toast for new messages
//       snapshot.docChanges().forEach((change) => {
//         if (change.type === "added") {
//           const notification = change.doc.data();
//           toast(notification.message, {
//             type: notification.type || "info",
//             autoClose: 5000,
//           });
//         }
//       });
//     });

//     return () => unsubscribe(); // Cleanup on unmount
//   }, [currentUser]);

//   return (
//     <div>
//       <h1>Welcome</h1>
//       {welcomeMessage && <p>{welcomeMessage.message}</p>}

//       <h2>Your Notifications</h2>
//       <ul>
//         {userMessages.map((message) => (
//           <li key={message.id}>
//             {message.message} - {message.type}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default NotificationsPage;




//   return (
   
     
//       <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 z-10">
//         {text}
//         {console.log(text)}
//       </div>

//   );
// };

// export default Tooltips;