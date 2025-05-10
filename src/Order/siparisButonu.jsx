import { useState } from "react";
import './order.css';
export default function SiparisButonu({ secimler, toplam }) {
  const [adet, setAdet] = useState(1);

  const artis = () => {
    setAdet(adet + 1);
  };

  const azalis = () => {
    if (adet > 1) {
      setAdet(adet - 1);
    }
  };

  const clickHandler = () => {
    console.log("sipariş verildi");
  };

  return (
    <>
      <div>
        <h2>Sipariş Toplamı</h2>
        <div>Seçimler: {secimler && secimler.join(", ")}</div>
        <div>Toplam Tutar: {toplam} ₺</div>
        <button onClick={clickHandler}>Sipariş Ver</button>
      </div>
      <div>
        <button onClick={azalis}>-</button>
        <span style={{ margin: "0 10px" }}>{adet}</span>
        <button onClick={artis}>+</button>
      </div>
    </>
  );
}
