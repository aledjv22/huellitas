import { useRoutes, BrowserRouter } from 'react-router-dom';
import { HuellitasProvider } from './Context';
import Home from './Pages/Home';
import MyAccount from './Pages/MyAccount';
import NotFound from './Pages/NotFound';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import NavBar from './Components/NavBar';

const AppRoutes = () => {
  const base = 'huellitas';
  let routes = useRoutes([
    {path: base, element: <Home />},
    {path: base + '/my-account', element: <MyAccount />},
    {path: base + '/my-account/*', element: <MyAccount />},
    {path: base + '/sign-in', element: <SignIn />},
    {path: base + '/sign-up', element: <SignUp />},
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
