export const getQueryStringValue = (name = "") => {
  const queryString = new URLSearchParams(window.location.search);

  if (queryString.has(name)) {
    console.log(queryString.get(name));
    return queryString.get(name);
  }
  return null;
};
