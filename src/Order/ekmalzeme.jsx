
import { useState } from "react";

export default function EkMalzeme({ malzeme }) {
  const [secilen, setSecilen] = useState(false);

  const clickButton = () => {
    setSecilen(!secilen);
  };

  return (
    <>
      {
      malzeme && 
      malzeme.map((size, index) => (
        <label key={index}>
          <input type="checkbox" onClick={clickButton} />
          {size}
        </label>
      ))}
    </>
  );
}

    
        
    

    
    
