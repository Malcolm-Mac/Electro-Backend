import React from "react";
import Image from 'next/image'
import Link from 'next/link'
import LoginModal from "../partials/Modal";


const Header = () => {

    return (
        <header>

            <nav className="relative container mx-auto p-6">
                <div className="float-left">
                    <Link href="/">
                        <Image
                            src="/assets/img/logo.png"
                            alt="logo"
                            width={180}
                            height={78}
                            priority
                        />
                    </Link>
                </div>
                <div className="float-right flex gap-5">
                    <LoginModal/>
                    
                    <h4>Sign Up</h4>

                </div>
            </nav>


        </header>
    );
}

export default Header;