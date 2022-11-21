var arrayHis = JSON.parse(localStorage.getItem("hisOrder"));
let countAdidas = 0;
let countGucci = 0;
for (var i = 0; i < arrayHis.length; i++) {
  console.log(arrayHis[i].date);
  if (arrayHis[i].details.includes("Adidas")) {
    countAdidas += Number(arrayHis[i].details.slice(-1));
  } else if (arrayHis[i].details.includes("Gucci")) {
    countGucci += Number(arrayHis[i].details.slice(-1));
  }
}
const countAll = countAdidas + countGucci;
console.log(countAdidas);
console.log(countAll);
var xValues = ["Gucci", "Adidas"];
var yValues = [countGucci, countAdidas];
var barColors = ["#b91d47", "#00aba9", "#2b5797", "#e8c3b9", "#1e7145"];

new Chart("myChart", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [
      {
        backgroundColor: barColors,
        data: yValues,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Business Statistics",
    },
  },
});
