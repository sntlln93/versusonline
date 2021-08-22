import { useState, useContext, createContext, useEffect } from "react";
import Toasts from "components/Toasts";

const notificationContext = createContext();

export function NotificationProvider({ children }) {
  const notification = useNotificationProvider();
  const notifications = notification.notifications;

  return (
    <notificationContext.Provider value={notification}>
      {children}
      {notifications && <Toasts messages={notifications} />}
    </notificationContext.Provider>
  );
}

export const useNotification = () => {
  return useContext(notificationContext);
};

const useNotificationProvider = () => {
  const [notifications, setNotifications] = useState([]);
  const [removing, setRemoving] = useState(null);

  useEffect(() => {
    setNotifications((n) => n.filter((notif, index) => index !== removing));
  }, [removing]);

  useEffect(() => {
    if (notifications.length) {
      const index = notifications.length - 1;
      setTimeout(() => setRemoving(index), 3000);
    }
  }, [notifications]);

  const add = (notification) => {
    setNotifications(notifications.concat(notification));
  };

  const remove = (indexToBeDeleted) => {
    setNotifications(
      notifications.filter((notif, index) => index !== indexToBeDeleted)
    );
  };

  return { add, remove, notifications };
};
