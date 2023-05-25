export const FormatDate = (date) => {
  var d = new Date(0);

  d.setUTCSeconds(date);

  return (
    (d.getDate() < 10 ? "0" + d.getDate() : d.getDate()) +
    "/" +
    (d.getMonth() < 10 ? "0" + d.getMonth() : d.getMonth()) +
    "/" +
    d.getFullYear()
  );
};

export default FormatDate;
