import selectAndMemorize from "./selectAndMemorize";

export default () => {
  const selectedSystemId = localStorage.getItem("selected-system");
  if (selectedSystemId) {
    selectAndMemorize(+selectedSystemId);
  }
};
