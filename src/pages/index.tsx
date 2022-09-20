import Second from "@components/Second";
import Header from "@components/Header";
import TextContainer from "@components/TextContainer";
import { motion } from "framer-motion";
import { krishna, krishnaWrapper, leavesContainer } from "variants";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        {/* texts wrapper */}
        <TextContainer />

        {/* krishna image */}
        <motion.div
          variants={krishnaWrapper}
          initial="initial"
          animate="animate"
          className="krishnaWrapper"
        >
          <motion.img
            src="/images/pic.jpg"
            variants={krishna}
            className="krishna"
          />
        </motion.div>
      </main>
      <Second />
    </div>
  );
}
