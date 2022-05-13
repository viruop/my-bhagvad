import Second from "@components/2";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Leaf from "@components/Leaf";
import TextContainer from "@components/TextContainer";
import { motion } from "framer-motion";
import { krishna, krishnaWrapper, leavesContainer } from "variants";

export default function Home() {
  return (
    <div >
      <Header />
      <main>
        {/* texts wrapper */}
        <TextContainer />

        {/* juice krishna image */}
        <motion.div variants={krishnaWrapper} initial="initial" animate="animate" className="krishnaWrapper">
          <motion.img src="/images/pic.jpg" variants={krishna} className="krishna" />
        </motion.div>

        {/* leaves images */}
        <motion.div variants={leavesContainer} initial="initial" animate="animate">
          <Leaf animationSpeed={1.8} className="leafWrapper-1" imageUrl="./images/leaf01.png" />
          <Leaf animationSpeed={1.6} className="leafWrapper-2" imageUrl="./images/leaf02.png" />
          <Leaf animationSpeed={1.5} className="leafWrapper-3" imageUrl="./images/leaf03.png" />
          <Leaf animationSpeed={1.7} className="leafWrapper-4" imageUrl="./images/leaf04.png" />
          <Leaf animationSpeed={1.8} className="leafWrapper-5" imageUrl="./images/leaf05.png" />
        </motion.div>
      </main>
      <Second />
      <Footer />
    </div>
  );
}
