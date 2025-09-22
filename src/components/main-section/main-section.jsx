import React from 'react';
import MenImage from '../../images/image-hero-desktop.png';
import Databiz from '../../images/client-databiz.svg?react';
import Audiophile from '../../images/client-audiophile.svg?react';
import Meet from '../../images/client-meet.svg?react';
import Maker from '../../images/client-maker.svg?react';
import { Button } from '../button';

export const MainSection = () => {
  return (
    <section className="w-full flex mt-6 h-screen justify-between">
      <div className="relative w-2/4 text-left mt-12">
        <h1 className="text-8xl font-black mt-60 whitespace-pre-line">{'Make \n remote work'}</h1>
        <p className="text-medium-gray text-lg my-12 whitespace-pre-line ">
          {
            'Lorem ispum dolar, sit amet consectetur adipisicing \n Amet ullam dolarum animi atuqe bite extararional \n Madium lite cult leopraed q'
          }
        </p>
        <Button isFilled={true}>Learn more</Button>
        <div className="flex justify-around absolute bottom-2 w-full">
          <Databiz />
          <Audiophile />
          <Meet />
          <Maker />
        </div>
          </div>
          <div className="flex w-2/4 mt-20">
              <img src={MenImage} alt="men" />
          </div>
    </section>
  );
};
