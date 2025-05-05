import { useState } from 'react';

export default function Rate ({price,rateScore,reviewCount}) {// price, rate score, review count

 

    return (
        <>
          <p>Fiyat: {price}</p>
          <p>Puan: {rateScore}</p>
          <p>Yorum Sayısı: {reviewCount}</p>
        </>
      );
      
    
}