import { useState } from "react";

export default function ToplamPizza() {
  const [toplam, setToplam] = useState(1); 

  const artis = () => {
    setToplam(toplam + 1);
  };

  const azalis = () => {
    if (toplam > 1) {
      setToplam(toplam - 1);
    }
  };

  return (
    <div>
      <button onClick={azalis}>-</button>
      <span style={{ margin: "0 10px" }}>{toplam}</span>
      <button onClick={artis}>+</button>
    </div>
  );
}
