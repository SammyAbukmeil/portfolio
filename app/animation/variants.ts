import { Variants } from "motion/react";

export const scroll: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.2,
    },
  },
};
