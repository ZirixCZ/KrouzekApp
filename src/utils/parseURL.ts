const parseURL = (url: string, option: string) => {
  const splitUrl = url.split("/");
  const position = splitUrl.indexOf(option);

  if (position === -1) {
    return "";
  }

  return splitUrl[position + 1];
};

export default parseURL;
