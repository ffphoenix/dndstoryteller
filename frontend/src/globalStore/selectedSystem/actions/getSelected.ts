import selectAndMemorize from "./selectSystem";

export default () => {
  const selectedSystemId = localStorage.getItem("selected-system");
  if (selectedSystemId) {
    selectAndMemorize(+selectedSystemId);
  }
};
