const { getCountries } = require("./mockBack");
const fetchCountries = () => {
  getCountries("MX")
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

const fetchCountriesAsync = async () => {
  try {
    const country = await getCountries(["MX", "WW"]);
    console.log(country);
  } catch (error) {
    console.log("error", error);
  }
};

fetchCountriesAsync();
console.log(1);
console.log(2);
console.log(3);
