import SideMenu from './side-menu';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { useState } from 'react'

const Navbar = () => {
    const [menu, showMenu] = useState(false);

    return (
        <div>
            <div className="py-5 px-5 w-screen bg-[#F8F9FA] flex justify-between items-center">
                <div>
                    <Image
                        src="/assets/logo.png"
                        width={48}
                        height={32}
                        alt="logo"
                    />
                </div>
                <Button
                    className="bg-transparent hover:bg-transparent"
                    onClick={() => showMenu(true)}>
                    <Image
                        src="/assets/hamburger.png"
                        width={32}
                        height={32}
                        alt="menu"
                    />
                </Button>
            </div>
            {menu && <SideMenu close={() => { showMenu(false) }} />}
        </div>
    )
}

export default Navbar;