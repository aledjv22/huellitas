function Layout ({ children }) {
  return (
    <div className='flex flex-col items-center mt-10'>
      { children }
    </div>
  );
}

export default Layout;