import Image from "next/image";

const Welcome = () => {
  return (
    <div className="h-screen w-screen bg-[url('/assets/jumbotron-bg.png')] bg-no-repeat bg-center bg-cover flex items-center justify-center flex-col p-8 md:flex-row">
      <div className="text-[#FFFFFF] text-center w-full h-full flex flex-col justify-center items-center p-4 md:p-8">
        <div className="font-semibold text-3xl my-4 md:text-5xl">
          Empowering youth developers to acquire real client & work experience
        </div>
        <div className="text-lg md:text-2xl">
          students.tech exist as a bridge between youth developers and clients
          with tech needs
        </div>
      </div>

      <div className="w-full h-full flex justify-center items-center">
        <Image src="/assets/person.png" width={200} height={500} alt="person" className="w-52 md:w-96"/>
      </div>
    </div>
  );
};

export default Welcome;
