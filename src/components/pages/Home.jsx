import { Link } from "react-router-dom";

export default function Home(){
    return(
        <>

        <>
  {/* Topbar Start */}
  {/* <div className="container-fluid px-5 d-none d-lg-block">
    <div className="row gx-5 py-3 align-items-center">
      <div className="col-lg-3">
        <div className="d-flex align-items-center justify-content-start">
          <i className="bi bi-phone-vibrate fs-1 text-primary me-2" />
          <h2 className="mb-0">+012 345 6789</h2>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="d-flex align-items-center justify-content-center">
          <a href="index.html" className="navbar-brand ms-lg-5">
            <h1 className="m-0 display-4 text-primary">
              <span className="text-secondary">Farm</span>Fresh
            </h1>
          </a>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="d-flex align-items-center justify-content-end">
          <a
            className="btn btn-primary btn-square rounded-circle me-2"
            href="#"
          >
            <i className="fab fa-twitter" />
          </a>
          <a
            className="btn btn-primary btn-square rounded-circle me-2"
            href="#"
          >
            <i className="fab fa-facebook-f" />
          </a>
          <a
            className="btn btn-primary btn-square rounded-circle me-2"
            href="#"
          >
            <i className="fab fa-linkedin-in" />
          </a>
          <a className="btn btn-primary btn-square rounded-circle" href="#">
            <i className="fab fa-instagram" />
          </a>
        </div>
      </div>
    </div>
  </div> */}
  {/* Topbar End */}
  {/* Navbar Start */}
  {/* <nav className="navbar navbar-expand-lg bg-primary navbar-dark shadow-sm py-3 py-lg-0 px-3 px-lg-5">
    <a href="index.html" className="navbar-brand d-flex d-lg-none">
      <h1 className="m-0 display-4 text-secondary">
        <span className="text-white">Farm</span>Fresh
      </h1>
    </a>
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
        <a href="index.html" className="nav-item nav-link active">
          Home
        </a>
        <a href="about.html" className="nav-item nav-link">
          About
        </a>
        <a href="service.html" className="nav-item nav-link">
          Service
        </a>
        <a href="product.html" className="nav-item nav-link">
          Product
        </a>
        <div className="nav-item dropdown">
          <a
            href="#"
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            Pages
          </a>
          <div className="dropdown-menu m-0">
            <a href="blog.html" className="dropdown-item">
              Blog Grid
            </a>
            <a href="detail.html" className="dropdown-item">
              Blog Detail
            </a>
            <a href="feature.html" className="dropdown-item">
              Features
            </a>
            <a href="team.html" className="dropdown-item">
              The Team
            </a>
            <a href="testimonial.html" className="dropdown-item">
              Testimonial
            </a>
          </div>
        </div>
        <a href="contact.html" className="nav-item nav-link">
          Contact
        </a>
      </div>
    </div>
  </nav> */}
  {/* Navbar End */}
  {/* Carousel Start */}
  <div className="container-fluid p-0">
    <div
      id="header-carousel"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="w-100 h-50" src="/assets/img/woman-planting-vegetables-smiling-farm-with-equipments.jpg" alt="Image" />
          <div className="carousel-caption top-0 bottom-0 start-0 end-0 d-flex flex-column align-items-center justify-content-center">
            <div className="text-start p-5" style={{ maxWidth: 900 }}>
              <h3 className="text-white">Organic Vegetables   </h3>
              <h1 className="display-1 text-white mb-md-4">
                Organic Vegetables For Healthy Life
              </h1>
              <Link to="/user/land" className="btn btn-primary py-md-3 px-md-5 me-3">
                Lands
              </Link>
              <Link to="/user/season" className="btn btn-secondary py-md-3 px-md-5">
               Seasons
              </Link>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img className="w-100 h-50" src="/assets/img/truck-working-field-sunny-day.jpg" alt="Image" />
          <div className="carousel-caption top-0 bottom-0 start-0 end-0 d-flex flex-column align-items-center justify-content-center">
            <div className="text-start p-5" style={{ maxWidth: 900 }}>
              <h3 className="text-white">Organic Fruits</h3>
              <h1 className="display-1 text-white mb-md-4">
                Organic Fruits For Better Health
              </h1>
              <Link to="/user/land" className="btn btn-primary py-md-3 px-md-5 me-3">
                Lands
              </Link>
              <Link to="/user/season" className="btn btn-secondary py-md-3 px-md-5">
               Seasons
              </Link>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#header-carousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#header-carousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  {/* Carousel End */}
  {/* Banner Start */}
  <div className="container-fluid banner mb-5">
    <div className="container">
      <div className="row gx-0">
        <div className="col-md-6">
          <div
            className="bg-primary bg-vegetable d-flex flex-column justify-content-center p-5"
            style={{ height: 300 }}
          >
            <h3 className="text-white mb-3">Organic Vegetables</h3>
            <p className="text-white">
              Fresh vegetables provide essential nutrients and fiber that support digestion and promote overall well-being.
            </p>
            <a className="text-white fw-bold" href="">
              Read More
              <i className="bi bi-arrow-right ms-2" />
            </a>
          </div>
        </div>
        <div className="col-md-6">
          <div
            className="bg-secondary bg-fruit d-flex flex-column justify-content-center p-5"
            style={{ height: 300 }}
          >
            <h3 className="text-white mb-3">Organic Fruits</h3>
            <p className="text-white">
             Fresh fruits are rich in vitamins, minerals, and antioxidants that help boost immunity and keep the body healthy.
            </p>
            <a className="text-white fw-bold" href="">
              Read More
              <i className="bi bi-arrow-right ms-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Banner Start */}
  {/* About Start */}
  <div className="container-fluid about pt-5">
    <div className="container">
      <div className="row gx-5">
        <div className="col-lg-6 mb-5 mb-lg-0">
          <div className="d-flex h-70 border border-5 border-primary border-bottom-0 pt-4">
            <img className="img-fluid mt-auto mx-auto" src="/assets/img/indian-fruit-seller-with-basket-oranges.jpg" />
          </div>
        </div>
        <div className="col-lg-6 pb-5">
          <div className="mb-3 pb-2">
            <h6 className="text-primary text-uppercase">About Us</h6>
            <h1 className="display-5">
              We Produce Organic Food For Your Family
            </h1>
          </div>
          <p className="mb-4">
            Organic farming avoids chemicals and focuses on natural methods to produce safe, healthy, and environmentally friendly food.
          </p>
          <div className="row gx-5 gy-4">
            <div className="col-sm-6">
              <i className="fa fa-seedling display-1 text-secondary" />
              <h4>100% Organic</h4>
              <p className="mb-0">
                Organic farming avoids chemicals and focuses on natural methods to produce safe, healthy, and environmentally friendly food.
              </p>
            </div>
            <div className="col-sm-6">
              <i className="fa fa-award display-1 text-secondary" />
              <h4>Award Winning</h4>
              <p className="mb-0">
               A farming plan is a structured approach that outlines crops, resources, and timelines to ensure efficient and sustainable agricultural production.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* About End */}
  {/* Facts Start */}
  <div className="container-fluid bg-primary facts py-5 mb-5">
    <div className="container py-5">
      <div className="row gx-5 gy-4">
        <div className="col-lg-3 col-md-6">
          <div className="d-flex">
            <div
              className="bg-secondary rounded-circle d-flex align-items-center justify-content-center mb-3"
              style={{ width: 60, height: 60 }}
            >
              <i className="fa fa-star fs-4 text-white" />
            </div>
            <div className="ps-4">
              <h5 className="text-white">Our Experience</h5>
              <h1
                className="display-5 text-white mb-0"
                data-toggle="counter-up"
              >
                12345
              </h1>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="d-flex">
            <div
              className="bg-secondary rounded-circle d-flex align-items-center justify-content-center mb-3"
              style={{ width: 60, height: 60 }}
            >
              <i className="fa fa-users fs-4 text-white" />
            </div>
            <div className="ps-4">
              <h5 className="text-white">Farm Specialist</h5>
              <h1
                className="display-5 text-white mb-0"
                data-toggle="counter-up"
              >
                12345
              </h1>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="d-flex">
            <div
              className="bg-secondary rounded-circle d-flex align-items-center justify-content-center mb-3"
              style={{ width: 60, height: 60 }}
            >
              <i className="fa fa-check fs-4 text-white" />
            </div>
            <div className="ps-4">
              <h5 className="text-white">Complete Project</h5>
              <h1
                className="display-5 text-white mb-0"
                data-toggle="counter-up"
              >
                12345
              </h1>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="d-flex">
            <div
              className="bg-secondary rounded-circle d-flex align-items-center justify-content-center mb-3"
              style={{ width: 60, height: 60 }}
            >
              <i className="fa fa-mug-hot fs-4 text-white" />
            </div>
            <div className="ps-4">
              <h5 className="text-white">Happy Clients</h5>
              <h1
                className="display-5 text-white mb-0"
                data-toggle="counter-up"
              >
                12345
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Facts End */}
  {/* Services Start */}
  <div className="container-fluid py-5">
    <div className="container">
      <div className="row g-5">
        <div className="col-lg-4 col-md-6">
          <div className="mb-3">
            <h6 className="text-primary text-uppercase">Services</h6>
            <h1 className="display-5">Organic Farm Services</h1>
          </div>
          <p className="mb-4">
           Organic farming avoids chemicals and focuses on natural methods to produce safe, healthy, and environmentally friendly food.
          </p>
          <a href="" className="btn btn-primary py-md-3 px-md-5">
            Contact Us
          </a>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="service-item bg-light text-center p-5">
            <i className="fa fa-carrot display-1 text-primary mb-3" />
            <h4>Fresh Vegetables</h4>
            <p className="mb-0">
              Fresh vegetables provide essential nutrients and fiber that support digestion and promote overall well-being.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="service-item bg-light text-center p-5">
            <i className="fa fa-apple-alt display-1 text-primary mb-3" />
            <h4>Fresh Fruits</h4>
            <p className="mb-0">
             Fresh fruits are rich in vitamins, minerals, and antioxidants that help boost immunity and keep the body healthy.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="service-item bg-light text-center p-5">
            <i className="fa fa-dog display-1 text-primary mb-3" />
            <h4>Healty Cattle</h4>
            <p className="mb-0">
              Healthy cattle are raised with proper nutrition, clean water, and regular care to ensure high-quality dairy and meat production.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="service-item bg-light text-center p-5">
            <i className="fa fa-tractor display-1 text-primary mb-3" />
            <h4>Modern Truck</h4>
            <p className="mb-0">
              Modern truck farming uses advanced techniques and technology to grow fresh produce efficiently and supply nearby markets quickly.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="service-item bg-light text-center p-5">
            <i className="fa fa-seedling display-1 text-primary mb-3" />
            <h4>Farming Plans</h4>
            <p className="mb-0">
              A farming plan is a structured approach that outlines crops, resources, and timelines to ensure efficient and sustainable agricultural production
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Services End */}
  {/* Features Start */}
  <div className="container-fluid bg-primary feature py-5 pb-lg-0 my-5">
    <div className="container py-5 pb-lg-0">
      <div className="mx-auto text-center mb-3 pb-2" style={{ maxWidth: 500 }}>
        <h6 className="text-uppercase text-secondary">Features</h6>
        <h1 className="display-5 text-white">Why Choose Us!!!</h1>
      </div>
      <div className="row g-5">
        <div className="col-lg-3">
          <div className="text-white mb-5">
            <div
              className="bg-secondary rounded-pill d-flex align-items-center justify-content-center mb-3"
              style={{ width: 60, height: 60 }}
            >
              <i className="fa fa-seedling fs-4 text-white" />
            </div>
            <h4 className="text-white">100% Organic</h4>
            <p className="mb-0">
              Fresh vegetables provide essential nutrients and fiber that support digestion and promote overall well-being.
             
            </p>
          </div>
          <div className="text-white">
            <div
              className="bg-secondary rounded-pill d-flex align-items-center justify-content-center mb-3"
              style={{ width: 60, height: 60 }}
            >
              <i className="fa fa-award fs-4 text-white" />
            </div>
            <h4 className="text-white">Award Winning</h4>
            <p className="mb-0">
              Award-winning farming leverages innovative techniques and technology to maximize yield and sustainability
            </p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="d-block bg-white h-100 text-center p-5 pb-lg-0">
            <p>
              Fresh vegetables provide essential nutrients and fiber that support digestion and promote overall well-being.
              
            </p>
            <img className="img-fluid" src="/assets/img/feature.png" alt="" />
          </div>
        </div>
        <div className="col-lg-3">
          <div className="text-white mb-5">
            <div
              className="bg-secondary rounded-pill d-flex align-items-center justify-content-center mb-3"
              style={{ width: 60, height: 60 }}
            >
              <i className="fa fa-tractor fs-4 text-white" />
            </div>
            <h4 className="text-white">Modern Farming</h4>
            <p className="mb-0">
             Modern truck farming uses advanced techniques and technology to grow fresh produce efficiently and supply nearby markets quickly.

            </p>
          </div>
          <div className="text-white">
            <div
              className="bg-secondary rounded-pill d-flex align-items-center justify-content-center mb-3"
              style={{ width: 60, height: 60 }}
            >
              <i className="fa fa-phone-alt fs-4 text-white" />
            </div>
            <h4 className="text-white">24/7 Support</h4>
            <p className="mb-0">
             Backed by the essential safety net of 24/7 support for immediate assistance with operational issues or emergencies. 
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Features Start */}
  {/* Products Start */}
  {/* <div className="container-fluid py-5">
    <div className="container">
      <div className="mx-auto text-center mb-5" style={{ maxWidth: 500 }}>
        <h6 className="text-primary text-uppercase">Products</h6>
        <h1 className="display-5">Our Fresh &amp; Organic Products</h1>
      </div>
      <div className="owl-carousel product-carousel px-5">
        <div className="pb-5">
          <div className="product-item position-relative bg-white d-flex flex-column text-center">
            <img className="img-fluid mb-4" src="/assets/img/product-1.png" alt="" />
            <h6 className="mb-3">Organic Vegetable</h6>
            <h5 className="text-primary mb-0">$19.00</h5>
            <div className="btn-action d-flex justify-content-center">
              <a className="btn bg-primary py-2 px-3" href="">
                <i className="bi bi-cart text-white" />
              </a>
              <a className="btn bg-secondary py-2 px-3" href="">
                <i className="bi bi-eye text-white" />
              </a>
            </div>
          </div>
        </div>
        <div className="pb-5">
          <div className="product-item position-relative bg-white d-flex flex-column text-center">
            <img className="img-fluid mb-4" src="/assets/img/product-2.png" alt="" />
            <h6 className="mb-3">Organic Vegetable</h6>
            <h5 className="text-primary mb-0">$19.00</h5>
            <div className="btn-action d-flex justify-content-center">
              <a className="btn bg-primary py-2 px-3" href="">
                <i className="bi bi-cart text-white" />
              </a>
              <a className="btn bg-secondary py-2 px-3" href="">
                <i className="bi bi-eye text-white" />
              </a>
            </div>
          </div>
        </div>
        <div className="pb-5">
          <div className="product-item position-relative bg-white d-flex flex-column text-center">
            <img className="img-fluid mb-4" src="/assets/img/product-1.png" alt="" />
            <h6 className="mb-3">Organic Vegetable</h6>
            <h5 className="text-primary mb-0">$19.00</h5>
            <div className="btn-action d-flex justify-content-center">
              <a className="btn bg-primary py-2 px-3" href="">
                <i className="bi bi-cart text-white" />
              </a>
              <a className="btn bg-secondary py-2 px-3" href="">
                <i className="bi bi-eye text-white" />
              </a>
            </div>
          </div>
        </div>
        <div className="pb-5">
          <div className="product-item position-relative bg-white d-flex flex-column text-center">
            <img className="img-fluid mb-4" src="/assets/img/product-2.png" alt="" />
            <h6 className="mb-3">Organic Vegetable</h6>
            <h5 className="text-primary mb-0">$19.00</h5>
            <div className="btn-action d-flex justify-content-center">
              <a className="btn bg-primary py-2 px-3" href="">
                <i className="bi bi-cart text-white" />
              </a>
              <a className="btn bg-secondary py-2 px-3" href="">
                <i className="bi bi-eye text-white" />
              </a>
            </div>
          </div>
        </div>
        <div className="pb-5">
          <div className="product-item position-relative bg-white d-flex flex-column text-center">
            <img className="img-fluid mb-4" src="/assets/img/product-1.png" alt="" />
            <h6 className="mb-3">Organic Vegetable</h6>
            <h5 className="text-primary mb-0">$19.00</h5>
            <div className="btn-action d-flex justify-content-center">
              <a className="btn bg-primary py-2 px-3" href="">
                <i className="bi bi-cart text-white" />
              </a>
              <a className="btn bg-secondary py-2 px-3" href="">
                <i className="bi bi-eye text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> */}
  {/* Products End */}
  {/* Testimonial Start */}
  {/* <div className="container-fluid bg-testimonial py-5 my-5">
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-7">
          <div className="owl-carousel testimonial-carousel p-5">
            <div className="testimonial-item text-center text-white">
              <img
                className="img-fluid mx-auto p-2 border border-5 border-secondary rounded-circle mb-4"
                src="/assets/img/testimonial-2.jpg"
                alt=""
              />
              <p className="fs-5">
                Dolores sed duo clita justo dolor et stet lorem kasd dolore
                lorem ipsum. At lorem lorem magna ut et, nonumy labore diam
                erat. Erat dolor rebum sit ipsum.
              </p>
              <hr className="mx-auto w-25" />
              <h4 className="text-white mb-0">Client Name</h4>
            </div>
            <div className="testimonial-item text-center text-white">
              <img
                className="img-fluid mx-auto p-2 border border-5 border-secondary rounded-circle mb-4"
                src="/assets/img/testimonial-2.jpg"
                alt=""
              />
              <p className="fs-5">
                Dolores sed duo clita justo dolor et stet lorem kasd dolore
                lorem ipsum. At lorem lorem magna ut et, nonumy labore diam
                erat. Erat dolor rebum sit ipsum.
              </p>
              <hr className="mx-auto w-25" />
              <h4 className="text-white mb-0">Client Name</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> */}
  {/* Testimonial End */}
  {/* Team Start */}
  <div className="container-fluid py-5">
    <div className="container">
      <div className="mx-auto text-center mb-5" style={{ maxWidth: 500 }}>
        <h6 className="text-primary text-uppercase">The Team</h6>
        <h1 className="display-5">We Are Professional Organic Farmers</h1>
      </div>
      <div className="row g-5">
        <div className="col-lg-4 col-md-6">
          <div className="row g-0">
            <div className="col-10">
              <div className="position-relative">
                <img className="img-fluid w-100" src="/assets/img/indian-fruit-seller-with-basket-oranges.jpg" alt="" />
                <div
                  className="position-absolute start-0 bottom-0 w-100 py-3 px-4"
                  style={{ background: "rgba(52, 173, 84, .85)" }}
                >
                  <h4 className="text-white">Farmer Name</h4>
                  <span className="text-white">Designation</span>
                </div>
              </div>
            </div>
            <div className="col-2">
              <div className="h-100 d-flex flex-column align-items-center justify-content-around bg-secondary py-5">
                <a className="btn btn-square rounded-circle bg-white" href="#">
                  <i className="fab fa-twitter text-secondary" />
                </a>
                <a className="btn btn-square rounded-circle bg-white" href="#">
                  <i className="fab fa-facebook-f text-secondary" />
                </a>
                <a className="btn btn-square rounded-circle bg-white" href="#">
                  <i className="fab fa-linkedin-in text-secondary" />
                </a>
                <a className="btn btn-square rounded-circle bg-white" href="#">
                  <i className="fab fa-instagram text-secondary" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="row g-0">
            <div className="col-10">
              <div className="position-relative">
                <img className="img-fluid w-100" src="/assets/img/indian-farmer-sugarcane-field.jpg" alt="" />
                <div
                  className="position-absolute start-0 bottom-0 w-100 py-3 px-4"
                  style={{ background: "rgba(52, 173, 84, .85)" }}
                >
                  <h4 className="text-white">Farmer Name</h4>
                  <span className="text-white">Designation</span>
                </div>
              </div>
            </div>
            <div className="col-2">
              <div className="h-100 d-flex flex-column align-items-center justify-content-around bg-secondary py-5">
                <a className="btn btn-square rounded-circle bg-white" href="#">
                  <i className="fab fa-twitter text-secondary" />
                </a>
                <a className="btn btn-square rounded-circle bg-white" href="#">
                  <i className="fab fa-facebook-f text-secondary" />
                </a>
                <a className="btn btn-square rounded-circle bg-white" href="#">
                  <i className="fab fa-linkedin-in text-secondary" />
                </a>
                <a className="btn btn-square rounded-circle bg-white" href="#">
                  <i className="fab fa-instagram text-secondary" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="row g-0">
            <div className="col-10">
              <div className="position-relative">
                <img className="img-fluid w-100" src="/assets/img/indian-farmer-sugarcane-field (1).jpg" alt="" />
                <div
                  className="position-absolute start-0 bottom-0 w-100 py-3 px-4"
                  style={{ background: "rgba(52, 173, 84, .85)" }}
                >
                  <h4 className="text-white">Farmer Name</h4>
                  <span className="text-white">Designation</span>
                </div>
              </div>
            </div>
            <div className="col-2">
              <div className="h-100 d-flex flex-column align-items-center justify-content-around bg-secondary py-5">
                <a className="btn btn-square rounded-circle bg-white" href="#">
                  <i className="fab fa-twitter text-secondary" />
                </a>
                <a className="btn btn-square rounded-circle bg-white" href="#">
                  <i className="fab fa-facebook-f text-secondary" />
                </a>
                <a className="btn btn-square rounded-circle bg-white" href="#">
                  <i className="fab fa-linkedin-in text-secondary" />
                </a>
                <a className="btn btn-square rounded-circle bg-white" href="#">
                  <i className="fab fa-instagram text-secondary" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Team End */}
  {/* Blog Start */}
  {/* <div className="container-fluid py-5">
    <div className="container">
      <div className="mx-auto text-center mb-5" style={{ maxWidth: 500 }}>
        <h6 className="text-primary text-uppercase">Our Blog</h6>
        <h1 className="display-5">Latest Articles From Our Blog Post</h1>
      </div>
      <div className="row g-5">
        <div className="col-lg-4">
          <div className="blog-item position-relative overflow-hidden">
            <img className="img-fluid" src="/assets/img/blog-1.jpg" alt="" />
            <a className="blog-overlay" href="">
              <h4 className="text-white">
                Organic Farming
              </h4>
              <span className="text-white fw-bold">Jan 01, 2050</span>
            </a>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="blog-item position-relative overflow-hidden">
            <img className="img-fluid" src="/assets/img/blog-2.jpg" alt="" />
            <a className="blog-overlay" href="">
              <h4 className="text-white">
             Modern truck farming uses advanced techniques and technology to grow fresh produce efficiently and supply nearby markets quickly.
                
              </h4>
              <span className="text-white fw-bold">Jan 01, 2050</span>
            </a>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="blog-item position-relative overflow-hidden">
            <img className="img-fluid" src="/assets/img/blog-3.jpg" alt="" />
            <a className="blog-overlay" href="">
              <h4 className="text-white">
              Fresh vegetables provide essential nutrients and fiber that support digestion and promote overall well-being.
                
              </h4>
              <span className="text-white fw-bold">Jan 01, 2050</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div> */}
  {/* Blog End */}
  {/* Footer Start */}

  {/* Footer End */}
  {/* Back to Top */}
  <a href="#" className="btn btn-secondary py-3 fs-4 back-to-top">
    <i className="bi bi-arrow-up" />
  </a>
</>

        </>
    )
}