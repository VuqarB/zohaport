export const fadeInAnimationVariants = (
  direction,
  start,
  end,
  delay,
  duration
) => ({
  initial: {
    opacity: 0,
    [direction]: start,
  },
  animate: {
    opacity: 1,
    [direction]: end,
    transition: {
      delay,
      duration: duration || 0.5,
    },
  },
});
