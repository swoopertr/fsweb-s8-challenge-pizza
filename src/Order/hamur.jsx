import { useState } from "react";

export default function HamurKalinligi({ hamurSizes }) {
  const [kalinlik, setKalinlik] = useState("");

  const handleChange = (event) => {
    setKalinlik(event.target.value);
  };

  return (
    <div className="hamur-container">
      <label>Hamur seç</label>
      <select name="hamur" value={kalinlik} onChange={handleChange}>
        {
        hamurSizes 
          &&
          hamurSizes.map((item,index) => <option key={index} value={item}>{item}</option> )
        }
        
      </select>  
    
      {kalinlik && <p>Seçilen kalınlık: {kalinlik}</p>}
    </div>
  );
}

