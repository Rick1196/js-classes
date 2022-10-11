import Observable from "./observable.mjs";
const users = [];
const obsevable = new Observable();
const form = document.getElementById("form");
function getData(form) {
  const formData = new FormData(form);

  console.log(Object.fromEntries(formData));
  return Object.fromEntries(formData);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);
  const user = getData(e.target);
  users.push(user);
  obsevable.notify(users);
});

const usersList = (data) => {
  const list = document.getElementById("list");
  const li = document.createElement("li");
  li.setAttribute("id", data.length);
  const newUser = data[data.length - 1];
  li.innerText = `${newUser.name}, ${newUser["address"]}`;
  list.appendChild(li);
};

obsevable.subscribe(usersList);
