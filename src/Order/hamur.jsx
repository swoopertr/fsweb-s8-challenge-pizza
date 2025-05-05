import { useState } from "react";

export default function HamurKalinligi({ hamurSizes }) {
  const [kalinlik, setKalinlik] = useState("");

  const handleChange = (event) => {
    setKalinlik(event.target.value);
  };

  return (
    <div>
      <h3>Hamur Kalınlığı Seç:</h3>
      {hamurSizes?.map((size, index) => (
        <label key={index}>
          <input
            type="radio"
            name="hamur" 
            value={size}
            checked={kalinlik === size}
            onChange={handleChange}
          />
          {size}
        </label>
      ))}

      {kalinlik && <p>Seçilen kalınlık: {kalinlik}</p>}
    </div>
  );
}
