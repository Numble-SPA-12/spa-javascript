export const navigate = (to, state = null, isReplace = false) => {
  const historyChangeEvent = new CustomEvent("ROUTE_CHANGE", {
    detail: { state, to, isReplace },
  });

  dispatchEvent(historyChangeEvent);
};
