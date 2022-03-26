function setItem(key, value) {
  return localStorage.setItem(key, JSON.stringify(value));
}

function getItem(key) {
  return JSON.parse(localStorage.getItem(key) || "[]");
}

function removeItem(key) {
  return localStorage.removeItem(key);
}

export { getItem, setItem, removeItem };
