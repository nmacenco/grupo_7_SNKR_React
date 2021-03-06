import React from 'react';
import image from '../assets/images/logosimple.png';
import ContentWrapper from './ContentWrapper';
import LastProductInDb from './LastProductInDb';
import ContentRowProducts from './ContentRowProducts';
import NotFound from './NotFound';
import {Link, Route, Switch} from 'react-router-dom';
import SearchProducts from './SearchProducts';
import Chart from './Chart';


function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Digital House"/>
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - SNKR</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                <Link className="nav-link" to="/SearchProducts">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Search Products</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/Chart">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Charts</span></Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item nav-link">
                <Link className="nav-link" to="/LastProductInDb">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Las product in Data Base</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}

            <Switch>
                <Route exact path="/">
                    <ContentWrapper />
                </Route>
                <Route path="/LastProductInDb">
                    <LastProductInDb />
                </Route>
                <Route path="/ContentRowProducts">
                    <ContentRowProducts />
                </Route>
                <Route path="/SearchProducts">
                    <SearchProducts />
                </Route>
                <Route path="/Chart">
                    <Chart />
                </Route>
                <Route  component={NotFound} />
            </Switch>
        </React.Fragment>
    )
}
export default SideBar;