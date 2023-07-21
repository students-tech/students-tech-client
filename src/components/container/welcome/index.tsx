import Image from "next/image";

const Welcome = () => {
    return (
        <div>
            <div className="h-screen w-screen bg-[url('/assets/jumbotron-bg.png')] bg-no-repeat bg-center bg-cover flex items-center justify-center flex-col px-5">
                <div>
                    <Image
                        src="/assets/person.png"
                        width={200}
                        height={500}
                        alt="person"
                    />
                </div>
                <div className="text-[#FFFFFF] text-center">
                    <div className="font-semibold text-2xl my-5">
                        Empowering youth developers to acquire real client & work experience
                    </div>
                    <div>
                        students.tech exist as a bridge between youth developers and clients with tech needs
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome
