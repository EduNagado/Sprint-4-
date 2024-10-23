"use client"; 

import Image from 'next/image';
import { LuUser } from "react-icons/lu";
import Link from 'next/link';

export default function Header() {
    return (
        <div className="flex items-center justify-between p-4">
            <nav className="flex items-center space-x-4">
                <ul className="flex items-center space-x-4">
                    <li><Link href={"#home"}>Home</Link></li>
                    <li><Link href={"#sobre"}>Sobre</Link></li>
                    <li><Link href={"#AreaDeAtuacao"}>Parcerias</Link></li>
                    <li><Link href={"#ajuda"}>Ajuda</Link></li>
                </ul>
            </nav>
            <Link href={"/"}>
                <Image
                    
                    className='flex items-center justify-center mx-auto'
                    src="/imgHome/Logo.png"
                    alt="Logo"
                    width={100}
                    height={110}
                />
            </Link>
    
                {/* Ícone do usuário */}
                <LuUser className="text-3xl cursor-pointer " />
        </div>
    );
}
