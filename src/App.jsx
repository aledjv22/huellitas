import { useContext } from "react";
import { useRoutes, BrowserRouter } from "react-router-dom";
import { HuellitasProvider, HuellitasContext } from "./context";
import Home from "./pages/Home";
import MyAccount from "./pages/MyAccount";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Recovery from "./pages/Recovery";
import PetDetail from "./pages/PetDetail";
import PetRegister from "./pages/PetRegister";
import NavBar from "./components/NavBar";

const AppRoutes = () => {
  const { isLoggedIn } = useContext(HuellitasContext);
  let routes = useRoutes([
    {path: "/", element: <Home />},
    {path: "/my-account", element: isLoggedIn ? <MyAccount /> : <NotFound />},
    {path: "/my-account/*", element: isLoggedIn ? <MyAccount /> : <NotFound />},
    {path: "/sign-in", element: <SignIn />},
    {path: "/sign-up", element: <SignUp />},
    {path: "/recovery", element: <NotFound />},
    {path: "/recovery/*", element: <Recovery />},
    {path: "/pet/", element: <NotFound />},
    {path: "/pet/register", element: isLoggedIn ? <PetRegister /> : <NotFound />},
    {path: "/pet/*", element: <PetDetail />},
    {path: "/*", element: <NotFound />}
  ]);

  return routes;
}

function App() {
  return (
    <BrowserRouter>
      <HuellitasProvider>
        <AppRoutes />
        <NavBar />
      </HuellitasProvider>
    </BrowserRouter>
  )
}

export default App
