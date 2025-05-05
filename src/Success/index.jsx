import { Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Success ({ product }) {

    const [pr, setPr] = useState({});
    const [redirect, setRedirect] = useState(false);

    // let product1 = {
    //     name: product.name,
    //     price: product.price,
    //     description: product.description,
    //     is_success: product.is_success
    // };

    useEffect(() => {
        let productProps = {
            name: 'deneme ürün',
            price: '123',
            description: 'lorem lorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem loremlorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem',
            is_success: true
        };
        // let productProps = null;
        if(!productProps){
            setRedirect(true);
        }
        setPr(productProps);


        // if(!product){
        //     setRedirect(true);
        // }
        // setPr(product);
    }, []);

    if (redirect) {
        return <Redirect to="/home" />;
      }

    return (
        <>
            <div className='success-component-container'>
                {pr.is_success == true ? (
                    <>
                        <h1>Siparişiniz için teşekkürler!</h1>
                        <h2>{pr.name}</h2>
                        <h3>{pr.price} ₺</h3>
                        <p> {pr.description}</p> 
                    </>
                ) : (
                    <>
                        <h1>Siparşiniz başarısız</h1>
                    </>
                )}
            </div>
        </>
    );



    // if (product1.is_success == true) {
    //     return (
    //         <>
    //             <h1>Siparişiniz için teşekkürler!</h1>
    //         </>
    //     );
    // } else if (product1.is_success == false) {
    //     return (
    //         <>
    //             <h1>Siparşiniz başarısız</h1>
    //         </>
    //     )
    // } else {
    //     navigate("/home");
    // }

}
export default Success;