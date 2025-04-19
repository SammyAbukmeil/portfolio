import { Variants } from "motion/react";

export const onLoad: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 1,
    },
  },
};

export const scroll: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.5,
    },
  },
};
