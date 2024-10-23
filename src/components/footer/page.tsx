import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-white text-black py-10 w-full mt-auto">
      <div className="container mx-auto grid grid-cols-3 items-center">
        {/* Esquerda: Endereço e Newsletter */}
        <div className="space-y-6">
          <div>
            <p className="font-semibold">Newsletter</p>
            <div className="flex items-center space-x-2">
              <input
                type="email"
                placeholder="E-mail"
                className="bg-white border-b-2 border-black text-black focus:outline-none"
              />
              <button className="text-black">→</button>
            </div>
          </div>
          <div>
            <p>R. Bela Cintra, 1951.</p>
            <p>Consolação - SP.</p>
          </div>
        </div>

        {/* Centro: Logo */}
        <div className="flex justify-center">
          <Image 
            src='/imgHome/LogoWhite.png'
            alt='LogoRodape'
            width={100}
            height={110}
            className='text-4xl font-bold'
          />
        </div>

        {/* Direita: Contato */}
        <div className="flex justify-end">
          <p>contact@MEF.com</p>
        </div>
      </div>
    </footer>
  );
}
