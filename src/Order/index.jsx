import Boyut from './boyut.jsx';
import EkMalzeme from './ekmalzeme.jsx';
import Hamur from './hamur.jsx';
import Rate from './rate.jsx';

import SiparisToplami from './siparistoplami.jsx';
import ToplamPizza from './urunsayisi.jsx';

export default function Order () {
    return (
        <>
            {/* Ana başlık */}
            <header style={{
                backgroundColor: '#d32f2f',
                color: 'white',
                padding: '20px',
                textAlign: 'center',
                fontSize: '24px',
                fontWeight: 'bold'
            }}>
                Teknolojik Yemekler
            </header>

            {/* Sayfa başlıkları (kırmızı arka planlı) */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '40px',
                padding: '20px',
                backgroundColor: '#d32f2f',
                color: 'white'
            }}>
                <h2>Anasayfa</h2>
                <h2>Seçenekler</h2>
                <h2>Sipariş Oluştur</h2>
            </div>

            {/* Sipariş bileşenleri */}
            <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginTop: '20px' }}>Position Absolute Acı Pizza</h2>
            <p style={{ display: 'flex', alignItems: 'center', gap: '150px', fontSize: '15px' }}>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza,domates,peynir ve genellikle çeşitli diğer malzemelerle 
                kaplanmış,daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen,genellikle yuvarlak,düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir.. 
                Küçük bir pizzaya bazen pizzetta denir.</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '150px', fontSize: '15px' }}>
            <Rate price={85} rateScore={4.5} reviewCount={200} />
            </div>

            

            
            <ToplamPizza />
            <SiparisToplami />
            <Hamur hamurSizes={["ince", "orta", "kalın"]} />
            <EkMalzeme />
            <Boyut />
        </>
    );
}
