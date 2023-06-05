import Image from "next/image";

// ✨ assets
import GabrielImg from "@/assets/images/meme/fornite-balls.jpg";

const Contact = () => {
  return (
    <>
      <main className="grid place-content-center max-w-md mt-20">
        <section className="flex space-x-14">
          <div className="flex flex-col">
            <Image src={GabrielImg} alt="pic 1 Contact temporally" />
            <h1 className="text-1xl text-center text-black dark:text-white">
              Gabo
            </h1>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
