import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import ApiService from "../../services/ApiService"
import { Link, useParams } from "react-router-dom"
// import CropBubble from "../../pages/CropBubble"

export default function UserCrop() {
    const [crop, setCrop] = useState([])
    const [previewImage, setPreviewImage] = useState(null);

    let { id } = useParams()
    const fetchData = () => {

        const data = {
            status:true,
            seasonId: id
        };
        ApiService.allCrop(data)
            .then((res) => {
                console.log(res)
                if (res.data.success) {
                    setCrop(res.data.data)



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
                    <div className="row g-5">
                        <div className="row g-5">
                            {crop.length > 0 ? (
                                crop.map((el, index) => (
                                    <div className="col-lg-4 col-md-6" key={el._id || index}>
                                        <div className="service-item bg-light text-center p-5">

                                            {el?.image ? (
                                                <img
                                                    onClick={() => setPreviewImage(el.image)}
                                                    src={el.image}
                                                    alt="land"
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
                                            <h4>{el.cropName}</h4>

                                            <p className="mb-0">
                                                Season: {el?.seasonId?.seasonName}
                                            </p>


                                            <p className="mb-0">
                                                Duration: {el?.duration}
                                            </p>

                                            <p className="mb-0">
                                                Description: {el.description}
                                            </p>
<Link to={`/user/viewland/${el.landId._id}`} className="btn btn-success mx-2">
    <i className="fa-regular fa-eye"></i>
  </Link>
                                            

                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="col-12 text-center">
                                    <h4 className="text-muted">
                                        No crops available for this season
                                    </h4>
                                    <p>Please check back later.</p>
                                </div>
                            )}
                        </div>






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
            {/* <CropBubble/> */}

        </>
    )
}