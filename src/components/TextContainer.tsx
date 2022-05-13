import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "variants";

const TextContainer = () => {
  return (
    <motion.div variants={staggerContainer} initial="initial" animate="animate" className="textContainer">
      {/* upper */}
      <div className="textContainer-top">
        <motion.span variants={fadeIn()} className="text-[#00539cff] ">
          Find your clean you
        </motion.span>
        <motion.span variants={fadeIn()} className="first-letter:text-6xl">
        {/* ॐ */}ૐ
        </motion.span>
      </div>
      {/* //text */}
      <div className="textContainer-middle">
        <motion.span variants={fadeIn()} initial="initial" animate="animate">
          KRISHNA
        </motion.span>
      </div>
      {/* lower */}
      <div className="textContainer-bottom ">
        <motion.button variants={fadeIn()}>show all the love</motion.button>
        <motion.p variants={fadeIn()}>
          Your healthy <span> life </span> <br /> starts here with us!
        </motion.p>
      </div>
    </motion.div>
  );
};

export default TextContainer;
