///mailler
/*alperarigumusss@gmail.com*/ 
/*mehmet_canip@hotmail.com */
/*mserkanergul@gmail.com */
// yilmazyunuscancemil00@gmail.com
import BoyutSecimi from './BoyutSecimi.jsx';
import EkMalzeme from './ekmalzeme.jsx';
import Hamur from './hamur.jsx';
import SiparisButonu from './siparisButonu.jsx';

import './order.css'
import Rate from './rate.jsx';
import { useState, useEffect } from 'react';
export default function Order () {

  const [malzemeler, setMalzemeler] = useState([{name: 'Ek malzeme istemiyorum', price: 0, isSelected: true}]);
  const [istenenMalzemeler, setIstenenMalzemeler] = useState([]);
  
  useEffect(() => {
    const malzemeListesi = [
      {name: 'sucuk', price: 15, isSelected: false},
      {name: 'salam', price: 15, isSelected: false},
      {name: 'mantar', price: 25, isSelected: false},
      {name: 'zeytin', price: 5, isSelected: false},
      {name: 'sogan', price: 5, isSelected: false},
      {name: 'biber', price: 10, isSelected: false},
      {name: 'domates', price: 15, isSelected: false},
      {name: 'mısır', price: 5, isSelected: false},
    ];
    setMalzemeler(malzemeListesi);
  }, []);

  useEffect(() => {
    console.log('Seçilen malzemeler:', istenenMalzemeler);
  }, [istenenMalzemeler])

  return (
    <>
      {/* Ana başlık */}
      <header className='header-class'>
        Teknolojik Yemekler
      </header>

      {/* Tüm üst kısım ten rengi zemin */}
      <div className='order-container' style={{ backgroundColor: '#fff7ef' }}>
        {/* Görsel */}
        <div className='order-image-container'>
          <img className='image-class'
            src="/form-banner.png" 
            alt="Pizza Banner" 
            style={{ width: '581px', marginTop :'-76px'  }} 
          />
        </div>

        {/* Sayfa başlıkları */}
        <div className='bread-crumb'>
          <h2>Anasayfa - </h2>
          <h2>Seçenekler - </h2>
          <h2 style={{ color: 'red' }}>Sipariş Oluştur</h2>
        </div>

        {/* Pizza başlığı */}
        <h2>
          Position Absolute Acı Pizza
        </h2>
        {/* rate ve review */}
        <div className='rate'>
            <Rate price={85.50} rateScore={4.3} reviewCount={200} />
        </div>
         {/* Açıklama */}
        <p className='order-derscription'>
          Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. 
          Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak 
          odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday 
          bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.
        </p>
      </div>

      {/* Sipariş bileşenleri - beyaz arka plan */}
      
      
      <Hamur hamurSizes={["small", "medium", "large", "super"]} />
      <BoyutSecimi sizes={["küçük","orta","büyük"]} />
      <EkMalzeme malzemeler={malzemeler} secilenlerDuzenle={setIstenenMalzemeler}/>
      
      <SiparisButonu />
    </>
  );
}
