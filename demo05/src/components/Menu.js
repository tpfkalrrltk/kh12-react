import { NavLink, useLocation } from "react-router-dom";

const Menu = () => {
    const location = useLocation();
    //console.log(location.pathname)

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="#"></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="/">Every Fit
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={`nav-link ${location.pathname ==='/Pocketmon' ?  'active' :''}`} to="/Pocketmon">포켓몬</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={`nav-link ${location.pathname ==="/Book" ? "active" :""} `} to="/Book">도서</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="#">About</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" data-bs-toggle="dropdown" to="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</NavLink>
                                <div className="dropdown-menu">
                                    <NavLink className="dropdown-item" to="#">Action</NavLink>
                                    <NavLink className="dropdown-item" to="#">Another action</NavLink>
                                    <NavLink className="dropdown-item" to="#">Something else here</NavLink>
                                    <div className="dropdown-divider"></div>
                                    <NavLink className="dropdown-item" to="#">Separated link</NavLink>
                                </div>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-sm-2" type="search" placeholder="Search" />
                            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

        </>
    )
};
export default Menu;