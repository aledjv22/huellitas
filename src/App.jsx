import { useContext, useEffect } from "react";
import { useRoutes, BrowserRouter, useHistory } from "react-router-dom";
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
  const base = "huellitas";
  let routes = useRoutes([
    {path: base, element: <Home />},
    {path: base + "/my-account", element: isLoggedIn ? <MyAccount /> : <NotFound />},
    {path: base + "/my-account/*", element: isLoggedIn ? <MyAccount /> : <NotFound />},
    {path: base + "/sign-in", element: <SignIn />},
    {path: base + "/sign-up", element: <SignUp />},
    {path: base + "/recovery", element: <NotFound />},
    {path: base + "/recovery/*", element: <Recovery />},
    {path: base + "/pet/", element: <NotFound />},
    {path: base + "/pet/register", element: isLoggedIn ? <PetRegister /> : <NotFound />},
    {path: base + "/pet/*", element: <PetDetail />},
    {path: base + "/*", element: <NotFound />}
  ]);

  return routes;
}

function App() {
  const history = useHistory();

  useEffect(() => {
    // On initial load, check if there's a redirect route saved
    const redirectRoute = sessionStorage.redirect;
    delete sessionStorage.redirect;
    if (redirectRoute) {
      // If there's a saved redirect route, navigate to it
      history.push(redirectRoute);
    }
  }, [history]);
  
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
