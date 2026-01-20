



import Header from './components/layouts/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'




import About from './components/pages/About'
import Service from './components/pages/Service'
import Team from './components/pages/Team'
import Blog from './components/pages/Blog'
import Product from './components/pages/Product'
import Detail from './components/pages/Detail'
import Feature from './components/pages/Feature'
import Testimonial from './components/pages/Testimonial'
import Layout from './components/layouts/Layout'
import Contact from './components/pages/Contact'
import Home from './components/pages/Home'
import Login from './components/auth/Login'
import { Bounce, ToastContainer } from 'react-toastify'
import Register from './components/auth/Register'
import FarmerRegister from './components/auth/FarmerRegister'
import AddSeason from './components/Admin/Season/AddSeason'
import AllSeason from './components/Admin/Season/AllSeason'
import UpdateSeason from './components/Admin/Season/UpdateSeason'
import AddLand from './components/Farmer/Land/AddLand'

import UpdateLand from './components/Farmer/Land/UpdateLand'
import AddCrop from './components/Farmer/Crop/AddCrop'
import AllCrop from './components/Farmer/Crop/AllCrop'
import Updatecrop from './components/Farmer/Crop/UpdateCrop'
import AllBooking from './components/Admin/Booking/AllBooking'
import UpdateBooking from './components/User/Booking/UpdateBooking'
import AddProgress from './components/Farmer/Progress/AddProgress'
import AllProgress from './components/Farmer/Progress/AllProgress'
import UpdateProgress from './components/Farmer/Progress/UpdateProgress'
import AdminLayout from './components/layouts/AdminLayout'
import FarmerLayout from './components/layouts/FarmerLayout'
import AllLand from './components/Admin/Land/AllLand'
// import ManageBooking from './components/User/ManageBooking'
// import AddBooking from './components/User/AddBooking'
import ManageLand from './components/Farmer/Land/ManageLand'
import UserLand from './components/User/Land/UserLand'
import UserCrop from './components/User/Crop/UserCrop'
import UserSeason from './components/User/Season/UserSeason'
import AdminDashboard from './components/auth/AdminDashboard'
import FarmerDashboard from './components/Farmer/FarmerDashboard'
import FarmerBooking from './components/Farmer/Booking/FarmerBooking'
import AddBooking from './components/User/Booking/AddBooking'
import ManageBooking from './components/User/Booking/ManageBooking'
import UserProgress from './components/User/Progress/UserProgress'
import ManageUsers from './components/Admin/User/ManageUsers'


function App() {
 

  return (
    <>
   

      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="service" element={<Service />} />
            <Route path="team" element={<Team />} />
            <Route path="detail" element={<Detail />} />
            <Route path="feature" element={<Feature />} />
            <Route path="testimonials" element={<Testimonial />} />

            <Route path="blog" element={<Blog />} />
            <Route path="product" element={<Product />} />
            <Route path="contact" element={<Contact />} />
           <Route path="/login" element={<Login/>}/>
           <Route path="/register" element={<Register/>}/>
           <Route path="/farmerregister" element={<FarmerRegister/>}/>
           
           
           <Route path="/booking/manage" element={<ManageBooking/>}/>
           
           <Route path="/booking/add/:id" element={<AddBooking/>}/>
           
           <Route path="/booking/update/:id" element={<UpdateBooking/>}/>
           <Route path="/user/land" element={<UserLand/>}/>
           <Route path="/user/crop/:id" element={<UserCrop/>}/>
           <Route path="/user/season" element={<UserSeason/>}/>
           <Route path="/user/progress/:id" element={<UserProgress/>}/>




          
            
          </Route>

          <Route path="/admin" element={<AdminLayout />}>
           <Route index element={<AdminDashboard />} />
            <Route path="land/all" element={<AllLand/>}/>
            <Route path="season/add" element={<AddSeason/>}/>
           <Route path="season/all" element={<AllSeason/>}/>
           <Route path="season/update/:id" element={<UpdateSeason/>}/>
           <Route path="booking/all" element={<AllBooking/>}/>
           <Route path="user/all" element={<ManageUsers/>}/>


           
          </Route>

          <Route path="/farmer" element={<FarmerLayout />}>
           <Route index element={<FarmerDashboard/>} /> 
           <Route path="land/manage" element={<ManageLand/>}/>

           <Route path="booking/manage" element={<FarmerBooking/>}/>

          <Route path="land/add" element={<AddLand/>}/>
           <Route path="land/update/:id" element={<UpdateLand/>}/>
           <Route path="crop/add" element={<AddCrop/>}/>
           <Route path="crop/all" element={<AllCrop/>}/>
           <Route path="crop/update/:id" element={<Updatecrop/>}/>
            <Route path="progress/add" element={<AddProgress/>}/>
           <Route path="progress/all" element={<AllProgress/>}/>
           <Route path="progress/update/:id" element={<UpdateProgress/>}/>
           

            
          </Route>


          
        </Routes>
      </BrowserRouter>


<ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Bounce}


    />



    </>
  )
}

export default App
