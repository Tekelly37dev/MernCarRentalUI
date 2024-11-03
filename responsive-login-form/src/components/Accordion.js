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
                  paddingLeft: '20px',
                  textAlign: 'left',
                }}
                >
                  {item.content.map((listItem, i) => (
                    <li key={i} style={{ marginBottom: '8px' }}>{listItem}</li>
                  ))}
                </ul>
              ) : item.isColumnList ? ( 
                <div className='content-card'
                style={{
                  marginBottom: '2px',
                  marginLeft:'20px',
                  backgroundColor: '#f0f0f0', // light gray background
                  width: '95%',
                  height:'100%'
                  
                }}
                >
                <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  columnGap: '100px',
                  //backgroundColor: '#f0f0f0', // light gray background
                  width: '100%',
                  // marginBottom: '25px',
                  marginLeft:'20px',
                  marginTop:'20px',
                  textAlign: 'left',
                }}
              >

                    {item.content.map((listItem, i) => (
                    <div key={i} style={{ margin: '8px 8px 8px 8px', display: 'flex', alignItems: 'center' }}>
                      {/* Check if an icon exists for this item and render it */}
                      {featureIcons[listItem.toLowerCase()] || featureIcons["standard"]}
                      <span style={{ marginLeft: '8px', }}>{listItem}</span>
                    </div>
                  ))}
                </div>
              </div>
              )
              
              :(
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
    content: "Accordion sections can expand or collapse to show or hide content, helping reduce visual clutter.",
   
  },
  {
    title: "Description",
    content: "It allows users to consume content in small chunks, making it easier to navigate and more user-friendly.",
   
  }
  
];

export default Accordion;
