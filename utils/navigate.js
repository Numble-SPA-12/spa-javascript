export const navigate = (to, state = null) => {
  const historyChangeEvent = new CustomEvent("ROUTE_CHANGE", {
    detail: { state, to },
  });

  dispatchEvent(historyChangeEvent);
};
