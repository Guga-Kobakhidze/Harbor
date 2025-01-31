import { motion } from "framer-motion";

type AnimatedTextPops = {
  text: string;
  once: boolean;
  el?: keyof JSX.IntrinsicElements;
};

const defaultAnimations = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
  },
};

const AnimatedText = ({ text, once }: AnimatedTextPops) => {
  return (
    <motion.h1
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: "all" }}
      transition={{ staggerChildren: 0.12 }}
    >
      {text.split("").map((char, i) => (
        <motion.span key={i} variants={defaultAnimations}>
          {char}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default AnimatedText;
