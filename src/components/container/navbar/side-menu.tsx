import { Button } from "@/components/ui/button";
import { useUser, SignOutButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface SideMenuInterface {
    close: () => {}
}

const SideMenu: React.FC<SideMenuInterface> = ({ close }) => {
    const { isSignedIn, user } = useUser();
    const router = useRouter();

    return (
        <div className="w-screen h-screen bg-[#F8F9FA] fixed top-0 px-5 py-5">
            <div className="flex justify-between">
                <div>
                    <div className="mb-5">
                        Services
                    </div>
                    <div className="mb-5">
                        About
                    </div>
                    <div className="mb-5">
                        Career
                    </div>
                    {!isSignedIn ?
                        (<Button
                            className="bg-[#0114D6] hover:text-[#0114D6] hover:bg-[#F8F9FA]"
                            onClick={() => router.push("/sign-in")}>
                            Log In
                        </Button>
                        ) : (
                            <SignOutButton>
                                <Button
                                    className="bg-[#FB0606] hover:text-[#FB0606] hover:bg-[#F8F9FA]"
                                    onClick={() => router.push("/sign-in")}>
                                    Log Out
                                </Button>
                            </SignOutButton>
                        )
                    }
                </div>
                <Button
                    className="bg-transparent hover:bg-transparent"
                    onClick={close}>
                    <Image
                        src="/assets/cross.png"
                        height={18}
                        width={18}
                        alt="close"
                    />
                </Button>
            </div>
        </div>
    )
}

export default SideMenu;