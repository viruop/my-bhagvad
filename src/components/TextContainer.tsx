import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "variants";

const TextContainer = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="textContainer"
    >
      {/* upper */}
      <div className="textContainer-top">
        <motion.span variants={fadeIn()} className="text-[#266867] ">
          Everything is a fruitful lesson
        </motion.span>
        <motion.span variants={fadeIn()} className="first-letter:text-6xl">
          {/* ॐ */}ૐ
        </motion.span>
      </div>
      {/* //text */}
      <div className="textContainer-middle">
        <motion.span variants={fadeIn()} initial="initial" animate="animate">
          SUPREME
        </motion.span>
      </div>
      {/* lower */}
      <div className="textContainer-bottom ">
        <motion.button variants={fadeIn()}>Befriend your mind</motion.button>
        <motion.p variants={fadeIn()}>
          Be the change <span> you </span> <br />
          wish to see!
        </motion.p>
      </div>
    </motion.div>
  );
};

export default TextContainer;
