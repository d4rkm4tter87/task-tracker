import ItemsContextProvider from "../contexts/ItemsContextProvider";
import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";
function App() {
  const str = `1-1 point, 2-1 point, Attack, Bamboo Joint, Belly Attachment Tesuji, Bent Four in the Corner, Breaking Bamboo Clamp, Bulky Five, Carpenters Square, Clamp, Comb-Formation, Connect, Cranes Nest, Crosscut Tesuji, Damezumari, Descent, Door Group, Double Atari, Double Ko, Driving Tesuji, Enclosure, False Eye, Fuseki, Geta, Golden Chicken Standing on One Leg, Haengma, Hane, Hekomi, J+1 Group, J-Group, Joseki, Ko, L+1 Group, L+2 Group, L-Group, Ladder, Long L Group, Loose ladder, Miai, Monkey Jump, Moyo, Nakade, Nose Tesuji, Oiotoshi, Oshi-tsubushi, Patting the Raccoons Belly, Placement, Rabbitty Six, Sabaki, Sacrifice, Seki, Semeai, Semeai Type 1, Semeai Type 2, Semeai Type 3, Semeai Type 4, Semeai Type 5, Semeai Type 6, SendingTwoReturningOne, Sente, Separate, Snapback, Spiral Ladder, Squeeze , Superko, Symmetry, Ten Thousand Year Ko, Throw-in, Tombstone, Tripod Group, Tsumego, Two-Headed Dragon, Under the Stones, Weak Carpenters Square, Yose`;
  const arr = str.split(", ");
  const arr2 = [];
  arr.map((item, i) => {
    const rdm = Math.random() > 0.5;
    arr2.push(
      "{id: " + (i + 4) + ',name: "' + item + '", packed: ' + rdm + ",},"
    );
  });
  return (
    <>
      <BackgroundHeading />
      <main>
        <ItemsContextProvider>
          <Header />
          <ItemList />
          <Sidebar />
        </ItemsContextProvider>
      </main>
      <Footer />
    </>
  );
}

export default App;
