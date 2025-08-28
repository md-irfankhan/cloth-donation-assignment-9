import {Outlet} from 'react-router'
import Nav from './components/Nav/Nav';
const Layout = () => {
    return (
        <div>
            <nav>
                <Nav></Nav>
            </nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;