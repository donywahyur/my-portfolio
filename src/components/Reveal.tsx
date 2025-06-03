import { motion, useAnimation, useInView } from "motion/react";
import { useEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
  index?: number;
}

export const Reveal = ({ children, index }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.span
      variants={{
        hidden: {
          opacity: 0,
          transform: "translateY(8px) translateZ(0px)",
        },
        visible: {
          opacity: 1,
          transform: "translateY(0px) translateZ(0px)",
        },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0.15 * (index || 1) }}
      ref={ref}>
      {children}
    </motion.span>
  );
};
