import { useState } from "react";

export default function BoyutSecimi({ sizes }) {
  const [secilen, setSecilen] = useState(false);

  const clickButton = () => {
    setSecilen(!secilen);
  };

  return (
    <>
      {sizes &&
        sizes.map((size) => <input type="radio" onClick={clickButton} />)}
    </>
  );
}
