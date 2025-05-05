import { useState } from "react";

export default function ToplamPizza() {
  const [toplam, setToplam] = useState(0);

  const artis = () => {
    setToplam(toplam + 1);
  };
  const azalis = () => {
    setToplam(toplam - 1);
  };
  return (
    <div>

      <button onClick={azalis}>-</button>
      {toplam}
      <button onClick={artis}>+</button>
    </div>
  );
}
