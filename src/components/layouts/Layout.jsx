import { Outlet } from 'react-router-dom';
import { NavBar } from './Navbar';
import Button from '../Button';

export const Layout = () => {
  return (
    <>
      <NavBar />
      <div className="">
        <Outlet />
      </div>
      <Button></Button>
    </>
  );
};
export default Layout;