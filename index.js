const clickbtn = document.querySelector("button");
clickbtn.addEventListener("click", displayStats);
let resultDiv = document.createElement("div");
resultDiv.id = "result";
document.getElementById("wrapper").appendChild(resultDiv);
function displayStats() {
  console.log("clicked");
  const input = document.getElementById("input");
  const city = input.options[input.selectedIndex].value;
  console.log(city);
  let population = 0;
  let literacyRate = 0;
  let language = "";
  switch (city) {
    case "chennai":
      (population = 4646732), (literacyRate = 90.2), (language = "tamil");

      break;
    case "bengaluru":
      (population = 8443675), (literacyRate = 88.71), (language = "kannada");

      break;
    case "mumbai":
      (population = 124423373), (literacyRate = 89.73), (language = "marathi");

      break;
    case "kolkata":
      (population = 1646732), (literacyRate = 89.71), (language = "hindhi");

      break;

    default:
      break;
  }

  let text = `The indian city of ${city}  has a population of ${population} .language spoken is ${language} and literacy rate is ${literacyRate}`;
  document.getElementById("result").innerHTML = text;
}
