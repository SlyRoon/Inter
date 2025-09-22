import React from 'react';
import MenImage from '../../images/image-hero-desktop.png';
import MenImageMobile from '../../images/image-hero-mobile.png';
import Databiz from '../../images/client-databiz.svg?react';
import Audiophile from '../../images/client-audiophile.svg?react';
import Meet from '../../images/client-meet.svg?react';
import Maker from '../../images/client-maker.svg?react';
import { Button } from '../button';

export const MainSection = () => {
  return (
    <section className="w-full flex-col xl:flex-row flex mt-6 xl:h-screen justify-between">
      <div className="relative order-2 xl:order-1 text-center xl:text-left mt-12 xl:mt-32">
        <h1 className="text-3xl xl:text-8xl font-black xl:whitespace-pre-line mt-6">{'Make \n remote work'}</h1>
        <p className="text-medium-gray text-lg my-12 whitespace-pre-line ">
          {
            'Lorem ispum dolar, sit amet consectetur adipisicing \n Amet ullam dolarum animi atuqe bite extararional \n Madium lite cult leopraed q'
          }
        </p>
        <Button isFilled={true}>Learn more</Button>
        <div className="flex justify-around xl:absolute bottom-2 w-full mt-20 ">
          <Databiz />
          <Audiophile />
          <Meet />
          <Maker />
        </div>
      </div>
      <div className="hidden xl:flex w-2/4 mt-20 xl:order-2">
        <img src={MenImage} alt="men" />
      </div>
      <div className="flex xl:hidden w-full mt-20 justify-center mb-8 order-1">
        <img src={MenImageMobile} alt="men" />
      </div>
    </section>
  );
};
