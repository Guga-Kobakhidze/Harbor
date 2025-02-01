import { motion } from "framer-motion";

type AnimatedTextProps = {
  text: string;
  once: boolean;
  el?: keyof JSX.IntrinsicElements;
  duration?: number;
};

const defaultAnimations = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const AnimatedText = ({ text, once, duration = 0.12 }: AnimatedTextProps) => {
  return (
    <motion.div key={text}>
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount: "all" }}
        transition={{ staggerChildren: duration }}
      >
        {text.split("").map((char, i) => (
          <motion.span key={`${text}-${i}`} variants={defaultAnimations}>
            {char}
          </motion.span>
        ))}
      </motion.h1>
    </motion.div>
  );
};

export default AnimatedText;
