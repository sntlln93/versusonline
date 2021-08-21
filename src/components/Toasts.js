import { useNotification } from "contexts/Notifications";

const Toasts = ({ messages }) => {
  const notification = useNotification();

  return (
    <div className="toasts">
      {messages.map((message, index) => {
        return (
          <div
            className={`toast toast--${message.type}`}
            key={index}
            style={{ "--duration": `${index * 300}ms` }}
          >
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
