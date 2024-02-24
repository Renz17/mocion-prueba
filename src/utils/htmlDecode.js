export const htmlDecode = (data) => {
  const parser = new DOMParser().parseFromString(data, "text/html");
  return parser.documentElement.textContent;
};
