import ReactPixel from "react-facebook-pixel";

const options = {
  autoConfig: true,
  debug: false,
};

export const initFacebookPixel = (pixelId: never) => {
  ReactPixel.init(pixelId, {} as never, options);
  ReactPixel.pageView();
};

export default ReactPixel;
