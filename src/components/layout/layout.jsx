import { Link, Outlet } from 'react-router-dom';

import Header from '../header/header';
import Footer from '../footer/footer';

const Layout = () => {
    return (
        <>
        <Header></Header>
        <Outlet />
        <Footer></Footer>
        </>
    )
}

export default Layout;