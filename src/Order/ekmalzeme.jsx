import { useState, useEffect } from "react";

export default function EkMalzeme({ malzemeler, secilenlerDuzenle }) {
  const [ekMalzemeler, setEkMalzemeler] = useState([]);
  const [secimSayisi, setSecimSayisi] = useState(0);

  useEffect(() => {
    const guncel = [
      { name: "Ek malzeme istemiyorum", price: 0, isSelected: true },
      ...malzemeler.map(m => ({ ...m, isSelected: false }))
    ];
    setEkMalzemeler(guncel);
    setSecimSayisi(1);
  }, [malzemeler]);

  useEffect(() => {
    secilenlerDuzenle(ekMalzemeler.filter(item => item.isSelected));
  }, [ekMalzemeler]);

  const handleSelect = (e) => {
    const index = parseInt(e.target.getAttribute('data-index'));
    const isChecked = e.target.checked;

    if (isChecked) {
      if (index === 0) {
        const yeni = ekMalzemeler.map((item, i) => ({
          ...item,
          isSelected: i === 0
        }));
        setEkMalzemeler(yeni);
        setSecimSayisi(1);
        return;
      }

      const yeni = ekMalzemeler.map((item, i) => {
        if (i === 0) {
          return { ...item, isSelected: false };
        }
        if (i === index) {
          return { ...item, isSelected: true };
        }
        return item;
      });

      const sayac = yeni.filter((item) => item.isSelected).length;
      setEkMalzemeler(yeni);
      setSecimSayisi(sayac);
    } else {
      if (secimSayisi < 2) {
        alert("En az 1 ek malzeme seçmelisiniz.");
        return;
      }

      const yeni = ekMalzemeler.map((item, i) =>
        i === index ? { ...item, isSelected: false } : item
      );

      const sayac = yeni.filter((item) => item.isSelected).length;
      setEkMalzemeler(yeni);
      setSecimSayisi(sayac);
    }
  };

  return (
    <>
      {ekMalzemeler.map((item, index) => (
        <label key={index} style={{ display: "block" }}>
          <input
            type="checkbox"
            data-name={item.name}
            data-price={item.price}
            data-index={index}
            checked={item.isSelected}
            onChange={handleSelect}
          />
          {item.name} - {item.price} TL
        </label>
      ))}
    </>
  );
}
