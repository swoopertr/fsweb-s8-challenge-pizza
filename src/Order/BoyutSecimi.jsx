import { useState } from "react";

export default function BoyutSecimi({ sizes }) {
  const [secilen, setSecilen] = useState(false);

  const clickButton = () => {
    setSecilen(!secilen);
  };

  return (
    <div className="boyut-container">
      <h3>Boyutlar</h3>
      {
        sizes 
        && 
        sizes.map((size, index) =>{
          
          return(
            <>
            <input name="boyutlar" type="radio" onClick={clickButton} />
            {size}
            </>
          ) 
          
        })
      }
    </div>
  );
}

