const truncate = (text, length) => {
  const text1 = text.slice(0, length);
  const text2 = (`${text1}...`);
  return text2;
};
