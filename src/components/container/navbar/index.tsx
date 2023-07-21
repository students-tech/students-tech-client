import SideMenu from './side-menu';
import { Button } from "@/components/ui/button";
import { useState } from 'react'

const Navbar = () => {
    const [menu, showMenu] = useState(false);

    return (
        <div>
            <div className="py-5 px-5 w-screen bg-[#F8F9FA] flex justify-between items-center">
                <div>
                    Logo
                </div>
                <Button onClick={() => showMenu(true)}>Hamburger</Button>
            </div>
            {menu && <SideMenu close={() => { showMenu(false) }} />}
        </div>
    )
}

export default Navbar;