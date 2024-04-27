async function moduleProject4() {
  // 👇 WORK WORK BELOW THIS LINE 👇

  const footer = document.querySelector("footer");
  const currentYear = new Date().getFullYear();
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`;

  let descriptions = [
    ["Sunny", "☀️"],
    ["Cloudy", "☁️"],
    ["Rainy", "🌧️"],
    ["Thunderstorm", "⛈️"],
    ["Snowy", "❄️"],
    ["Partly Cloudy", "⛅️"],
  ];

  // 👉 Tasks 1 - 5 go here

  const weatherWidget = document.querySelector("#weatherWidget");
  weatherWidget.setAttribute("style", "display:none");

  const dropDown = document.querySelector("#citySelect");
  dropDown.addEventListener("change", async (event) => {
    try {
      event.target.setAttribute("disabled", "disabled");
      document.querySelector(".info").textContent = "Fetching weather data...";

      const city = event.target.value;
      const url = `http://localhost:3003/api/weather?city=${city}`;
      const res = await axios.get(url);
      let { data } = res;
      console.log(data);
      event.target.removeAttribute("disabled");
      document.querySelector(".info").textContent = "";
      weatherWidget.setAttribute("style", "display:block");

      const apparentTemp = document.querySelector(
        "#apparentTemp div:nth-child(2)"
      );
      apparentTemp.textContent = `${data.current.apparent_temperature}°`;
    } catch {}
  });

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT CHANGE THE CODE  BELOW
// ❗ DO NOT CHANGE THE CODE  BELOW
// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== "undefined" && module.exports)
  module.exports = { moduleProject4 };
else moduleProject4();
