import { useEffect, useState } from "react"
import ApiService from "../../services/ApiService"
import ReactSwitch from "react-switch"
import Swal from "sweetalert2"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"

export default function FarmerBooking() {
  const [booking, setBooking] = useState([])
  const id = sessionStorage.getItem("userId")

  const fetchData = () => {


    // const data = {
    //     limit: Limit,
    //     currentPage: currentPage
    // }
    // ApiService.allLand(data)
    //     .then((res) => {
    //         console.log(res)

    //         if (res.data.success) {
    //             setLand(res.data.data)


    //         }
    //         else {
    //             toast.error(res.data.essage)
    //         }
    //     })
    //     .catch((err) => {
    //         toast.error(err.message)
    //     })

    ApiService.allBooking()
      .then((res) => {
        console.log(res)
        if (res.data.success) {
          const farmerBookings = res.data.data.filter(
            (b) => b.landId?.farmerId?._id?.toString() === id
          );
          if (farmerBookings.length === 0) {
            // toast.error("No bookings found");

          }
          setBooking(farmerBookings);


        }
        else {
          // toast.error(res.data.message)
        }
      })
      .catch((err) => {
        toast.error(err.message)
      })
  }
  useEffect(() => {
    fetchData()
  }, [])

  const softDelete = (id, status) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `${!status ? "Accept" : "Pending"}`
    }).then((result) => {
      if (result.isConfirmed) {
        let data = {
          _id: id,
          status: !status
        }
        let token = sessionStorage.getItem("token")
        let headers = {
          Authorization: token
        }
        ApiService.softDeleteBooking(data)
          .then((res) => {
            if (res.data.success) {
              Swal.fire({
                title: res.data.message,
                // text: "Your file has been deleted.",
                icon: "success"
              });
              fetchData()
            }
            else {
              toast.error(res.data.message)
            }
          })
          .catch((err) => {
            toast.error(err.message)
          })
      }
    })
  }
  const deleteBooking = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `${!id ? "Accept" : "Pending"}`
    }).then((result) => {
      if (result.isConfirmed) {
        let data = {
          _id: id,

        }
        let token = sessionStorage.getItem("token")
        let headers = {
          Authorization: token
        }
        ApiService.DeleteBooking(data)
          .then((res) => {
            if (res.data.success) {
              Swal.fire({
                title: res.data.message,
                // text: "Your file has been deleted.",
                icon: "success"
              });
              fetchData()
            }
            else {
              toast.error(res.data.message)
            }
          })
          .catch((err) => {
            toast.error(err.message)
          })
      }
    })


  }




  return (
    <>
      <div className="container-fluid bg-primary py-5 bg-hero mb-5">
        <div className="container py-5">
          <div className="row justify-content-start">
            <div className="col-lg-8 text-center text-lg-start">
              <h1 className="display-1 text-white mb-md-4">Farmer Bookings</h1>
              <Link to="/farmer" className="btn btn-primary py-md-3 px-md-5 me-3">
                Home
              </Link>
              {/* <Link to="" className="btn btn-secondary py-md-3 px-md-5">
            Blog Grid
          </Link> */}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            {booking.length > 0 ? (
              <div className="table-responsive">
                < table className="table border">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Sno</th>
                      <th scope="col">Name</th>
                      <th scope="col">Land</th>
                      <th scope="col">Season</th>
                      <th scope="col">Crop</th>
                      <th scope="col">Lease Start Date</th>
                      <th scope="col">Lease End Date</th>

                      <th scope="col">Amount</th>






                      <th scope="col">Status</th>
                      <th scope="col">Actions</th>



                    </tr>
                  </thead>
                  <tbody>

                    {booking?.map((el, index) => (
                      <tr key={index}>
                        <td className="">{index + 1}</td>

                        <td >
                          <h5>{el?.userId?.name}</h5>
                        </td>
                        <td className="hover-bg">
                          <h5> {el?.landId?.farmerId.name}-{el?.landId?.ULPIN}</h5>
                        </td>
                        <td className="hover-bg">
                          <h5> {el?.seasonId?.seasonName}</h5>
                        </td>

                        <td className="hover-bg">
                          <h5> {el?.cropId?.cropName}</h5>
                        </td>
                        <td className="hover-bg">
                          <h5>{new Date(el?.leaseStartDate).toLocaleDateString("en-IN")}</h5>
                        </td>
                        <td className="hover-bg">
                          <h5> {new Date(el?.leaseEndDate).toLocaleDateString("en-IN")}</h5>
                        </td>


                        <td className="hover-bg">
                          <h5>Rs {el?.price}</h5>
                        </td>

                        <td className="hover-bg">
                          <h5> {el?.status ? "Booked" : "Pending"}</h5>
                        </td>
                        <td >
                          <button className="btn">
                            <ReactSwitch
                              checked={el?.status}
                              onChange={() => { softDelete(el?._id, el?.status) }} /></button>
                          <button className="btn" onClick={() => { deleteBooking(el?._id) }}><i className="fa fa-trash" aria-hidden="true"></i></button>
                          {/* <Link to={`/booking/update/${el._id}`} className="btn btn-success mx-2"> <i className="fa fa-edit"></i></Link> */}
                        </td>
                      </tr>
                    ))}

                  </tbody>
                </table>
              </div>
            ) : (
              <div className="col-12 text-center">
                <h4 className="text-muted">
                  No Booking available
                </h4>
                <p>Please check back later.</p>
              </div>
            )}
          </div>
        </div>
      </div>

    </>
  )
}