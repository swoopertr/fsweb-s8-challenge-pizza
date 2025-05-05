function SiparisButonu() {
  const clickHandler = () => {
    console.log("siparis verildi");
  };
  return <button onClick={clickHandler}>Siparis Ver</button>;
}

export default SiparisButonu;
