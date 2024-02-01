import { useContext } from 'react';
import { useRoutes, BrowserRouter } from 'react-router-dom';
import { HuellitasProvider, HuellitasContext } from './Context';
import Home from './Pages/Home';
import MyAccount from './Pages/MyAccount';
import NotFound from './Pages/NotFound';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Recovery from './Pages/Recovery';
import PetDetail from './Pages/PetDetail';
import NavBar from './Components/NavBar';

const AppRoutes = () => {
  const { isLoggedIn } = useContext(HuellitasContext);
  const base = 'huellitas';
  let routes = useRoutes([
    {path: base, element: <Home />},
    {path: base + '/my-account', element: isLoggedIn ? <MyAccount /> : <NotFound />},
    {path: base + '/my-account/*', element: isLoggedIn ? <MyAccount /> : <NotFound />},
    {path: base + '/sign-in', element: <SignIn />},
    {path: base + '/sign-up', element: <SignUp />},
    {path: base + '/recovery', element: <NotFound />},
    {path: base + '/recovery/*', element: <Recovery />},
    {path: base + '/pet/', element: <NotFound />},
    {path: base + '/pet/*', element: <PetDetail />},
    {path: base + '/*', element: <NotFound />}
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
