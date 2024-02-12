import Footer from '../Footer';

function Layout ({ children }) {
  return (
    <div className='flex flex-col min-h-screen justify-between'>
      <div className='flex flex-col items-center mt-11'>
        { children }
      </div>
      <Footer />
    </div>
  );
}

export default Layout;