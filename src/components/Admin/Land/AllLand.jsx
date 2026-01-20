import { useEffect, useState } from "react"
import ApiService from "../../services/ApiService"
import ReactSwitch from "react-switch"
import Swal from "sweetalert2"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"

export default function AllLand() {
    const [land, setLand] = useState([])
    const [previewImage, setPreviewImage] = useState(null);



    const fetchData = () => {

        // const data = {
        //     limit: Limit,
        //     currentPage: currentPage
        // }
        ApiService.allLand()
            .then((res) => {
                console.log(res)
                if (res.data.success) {
                    setLand(res.data.data)


                }
                else {
                    // toast.error(res.data.essage)
                }
            })
            .catch((err) => {
                // toast.error(err.message)
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
            confirmButtonText: `${!status ? "Accepted" : "Pending"}`
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
                ApiService.softDeleteLand(data)
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


    const deleteLand = (id) => {
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
                ApiService.DeleteLand(data)
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

            <>
                <div className="container-fluid bg-primary py-5 bg-hero mb-5">
                    <div className="container py-5">
                        <div className="row justify-content-start">
                            <div className="col-lg-8 text-center text-lg-start">
                                <h1 className="display-1 text-white mb-md-4">All lands</h1>
                                <Link to="/admin" className="btn btn-primary py-md-3 px-md-5 me-3">
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
                            <div className="table-responsive">
                                {land.length > 0 ? (
                                    < table className="table border">
                                        <thead className="thead-dark">
                                            <tr>
                                                <th scope="col">Sno</th>
                                                <th scope="col">Name</th>

                                                <th scope="col">ULPIN</th>
                                                <th scope="col">Location</th>
                                                <th scope="col">Land Availability</th>
                                                <th scope="col">Area</th>

                                                <th scope="col">Price</th>
                                                <th scope="col">Images</th>

                                                <th scope="col">Status</th>
                                                <th scope="col">Actions</th>



                                            </tr>
                                        </thead>
                                        <tbody>

                                            {land?.map((el, index) => (
                                                <tr key={index}>
                                                    <td className="">{index + 1}</td>
                                                    <td >
                                                        <h5>{el?.farmerId?.name}</h5>
                                                    </td>

                                                    <td >
                                                        <h5>{el?.ULPIN}</h5>
                                                    </td>
                                                    <td >
                                                        <h5>{el?.location}</h5>
                                                    </td>
                                                    <td className="hover-bg">
                                                        <h5> {el?.landAvailability}</h5>
                                                    </td>

                                                    <td className="hover-bg">
                                                        <h5> {el?.area} sqft</h5>
                                                    </td>

                                                    <td className="hover-bg">
                                                        <h5>Rs {el?.price}</h5>
                                                    </td>
                                                    <td className="hover-bg">
                                                        <div
                                                            style={{
                                                                display: "flex",
                                                                gap: "6px",
                                                                flexWrap: "wrap",
                                                                justifyContent: "center"
                                                            }}
                                                        >
                                                            {Array.isArray(el?.images) && el.images.length > 0 ? (
                                                                el.images.map((img, i) => (
                                                                    <img
                                                                        onClick={() => setPreviewImage(img)}
                                                                        key={i}
                                                                        src={img}
                                                                        alt="land"
                                                                        width="60"
                                                                        height="50"
                                                                        style={{
                                                                            objectFit: "cover",
                                                                            borderRadius: "4px",
                                                                            border: "1px solid #ddd"
                                                                        }}
                                                                    />
                                                                ))
                                                            ) : (
                                                                <span>No Image</span>
                                                            )}
                                                        </div>
                                                    </td>

                                                    <td className="hover-bg">
                                                        <h5> {el?.status ? "Accepted" : "Pending"}</h5>
                                                    </td>
                                                    <td >
                                                        <button className="btn">
                                                            <ReactSwitch
                                                                checked={el?.status}
                                                                onChange={() => { softDelete(el?._id, el?.status) }} /></button>
                                                        <button className="btn" onClick={() => { deleteLand(el?._id) }}><i class="fa fa-trash" aria-hidden="true"></i></button>
                                                        {/* <Link to={`/farmer/land/update/${el._id}`} className="btn btn-success mx-2"> <i className="fa fa-edit"></i></Link> */}
                                                    </td>
                                                </tr>
                                            ))}

                                        </tbody>
                                    </table>
                                ) : (
                                    <div className="col-12 text-center">
                                        <h4 className="text-muted">
                                            No land available
                                        </h4>
                                        <p>Please check back later.</p>
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>
                </div>
            </>


            {previewImage && (
                <div
                    onClick={() => setPreviewImage(null)} // click outside closes
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        backgroundColor: "rgba(0,0,0,0.7)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 1000
                    }}
                >
                    <img
                        src={previewImage}
                        alt="Preview"
                        onClick={(e) => e.stopPropagation()} // clicking image does not close
                        style={{
                            maxWidth: "90%",
                            maxHeight: "90%",
                            borderRadius: "6px",
                            boxShadow: "0 0 10px #000"
                        }}
                    />
                </div>
            )}



        </>
    )
}