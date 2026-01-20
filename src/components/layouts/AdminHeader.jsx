import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function AdminHeader() {

    let { pathname } = useLocation

    let isLogin = sessionStorage.getItem("isLogin")
    let name = sessionStorage.getItem("name")
    const nav = useNavigate()
    const logout = () => {

        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Logout!"
        }).then((result) => {
            if (result.isConfirmed) {
                sessionStorage.clear()
                nav("/login")
                Swal.fire({
                    title: "Logout!",
                    text: "Logout successfully.",
                    icon: "success"
                });
            }
        });
    }





    return (
        <>

            {/* TOPBAR */}
            <div className="container-fluid px-5 d-none d-lg-block">
                <div className="row gx-5 py-3 align-items-center">
                    <div className="col-lg-3">
                        <div className="d-flex align-items-center justify-content-start">
                            <i className="bi bi-phone-vibrate fs-1 text-primary me-2" />
                            <h2 className="mb-0">+91 9876543219</h2>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="d-flex align-items-center justify-content-center">
                            <Link to="/admin" className="navbar-brand ms-lg-5">
                                <h1 className="m-0 display-4 text-primary">
                                    <span className="text-secondary">Seedly</span>
                                </h1>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="d-flex align-items-center justify-content-end">
                            <a
                                className="btn btn-primary btn-square rounded-circle me-2"
                                href="https://www.facebook.com"
                            >
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a
                                className="btn btn-primary btn-square rounded-circle me-2"
                                href="https://www.linkedin.com"
                            >
                                <i className="fab fa-linkedin-in" />
                            </a>
                            <a className="btn btn-primary btn-square rounded-circle" href="https://www.instagram.com/">
                                <i className="fab fa-instagram" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>


            {/* NavBar*/}
            <nav className="navbar navbar-expand-lg bg-primary navbar-dark shadow-sm py-3 py-lg-0 px-3 px-lg-5">
                <Link to="/admin" className="navbar-brand d-flex d-lg-none">
                    <h1 className="m-0 display-4 text-secondary">
                        <span className="text-white">Seedly</span>
                    </h1>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav mx-auto py-0">
                        <Link to="/admin" className="nav-item nav-link active">
                            Home
                        </Link>
                        <li className="nav-item dropdown">
                            <button className="nav-link dropdown-toggle btn btn-link" data-bs-toggle="dropdown">Season</button>

                            <ul className="dropdown-menu">
                                <li><Link to="/admin/season/add" className="dropdown-item">Add Season</Link></li>
                                <li><Link to="/admin/season/all" className="dropdown-item">All Season</Link></li>



                            </ul>
                        </li>
                        <Link to="/admin/land/all" className="nav-item nav-link">
                            Land
                        </Link>
                        <Link to="/admin/booking/all" className="nav-item nav-link">
                            Booking
                        </Link>
                         <Link to="/admin/user/all" className="nav-item nav-link">
                            User
                        </Link>

                        {/* <Link to="/product" className="nav-item nav-link">
                            Product
                        </Link> */}
                        <Link to="#" onClick={logout} className="nav-item nav-link">Logout {name}</Link>
                        {/* <li className="nav-item dropdown">
                            <button
                                className="nav-link dropdown-toggle btn btn-link"
                                data-bs-toggle="dropdown"
                            >
                                Pages
                            </button>

                            <ul className="dropdown-menu">
                                <li><Link to="/blog" className="dropdown-item">Blog Grid</Link></li>
                                <li><Link to="/detail" className="dropdown-item">Blog Detail</Link></li>
                                <li><Link to="/feature" className="dropdown-item">Features</Link></li>
                                <li><Link to="/team" className="dropdown-item">The Team</Link></li>
                                <li><Link to="/testimonial" className="dropdown-item">Testimonial</Link></li>
                            </ul>
                        </li> */}


                        {/* <Link to="/contact" className="nav-item nav-link">
                            Contact
                        </Link> */}
                    </div>
                </div>
            </nav>




        </>
    )
}