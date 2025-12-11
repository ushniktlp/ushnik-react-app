// script.js

/* ---------------------------------------
   FORMATTER (fully dynamic)
----------------------------------------*/
export const formatValue = (value, format) => {
  if (format === "LPA") return Math.floor(value) + "+ LPA";
  if (format === "+") return Math.floor(value) + "+";

  if (format === "K+") {
    if (value < 1000) return Math.floor(value);
    let v = value / 1000;
    let r = v.toFixed(1);
    if (r.endsWith(".0")) r = parseInt(r);
    return r + "K+";
  }

  return Math.floor(value);
};

/* ---------------------------------------
   EASING
----------------------------------------*/
export const easeInOutQuad = (t) =>
  t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

/* ---------------------------------------
   ANIMATION FUNCTION USED BY COUNTER
----------------------------------------*/
export const animateCounter = (el, start, target, format, duration, pause) => {
  const run = () => {
    let startTime = null;
    el.textContent = formatValue(start, format);

    const animate = (ts) => {
      if (!startTime) startTime = ts;

      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = easeInOutQuad(progress);

      const current = start + eased * (target - start);
      el.textContent = formatValue(current, format);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        el.textContent = formatValue(target, format);
        setTimeout(run, pause);
      }
    };

    requestAnimationFrame(animate);
  };

  run();
};
