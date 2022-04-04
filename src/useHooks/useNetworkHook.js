import { useState, useEffect } from "react";

export const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine || true);
  const handleChange = () => {
    if (onChange && typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  return status;
};

export default function App() {
  const handleNetwork = (event) =>
    console.log(online ? "online console" : "offlone console");
  const online = useNetwork(handleNetwork);
  return (
    <div>
      <h1> {online ? "Online" : "Offline"} </h1>
    </div>
  );
}
