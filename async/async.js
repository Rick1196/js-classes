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
    return true;
  } catch (error) {
    console.log("error", error);
    return error;
  }
};
// fetchCountriesAsync()
//   .then((data) => {
//     console.log(data);
//     response = data;
//   })
//   .catch((error) => {
//     console.error(error);
//   });
const countriesPromises = [];
const countryCodes = ["MX", "AR", "AM", "AW"];
for (const code of countryCodes) {
  countriesPromises.push(getCountries(code));
}
const asyncFunction = async () => {
  const results = await Promise.all(countriesPromises);
  console.log("with async", results);
};
asyncFunction();
Promise.all(countriesPromises).then((data) => {
  console.log("with then", data);
});
