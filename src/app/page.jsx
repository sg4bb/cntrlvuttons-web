// 🧩 components
import ShowSnipet from "@/components/ShowSnipet";
import ButtonList from "@/components/ButtonList";
import SearchInputMobile from "@/components/SearchInputMobile";

// 🌿 context
import { SelectProvider } from "@/context/SelectProvider";

// ✨ styles
import "@/styles/scroll.css";

const Home = () => {
  return (
    <>
      <main className="mt-20 px-auto contentMain">
        <SelectProvider>
          <div className="flex flex-col space-y-8 md:space-y-12 lg:space-y-12 lg:block">
            <SearchInputMobile />

            <ShowSnipet />

            <ButtonList />
          </div>
        </SelectProvider>
      </main>
    </>
  );
};

export default Home;
