const useNotification = (title, options) => {
    if (!("Notification" in window)) {
      return;
    }
    const fireNotif = () => {
      if (Notification.permission !== "granted") {
        Notification.requestPermission().then((permission) => {
          if (permission === "granted") {
            new Notification(title, options);
          } else {
            return;
          }
        });
      } else {
        new Notification(title, options);
      }
    };
    return fireNotif;
  };
  
  export default function useNotificationHook() {
    const triggerNotif = useNotification("hello", {
      body: "this is darong alarm!"
    });
    return (
      <div>
        <button onClick={triggerNotif}> hello </button>
      </div>
    );
  }
  