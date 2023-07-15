const makeUrlFriendly = (str: string) => {
  if (typeof str !== "string") {
    return "";
  }

  return encodeURIComponent(str.replace(/\s+/g, "-").toLowerCase());
};

export default makeUrlFriendly;
