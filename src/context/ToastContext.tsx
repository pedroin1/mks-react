import { Toaster } from "react-hot-toast";

export const ToasterContext = () => {
  return (
    <Toaster
      position="top-center"
      toastOptions={{
        // Default options for specific types
        success: {
          duration: 3000,
          style: {
            background: "green",
            color: "#fff",
          },
        },
        error: {
          duration: 3000,
          style: {
            backgroundColor: "red",
            color: "#fff",
          },
        },
      }}
    />
  );
};
