import Home from "./component/page/Home";
import About from "./component/page/About";
import Service from "./component/page/Service";
import Contact from "./component/page/Contact";

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Rootlyout from "./component/Rootlyout";
import Navbar from "./component/Navbar";

const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path="/" element={<Rootlyout />}>
      <Route index element = {<Home/>} ></Route>
      <Route path="/about" element = {<About />} ></Route>
      <Route path="/service" element = {<Service/>} />
      <Route path="/contact" element = {<Contact/>} />

    </Route>

  )
);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
  
  
    </div>
  );
};

export default App;
