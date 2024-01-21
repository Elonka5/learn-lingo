export const calculateMargin = displayName => {
  const nameLength = displayName.length;

  if (nameLength === 3) {
    return 44;
  } else if (nameLength === 4) {
    return 40;
  } else if (nameLength === 5) {
    return 36;
  } else if (nameLength === 6) {
    return 34;
  } else if (nameLength === 7) {
    return 32;
  } else if (nameLength === 8) {
    return 30;
  } else if (nameLength === 9) {
    return 28;
  } else if (nameLength === 10) {
    return 24;
  } else {
    return 20;
  }
};
