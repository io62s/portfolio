export const flex = (direction, justify) => {
  return `
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-direction: ${direction};
  -ms-flex-direction: ${direction};
  flex-direction: ${direction};
  -webkit-box-pack: ${justify};
  -ms-flex-pack: ${justify};
  justify-content: ${justify};
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  `;
};

export const transition = (seconds, delay = 0) => {
  return `
  -webkit-transition: all ${seconds}s ease-in-out ${delay}s;
  -o-transition: all ${seconds}s ease-in-out ${delay}s;
  transition: all ${seconds}s ease-in-out ${delay}s;
  `;
};
