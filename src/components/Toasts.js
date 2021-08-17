import { useNotification } from "contexts/Notifications";

const Toasts = ({ messages }) => {
  const notification = useNotification();

  return (
    <div className="toasts">
      {messages.map((message, index) => {
        return (
          <div className={`toast toast--${message.type}`} key={index}>
            <div className="toast__icon"></div>
            <div className="toast__body">
              <p>{message.message}</p>
            </div>
            <span onClick={() => notification.remove(index)}>&times;</span>
          </div>
        );
      })}
    </div>
  );
};

export default Toasts;
