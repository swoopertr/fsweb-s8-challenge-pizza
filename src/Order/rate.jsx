import { useState } from 'react';

export default function Rate ({price,rateScore,reviewCount}) {// price, rate score, review count

    return (
        <>
          <span>{price}$</span>
          <p style={{fontSize : '25px'}} >{rateScore}</p>
          <p >({reviewCount})</p>
        </>
      );
}