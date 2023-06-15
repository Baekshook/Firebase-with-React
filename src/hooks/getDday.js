export const getDday = (end) => {
  if (end === "undefined") return;
  const today = new Date().getTime() / 1000;

  let d = Math.round((end.seconds - today) / 86400);
  // console.log(end.seconds, today, d);
  if (d < 0) {
    d = "+" + -d;
  } else {
    d = "-" + d;
  }
  return d;
};
