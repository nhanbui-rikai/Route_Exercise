import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { DefaultLayout } from "./Layouts";
import { Home } from "./Pages";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="/about/*" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Route>
      </>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
