export const debounce = (func, wait) => {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);
    const context = this;
    timer = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
};
