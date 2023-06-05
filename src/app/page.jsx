// 🧩 components
import ButtonItem from "@/components/ButtonItem";
import ShowSnipet from "@/components/ShowSnipet";

// 📃 mocks
import { buttonlist } from "@/mocks/buttonlist.js";

// 🌿 context
import { SelectProvider } from "@/context/SelectProvider";

const Home = () => {
  const buttonList = buttonlist;

  return (
    <>
      <main className="mt-24 px-auto">
        <SelectProvider>
          <section className="grid place-content-center px-14 md:px-auto lg:px-14 xl:px-28 2xl:px-56 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-24 md:gap-36 lg:gap-28">
            {buttonList.map((button, index) => (
              <ButtonItem button={button} key={index} scale="100" />
            ))}
          </section>

          <ShowSnipet />
        </SelectProvider>
      </main>
    </>
  );
};

export default Home;
