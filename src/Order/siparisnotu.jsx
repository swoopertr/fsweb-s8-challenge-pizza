function SiparisNotu () {
    const [not , setNot] = useState("");


    return (
        <div>
        <h1>Sipariş Notu</h1>
        <textarea 
         placeholder="Siparişine eklemek istediğin bir not var mı?"
         value={not}
         onChange={(e) => setNot(e.target.value)} />
       
        </div>
    )
}