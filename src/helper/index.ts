export const pxToRem = (number: number, baseNumber = 16) =>
  `${number / baseNumber}rem`;

export const generateGoogleLink = (address: string) =>
  `https://www.google.com/maps?q=${encodeURIComponent(address)}`;