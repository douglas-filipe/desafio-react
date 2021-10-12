import { Routes } from "./routes";
import { Toaster } from "react-hot-toast";
import GlobalStyle from "./global";

const App = () => {
  return (
    <>
    <GlobalStyle/>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes />
    </>
  );
};

export default App;
