import Boyut from './boyut.jsx'
import EkMalzeme from './ekmalzeme.jsx';
import Hamur from './hamur.jsx';
import Rate from './rate.jsx';
//import SiparisNotu from './siparisnotu.jsx';
import SiparisToplami from './siparistoplami.jsx';
import ToplamPizza from './urunsayisi.jsx';




export default function Order () {
    return (
        <>
            <ToplamPizza />
            <SiparisToplami />
            <Rate />
            <Hamur />
            <EkMalzeme />
            <Boyut />
        </>

    );
}