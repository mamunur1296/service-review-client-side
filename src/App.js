import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Routers/AllRouter/RootRouter";

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
