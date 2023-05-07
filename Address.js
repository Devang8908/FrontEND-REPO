import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Address.css";
import { Context } from "../../api/context";


function Address() {

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [flat, setFlat] = useState("");
  const [area, setArea] = useState("");
  const [landmark, setLandmark] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const navigate = useNavigate();
  const{Address,setAddress} = useContext(Context);

  const deliver = (e) => {
    e.preventDefault();

    setAddress({fullName,phone,flat,area,landmark,city,state});
    

    navigate("/payment");
  };

  return (
    <div className="Container">

      <div className="Main">
        <form className="FormContainer">
          <div className="InputContainer">
            <p>Full Name</p>
            <input
              onChange={(e) => setFullName(e.target.value)}
              type="text"
              placeholder="John Smith"
              value={fullName}
            />
          </div>
          <div className="InputContainer">
            <p>Phone Number</p>
            <input
              type="text"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
          </div>
          <div className="InputContainer">
            <p>Flat, House no. Building, Company</p>
            <input
              type="text"
              onChange={(e) => setFlat(e.target.value)}
              value={flat}
            />
          </div>
          <div className="InputContainer">
            <p>Area, Colony, Street</p>
            <input
              type="text"
              onChange={(e) => setArea(e.target.value)}
              value={area}
            />
          </div>
          <div className="InputContainer">
            <p>Landmark</p>
            <input
              type="text"
              onChange={(e) => setLandmark(e.target.value)}
              value={landmark}
            />
          </div>
          <div className="InputContainer">
            <p>Town/City</p>
            <input
              type="text"
              onChange={(e) => setCity(e.target.value)}
              value={city}
            />
          </div>
          <div className="InputContainer">
            <p>State/Province</p>
            <input
              type="text"
              onChange={(e) => setState(e.target.value)}
              value={state}
            />
          </div>

          <button onClick={deliver}>Deliver to this Address</button>
        </form>
      </div>
    </div>
  );
}

export default Address;