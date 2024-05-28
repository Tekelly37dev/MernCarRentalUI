
import { useState, useEffect } from 'react';
import "./inventory.css"
import SearchInventory from "./SearchInventory"; 
import GeneralItemsDataService from "../services/general.service";
//Parent Componet Inventory
//Old way of static liat of cars
// export default function Inventory() {
//     return <>
//         <title> Responsive Card Design using HTML &amp; CSS</title>
//         <meta charSet="utf-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         {/* <link rel="stylesheet" type="text/css" href="css/style.css" /> */}
//         <div className="card-container">

//             <div className="card">
//                 <img src="./bronco.jpg" />
//                 <div className="card-content">
//                     <h3>Card 1</h3>
//                     <p>
//                     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
//                     eiusmod tempor incididunt ut labore et dolore magna aliqua
//                     </p>
//                     <a href="" className="btn">
//                     Read More
//                     </a>
//                 </div>
//             </div>
//         </div>
//     </>
// }

//export default function Inventory({ cars }) {
    export default function Inventory() {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await GeneralItemsDataService.getAll();
            console.log("API Response:", response.data);
            setCars(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);
    return (
        <>
            {/* <title>Responsive Card Design using HTML & CSS</title> */}
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            
               <SearchInventory/>
            
            <div className="card-container">
                {cars.map((car, index) => (
                    <div className="card" key={index}>
                        <img src={car.image} alt={car.name} />
                        <div className="card-content">
                            <h3>{car.name}</h3>
                            <p>{car.description}</p>
                            <a href={car.link} className="btn">
                                Read More
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

