import './Notifications.css';
import  { useState } from "react";
import "./Notifications.css";


const notificationsArray = [
    { id: 1, text: "You have a new message from John.", read: false },
    { id: 2, text: "Your post received 20 new likes.", read: false },
    { id: 3, text: "Your subscription is about to expire.", read: true },
    { id: 4, text: "System update scheduled for tomorrow.", read: true },
]


const Notifications = () => {
    const [notifications, setNotifications] = useState(notificationsArray);

    const markAllAsRead = () => {
        setNotifications(notifications.map((notif) => ({ ...notif, read: true })));
    };

    return (
        <div className="notifications-page">
            <div className="header">
                <h1>Notifications</h1>
                <button onClick={markAllAsRead}>Mark All as Read</button>
            </div>

            <ul className="notifications-list">
                {notifications.map((notification) => (
                    <li
                        key={notification.id}
                        className={`notification-item ${
                            notification.read ? "read" : "unread"
                        }`}
                    >
                        {notification.text}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Notifications;
