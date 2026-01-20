import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import ApiService from "../../services/ApiService"
import { Link } from "react-router-dom";

export default function UserSeason() {
    const [season, setSeason] = useState([])

    const [crops, setCrops] = useState([]);
    const [previewImage, setPreviewImage] = useState(null);




    const fetchData = () => {

        const data = {
            status:true
        }
        ApiService.allSeason(data)
            .then((res) => {
                console.log(res)
                if (res.data.success) {
                    setSeason(res.data.data)


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

    const handleSeasonClick = (_id) => {
        const data = {
            seasonId: _id
        };

        ApiService.allCrop(data)
            .then((res) => {
                if (res.data.success) {
                    setCrops(res.data.data);
                }
            })
            .catch((err) => toast.error(err.message));


    };




    return (
        <>

            
                
                    <div className="container-fluid py-5">
                        <div className="container">
                            {season.length > 0 ? (
                            <div className="row g-5">
                                {season?.map((el, index) => (

                                    <div className="col-lg-4 col-md-6">
                                        <div className="service-item bg-light text-center p-5" >
                                            {el?.image ? (
                                                <img
                                                    onClick={(e) => {
                                                        e.stopPropagation();      // 🔥 IMPORTANT
                                                        setPreviewImage(el.image);
                                                    }}
                                                    src={el.image}
                                                    alt="season"
                                                    width="70"
                                                    height="55"
                                                    style={{
                                                        objectFit: "cover",
                                                        borderRadius: "4px",
                                                        border: "1px solid #ddd"
                                                    }}
                                                />
                                            ) : (
                                                <span>No Image</span>
                                            )}
                                            <h4>{el?.seasonName}</h4>


                                            <p className="mb-0">Start Month: {el?.startMonth}</p>

                                            <p className="mb-0">End Month: {el.endMonth}</p>
                                            <Link to={`/user/crop/${el._id}`} className="btn btn-success mx-2" onClick={() => handleSeasonClick(el._id)}><i class="fa-regular fa-eye"></i></Link>


                                        </div>
                                    </div>

                                ))}
                            </div>
                            ) : (
                <div className="col-12 text-center">
                    <h4 className="text-muted">
                        No Season available
                    </h4>
                    <p>Please check back later.</p>
                </div>
            )}
                            <div className="row g-5">
                                {crops?.map((el, index) => (

                                    <div className="col-lg-4 col-md-6">
                                        <div className="service-item bg-light text-center p-5" >
                                            {/* <i className="fa fa-carrot display-1 text-primary mb-3" /> */}
                                            <h4>{el?.cropName}</h4>


                                            <p className="mb-0">duration:{el?.duration}</p>

                                            <p className="mb-0">description:{el.description}</p>

                                        </div>
                                    </div>

                                ))}

                            </div>
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
                                style={{ maxWidth: "90%", maxHeight: "90%", borderRadius: "6px" }}
                            />
                        </div>
                    )}
               

        </>
    )
}