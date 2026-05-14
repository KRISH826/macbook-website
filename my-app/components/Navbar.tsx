import { navLinks } from '@/app/constants'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <header>
            <nav>
                <Image width={45} height={45} src="/logo.svg" alt="logo" loading="eager" priority />
                <div className="navlist">
                    <ul>
                        {
                            navLinks.map((link) => (
                                <li key={link.label}>
                                    <a href={link.label}>{link.label}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="tools_icon flex items-center gap-2.5">
                    <Image width={30} height={30} src="/search.svg" alt="search" />
                    <Image width={30} height={30} src="/cart.svg" alt="cart" />
                </div>
            </nav>
        </header>
    )
}

export default Navbar