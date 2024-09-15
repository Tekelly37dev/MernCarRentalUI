
import { useParams } from 'react-router-dom';
import "./detailspage.css"
import Slider from "./Slider";

const DetailsPage = () => {
    const { id } = useParams(); // Access the 'id' from the URL

    // Now you can use the 'id' to fetch data or display content
    return (
        <>
                    {/* <h1>Details Page for ID: {id}</h1> */}
            <div className="row">
                <div className="col-md-5 col-lg-3">
                    <div className="list-view">
                        <h3 className="font-30 b-600 mb-3 car-name">2023 BMW M3</h3>
                        <ul className="list-unstyled d-flex flex-column mb-0 mt-5 car-details">
                        <li className="d-lg-flex">
                            <div className="font-20 b-600 w-50">Mileage</div>
                            <div className="font-16 w-50">2,220 </div>
                        </li>
                        <li className="d-lg-flex">
                            <div className="font-20 b-600 w-50">Interior</div>
                            <div className="font-16 w-50">Kyalami Orange/Black</div>
                        </li>
                        <li className="d-lg-flex">
                            <div className="font-20 b-600 w-50">Exterior</div>
                            <div className="font-16 w-50">Skyscraper Grey Metallic</div>
                        </li>
                        <li className="d-lg-flex">
                            <div className="font-20 b-600 w-50">Transmission</div>
                            <div className="font-16 w-50">8-Speed Shiftable Automatic</div>
                        </li>
                        <li className="d-lg-flex">
                            <div className="font-20 b-600 w-50">Engine</div>
                            <div className="font-16 w-50">
                            3.0L Twin Turbo I6 503hp 479ft. lbs.
                            </div>
                        </li>
                        <li className="d-lg-flex">
                            <div className="font-20 b-600 w-50">Stock #</div>
                            <div className="font-16 w-50 t">R07394</div>
                        </li>
                        <li className="d-lg-flex">
                            <div className="font-20 b-600 w-50">VIN</div>
                            <div className="font-16 w-50">WBS43AY07PFR07394</div>
                        </li>
                        <li className="d-lg-flex">
                            <div className="font-20 b-600 w-50">Trim</div>
                            <div className="font-16 w-50">Competition xDrive</div>
                        </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-7 col-lg-9 vehicleDesktop">
                    {/* Place slideshow/image slider show of cars here  */}
                    <div className="slider-main">
                    <Slider />
                    </div>
                </div>
            </div>
            <div className="row">
                
                
            </div>

    </>
    );
};

export default DetailsPage;
