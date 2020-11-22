const clearContent = (element) => {
  while (element.hasChildNodes()) {
    element.children[0].remove();
  }
};

export { clearContent };
