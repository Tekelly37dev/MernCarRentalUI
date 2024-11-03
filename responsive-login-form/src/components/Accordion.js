import React, { useState, useRef } from 'react';
import './Accordion.css';
import { FaCarSide, FaTachometerAlt, FaBluetooth, FaWifi, FaCamera, FaTint, FaSun, FaCompactDisc, FaKey, FaShieldAlt} from 'react-icons/fa';

/*
No, `prevIndexes` is not a built-in parameter—it's a variable name chosen by the developer to represent the previous state of `activeIndexes`.

When you pass a function to the `setActiveIndexes` state updater (rather than a new value directly), React automatically supplies the **current** state as an argument to that function. This is useful when your new state depends on the previous one.

Here’s why `prevIndexes` has the previous array elements:

1. **Functional Update Pattern**: When you call `setActiveIndexes` with a function, React uses the latest value of the state as the argument for that function. So, in this case, `prevIndexes` represents the current state of `activeIndexes` at the time of the update.

2. **React’s Asynchronous Nature**: React's state updates are often batched and asynchronous. Using this function-based syntax (`(prevIndexes) => {...}`) ensures you’re working with the most up-to-date version of `activeIndexes`, even if multiple state updates are queued up.

So, while `prevIndexes` isn’t a keyword, it’s a variable that receives the previous state directly from React’s internal mechanisms, ensuring the function has the latest state to work with.
*/

