/* eslint-disable id-length */
export const getStyles = ({ x,y,w,h,bx,by, }, image) => {
  return {
    left:`${x}px`,
    top:`${y}px`,
    ...getBgStyles(bx,by, image),
    ...getSizeStyles(w,h),
  };
};
export const getBgImageStyles = (solved = true, image) => {
  return solved ? {
    backgroundImage: `url(${image})`,
  } : {};
};
export const getBgStyles = (x,y, image) => {
  return {
    backgroundPosition: `-${x}px -${y}px`,
    ...getBgImageStyles(undefined, image),
  };
};
export const getSizeStyles = (w,h) => {
  return {
    width:`${w}px`,
    height:`${h}px`,
  };
};
