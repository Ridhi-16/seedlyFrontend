import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import ApiService from "../../services/ApiService"
import { Link } from "react-router-dom";

export default function UserLand() {
    const [land, setLand] = useState([])
    const [previewImage, setPreviewImage] = useState(null);



    const fetchData = () => {

        const data = {
            status:true,
            landAvailability:"Available"
        }
        ApiService.allLand(data)
            .then((res) => {
                console.log(res)
                if (res.data.success) {
                    setLand(res.data.data)


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
    return (
        <>
        
            
            <div className="container-fluid py-5">
                <div className="container">
                     {land.length > 0 ? (
                    <div className="row g-5">
                        
                        {land?.map((el, index) => (

                            <div className="col-lg-4 col-md-6">
                                <div className="service-item bg-light text-center p-5">
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
                                                        cursor: "pointer",
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
                                    <h4>ULPIN:{el?.ULPIN}</h4>
                                    <p className="mb-0">Farmer Name:{el?.farmerId?.name}</p>
                                    <p className="mb-0">Location:{el?.location} </p>

                                    <p className="mb-0">Area:{el?.area} sqft</p>
                                    <p className="mb-0">Land Availability:{el.landAvailability}</p>
                                    <p className="mb-2">Price: Rs {el.price}</p>
                                <Link to={`/booking/add/${el._id}`} className="btn btn-success mx-2"> <i className="fa fa-eye"></i></Link>


                                </div>
                            </div>

                        ))}

                        





                    </div>
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
            



            {previewImage && (
                <div
                    onClick={() => setPreviewImage(null)}
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
                        onClick={(e) => e.stopPropagation()}
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