const Accordion = () => {
  const [activeIndexes, setActiveIndexes] = useState([]);
  const contentRef = useRef([]);

  const toggleAccordion = (index) => {
    setActiveIndexes((prevIndexes) => {
      // Check if index is already in the array
      if (prevIndexes.includes(index)) {
        // If it's active, remove it (pop it from the stack)
        return prevIndexes.filter((i) => i !== index);
      } else {
        // If it's not active, add it (push it to the stack)
        return [...prevIndexes, index];
      }
    });
  };

  return (
    <div className="accordion-container">
      {/* <h2>Accordion</h2> */}
      <div className="accordion">
        {accordionData.map((item, index) => (
          <div
            key={index}
            className={`accordion-item ${activeIndexes.includes(index) ? 'active' : ''}`}
          >
            <button
              className="accordion-header"
              onClick={() => toggleAccordion(index)}
            >
              <span className="accordion-title">{item.title}</span>
              {/* <span className="accordion-icon">+</span> */}
              {/* Conditionally render the icon to + or - depending on if the index is in the array 'activeIndexes' */}
              <span className="accordion-icon">
              {activeIndexes.includes(index) ? '-' : '+'}
              
              </span>
            </button>
            <div
              className="accordion-content"
              ref={(el) => (contentRef.current[index] = el)}
              style={{
                alignItems: 'center',
                maxHeight: activeIndexes.includes(index) ? `100%` : '0',
                maxWidth: activeIndexes.includes(index) ? `100%` : '0',
                paddingBottom: activeIndexes.includes(index) ? '16px' : '0',

              }}
            >
              {item.isBulletedList ? (
                <ul
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  // gap: '8px',
                  columnGap: '100px',
                  rowGap: '8px',
                  listStyleType: 'disc',
                  paddingLeft: '120px',
                  textAlign: 'left',
                  color: 'rgb(127, 127, 127)' 
                }}
                >
                  {item.content.map((listItem, i) => (
                    <li key={i} style={{ marginBottom: '8px' }}>{listItem}</li>
                  ))}
                </ul>
              ) : item.isColumnList ? ( 
                <div className='content-card'>
                <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  columnGap: '100px',
                  //backgroundColor: '#f0f0f0', // light gray background
                  width: '100%',
                  // marginBottom: '25px',
                  marginLeft:'20px',
                  // marginTop:'20px',
                  textAlign: 'left',
                  
                }}
              >
                    {item.content.map((listItem, i) => (
                    <div key={i} style={{ margin: '8px 8px 8px 8px', display: 'flex', alignItems: 'center' }}>
                      {/* Check if an icon exists for this item and render it */}
                      {/* Apply black color to the icon */}
                      <span style={{ color: 'black' }}>
                        {featureIcons[listItem.toLowerCase()] || featureIcons["standard"]}
                      </span>
                      {/* Apply grey color to the accompanying text */}
                      <span style={{ marginLeft: '8px', color: 'rgb(127, 127, 127)' }}>{listItem}</span>
                    </div>
                  ))}
                </div>
              </div>
              ) : item.isList ?(
                <ul
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  columnGap: '100px',
                  rowGap: '8px',
                  listStyleType: 'none', // Remove bullets
                  paddingLeft: '120px',
                  textAlign: 'left',
                  color: 'rgb(127, 127, 127)' 
                }}
              >
                {item.content.map((listItem, i) => (
                  <li key={i} style={{ marginBottom: '8px' }}>{listItem}</li>
                ))}
              </ul>
            ):(
                <p>{item.content}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
const featureIcons = {
  // "cruise control": <FaCruiseControl />,
  "bluetooth": <FaBluetooth />,
  "wifi": <FaWifi />,
  "cruise control":<FaTachometerAlt/>,
  "back-up camera": <FaCamera/>,
  "standard": <FaCarSide />,
  "keyless entry": <FaKey/>,
  "sunroof": <FaSun/>,
  "anti theft system":<FaShieldAlt/>
};

const accordionData = [
  {
    title: "Details",
    content: [
      "Exterior Color: Super White",
      "Interior Color: Ash",
      "Body Style: Sedan",
      "Engine: Regular Unleaded I-4 2.5 L/152",
      "Transmission: 8-Speed Automatic w/OD",
      "City MPG: 29",
      "Highway MPG: 41”",
    ],
    type: "BulletedList",
    isBulletedList: true
  },
  {
    title: "Vehicle Highlights",
    content: [
      "Anti Theft System",
      "Wifi",
      "Keyless Entry",
      "Back-Up Camera",
      "Cruise Control",
      // "Keyless Entry",
      // "Steering Wheel Controls",
      "Bluetooth",
      "Sunroof",
    ],
    isColumnList: true
  },
  {
    title: "Options",
    content:[
      "Super white",
      "Power Steering",
      "4-Wheel Disc Brakes",
      "Wheel Covers",
      "Tires - Front All-Season",
      "Tires - Rear All-Season",
      "Temporary Spare Tire",
      "Rear Defrost",
      "Variable Speed Intermittent Wipers",
      "Automatic Headlights",
      "Automatic Highbeams",
      "MP3 Capability",
      "Telematics",
      "WiFi Hotspot",
      "Requires Subscription",
      "Bucket Seats",
      "Adjustable Steering Wheel",
      "Power Windows",
      "Power Door Locks",
      "Cruise Control",
      "Woodgrain Interior Trim",
      "Driver Vanity Mirror",
      "Power Windows",
      "Trip Computer",
      "Traction Control",
      "Traction Control",
      "Lane Departure Warning",
      "Lane Departure Warning",
      "Driver Monitoring",
      "Driver Air Bag",
      "Front Head Air Bag",
      "Passenger Air Bag Sensor",
      "Rear Side Air Bag",
      "Child Safety Locks",
      "Front Wheel Drive",
      "ABS",
      "Brake Assist",
      "Steel Wheels",
      "Tires - Front Performance",
      "Tires - Rear Performance",
      "Power Mirror(s)",
      "Intermittent Wipers",
      "Daytime Running Lights",
      "LED Headlights",
      "AM/FM Stereo",
      "Bluetooth Connection",
      "Auxiliary Audio Input",
      "Smart Device Integration",
      "Steering Wheel Audio Controls",
      "Rear Bench Seat",
      "Trip Computer",
      "Keyless Entry",
      "Remote Trunk Release",
      "Adaptive Cruise Control",
      "Cloth Seats",
      "Passenger Vanity Mirror",
      "Power Door Locks",
      "Immobilizer",
      "Stability Control",
      "Front Side Air Bag",
      "Lane Keeping Assist",
      "Front Collision Mitigation",
      "Tire Pressure Monitor",
      "Passenger Air Bag",
      "Rear Head Air Bag",
      "Front Side Air Bag",
      "Knee Air Bag",
      "Back-Up Camera"],
    isList: true
   
  },
  {
    title: "Description",
    content: "Recent Arrival! 2019 Toyota Camry SE KBB Fair Market Range High: $15,002 ABS brakes, Active Cruise Control, Alloy wheels, Electronic Stability Control, Illuminated entry, Low tire pressure warning, Navigation System, Remote keyless entry, Traction control. CARFAX One-Owner. THIS VEHICLE INCLUDES THE FOLLOWING FEATURES: ABS brakes, Active Cruise Control, Alloy wheels, Electronic Stability Control, Illuminated entry, Low tire pressure warning, Navigation System, Remote keyless entry, Traction control, 4-Wheel Disc Brakes, 6 Speakers, Air Conditioning, AM/FM radio, Apple CarPlay, Auto High-beam Headlights, Automatic temperature control, Brake assist, Bumpers: body-color, Delay-off headlights, Driver door bin, Driver vanity mirror, Dual front impact airbags, Dual front side impact airbags, Emergency communication system: Safety Connect, Exterior Parking Camera Rear, Fabric Seat Trim w/SofTex, Four wheel independent suspension, Front anti-roll bar, Front Bucket Seats, Front Bucket Sport Seats, Front Center Armrest, Front reading lights, Fully automatic headlights, Knee airbag, Leather Shift Knob, Occupant sensing airbag, Outside temperature display, Overhead airbag, Overhead console, Panic alarm, Passenger door bin, Passenger vanity mirror, Power door mirrors, Power driver seat, Power steering, Power windows, Radio data system, Radio: Entune 3.0 Audio w/App Suite, Rear anti-roll bar, Rear reading lights, Rear seat center armrest, Rear side impact airbag, Rear window defroster, Security system, Speed control, Speed-sensing steering, Split folding rear seat, Spoiler, Sport steering wheel, Steering wheel mounted audio controls, Tachometer, Telescoping steering wheel, Tilt steering wheel, Trip computer, Variably intermittent wipers, and Wheels: 8.0J x 18\" Black Machined-Finish Alloy. Awards: * 2019 KBB.com 10 Most Comfortable Cars Under $30,000 * 2019 KBB.com 10 Best Sedans Under $30,000 * 2019 KBB.com Brand Image Awards * 2019 KBB.com Best Resale Value Awards Call us at 803-786-4111 or come by and see why the Midlands Toyota Red Carpet Experience is the best in town, a World Class experience from beginning to end."
   
  }
  
];

export default Accordion;
