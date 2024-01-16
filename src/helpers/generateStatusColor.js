export const generateStatusColor = () => {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  return randomNumber < 5 ? 'grey' : '#38CD3E';
};
