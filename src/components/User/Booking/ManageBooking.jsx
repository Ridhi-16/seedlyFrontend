import { useEffect, useState } from "react"
import ApiService from "../../services/ApiService"
import ReactSwitch from "react-switch"
import Swal from "sweetalert2"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

export default function ManageBooking() {
    const [booking, setBooking] = useState([])


    const navigate = useNavigate()


    const id = sessionStorage.getItem("userId");
    const fetchData = () => {

        // const data = {
        //     limit: Limit,
        //     currentPage: currentPage
        // }
        const data = {
            userId: id
        };

        ApiService.allBooking(data)
            .then((res) => {
                console.log(res)
                if (res.data.success) {
                    setBooking(res.data.data)


                }
                else {
                    toast.error(res.data.essage)
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
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: `${!status ? "Enable" : "Disable"}`
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
            confirmButtonText: `${!id ? "Enable" : "Delete"}`
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
                            <h1 className="display-1 text-white mb-md-4">Manage Bookings</h1>
                            <Link to="/" className="btn btn-primary py-md-3 px-md-5 me-3">
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
                                            <th scope="col">Farmer Name</th>
                                            <th scope="col">Location</th>



                                            <th scope="col">Land</th>
                                            <th scope="col">LeaseStartDate</th>
                                            <th scope="col">LeaseEndDate</th>
                                            <th scope="col">Season</th>
                                            <th scope="col">Crop</th>

                                            <th scope="col">Amount</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Progress</th>
                                          





                                        </tr>
                                    </thead>
                                    <tbody>

                                        {booking?.map((el, index) => (
                                            <tr key={index}>
                                                <td className="">{index + 1}</td>

                                                <td >
                                                    <h5>{el?.landId?.farmerId?.name}</h5>
                                                </td>
                                                <td >
                                                    <h5>{el?.landId?.location}</h5>
                                                </td>

                                                <td className="hover-bg">
                                                    <h5> {el?.landId?.farmerId?.name}-{el.landId?.ULPIN}</h5>
                                                </td>

                                                <td className="hover-bg">
                                                    <h5>{new Date(el?.leaseStartDate).toLocaleDateString("en-IN")}</h5>
                                                </td>
                                                <td className="hover-bg">
                                                    <h5> {new Date(el?.leaseEndDate).toLocaleDateString("en-IN")}</h5>
                                                </td>
                                                <td className="hover-bg">
                                                    <h5> {el?.seasonId?.seasonName}</h5>
                                                </td>

                                                <td className="hover-bg">
                                                    <h5> {el?.cropId?.cropName}</h5>
                                                </td>
                                                <td className="hover-bg">
                                                    <h5> {el?.price}</h5>
                                                </td>


                                                <td className="hover-bg">
                                                    <h5> {el?.status ? "Booked" : "Pending"}</h5>
                                                </td>
                                                <td className="hover-bg">
                                                    {el?.status ? (

                                                        <Link to={`/user/progress/${el._id}`} className="btn btn-success mx-2"> <i className="fa fa-eye"></i></Link>
                                                    ) : ("")}
                                                </td>


                                                {/* <td >
                            <button className="btn">
                                <ReactSwitch
                              checked={el?.status}
                              onChange={() => {softDelete(el?._id, el?.status)}}/></button>
                          <button  className="btn" onClick={() => {deleteBooking(el?._id)}}><i class="fa fa-trash" aria-hidden="true"></i></button>
                            <Link to={`/booking/update/${el._id}`} className="btn btn-success mx-2"> <i className="fa fa-edit"></i></Link>
                          </td> */}
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