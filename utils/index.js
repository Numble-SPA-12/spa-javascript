export const printKorDate = (date) => {
  return new Date(date).toLocaleDateString("ko", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export const isImageValidity = (imgURL) => {
  if (
    typeof imgURL === "undefined" ||
    imgURL === null ||
    imgURL === "" ||
    imgURL === "undefined" ||
    imgURL === "https://source.unsplash.com/random/360×360"
  )
    return false;
  return true;
};
