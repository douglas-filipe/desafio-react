import { Routes } from "./routes";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes />
    </>
  );
};

export default App;
