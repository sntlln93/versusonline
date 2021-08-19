import { useState, useContext, createContext } from "react";
import Toasts from "components/Toasts";

const notificationContext = createContext();

export function NotificationProvider({ children }) {
  const notification = useNotificationProvider();
  const notifications = notification.notifications;

  return (
    <notificationContext.Provider value={notification}>
      {children}
      {notifications && <Toasts messages={notifications} />}{" "}
    </notificationContext.Provider>
  );
}

export const useNotification = () => {
  return useContext(notificationContext);
};

const useNotificationProvider = () => {
  const [notifications, setNotifications] = useState([]);

  const add = (notification) => {
    setNotifications(notifications.concat(notification));
    setInterval(() => {
      remove(notifications.length);
    }, 4000);
  };

  const remove = (indexToBeDeleted) => {
    setNotifications(
      notifications.filter((notif, index) => index !== indexToBeDeleted)
    );
  };

  return { add, remove, notifications };
};
