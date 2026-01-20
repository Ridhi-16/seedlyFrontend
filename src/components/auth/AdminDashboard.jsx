import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import ApiService from "../services/ApiService"

export default function AdminDashboard(){
    const [details, setDetails]=useState([])
    const fetchData=()=>{
        ApiService.dashboard(null)
         .then((res)=>{
                    console.log(res)
                    if(res.data.success){
                        setDetails(res.data)
        
                    }
                    else{
                        toast.error(res.data.message)
                    }
                })
                .catch((err)=>{
                    toast.error(err.message)
                })
    }
    useEffect(()=>{
        fetchData()
    },[])
    return(

    <>
             <div className="container-fluid py-5">
    <div className="container">
      <div className="row g-5">
        {/* <div className="col-lg-4 col-md-6">
          <div className="mb-3">
            <h6 className="text-primary text-uppercase">Land</h6>
            <h1 className="display-5">{details.totalLand}</h1>
          </div>
          
        </div> */}
        <div className="col-lg-4 col-md-6">
          <div className="service-item bg-light text-center p-5">
            <i className="fa-solid fa-user display-1 text-primary mb-3" />
            <h4>Users</h4>
            <p className="mb-0">
              {details.totalusers}            </p>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="service-item bg-light text-center p-5">
            <i className="fa fa-tractor display-1 text-primary mb-3" />
            <h4>Farmers</h4>
            <p className="mb-0">
                 { details.totalFarmers}
            </p>
          </div>
        </div>


        <div className="col-lg-4 col-md-6">
          <div className="service-item bg-light text-center p-5">
            <i className="fa fa-carrot display-1 text-primary mb-3" />
            <h4>Crops</h4>
            <p className="mb-0">
             { details.totalCrop}
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="service-item bg-light text-center p-5">
            <i className="fa-solid fa-hand-holding-dollar display-1 text-primary mb-3" />
            <h4>Bookings</h4>
            <p className="mb-0">
            { details.totalBooking}            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="service-item bg-light text-center p-5">
            <i className="fa fa-solid fa-bars-progress display-1 text-primary mb-3" />
            <h4>FarmingProgress</h4>
            <p className="mb-0">
            { details.totalprogress}
            </p>
          </div>
        </div>
        
        <div className="col-lg-4 col-md-6">
          <div className="service-item bg-light text-center p-5">
            <i className="fa fa-calendar display-1 text-primary mb-3" />
            <h4>Seasons</h4>
            <p className="mb-0">
                 { details.totalSeason}
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="service-item bg-light text-center p-5">
            <i className="fa fa-seedling display-1 text-primary mb-3" />
            <h4>Lands</h4>
            <p className="mb-0">
              {details.totalLand}            </p>
          </div>
        </div>
      </div>
    </div>
  </div>



    </>
    
)
}