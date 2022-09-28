let startDate = new Date().getTime();
let endDate = document.getElementById("chooseDate");

function deltaDays() {
  let end = endDate.value;
  let chooseDate = Date.parse(end);
  let differenz = chooseDate - startDate;
  let result = Math.ceil(differenz / 1000 / 60 / 60 / 24);
  let count = document.getElementById("dayCount");
  if (result) {
    count.innerHTML = "";
    count.innerHTML += /*html*/ `${result}`;
    statusCall(result);
  }
}

function statusCall(result) {
  let statusCall = document.getElementById("status");
  statusCall.innerHTML = ` `;
  if (result <= 123) {
    statusCall.innerHTML +=
      `<img src="./img/green.png" alt="" style="width: 16px; margin-right:4px">` +
      `Ja`;
  } else {
    statusCall.innerHTML +=
      `<img src="./img/red.png" alt="" style="width: 16px; margin-right:4px">` +
      `Nein`;
  }
  if (result <= 0) {
    statusCall.innerHTML = ` `;
    statusCall.innerHTML += `Datum muss in Zukunft liegen`;
  }
}

function maxDays() {
  let maxDays = startDate + 10627200000;
  let dMaxDays = new Date(maxDays);
  document.getElementById("maxDays").innerHTML = ``;
  document.getElementById("maxDays").innerHTML += `${
    dMaxDays.getDate() +
    "." +
    (dMaxDays.getMonth() + 1) +
    "." +
    dMaxDays.getFullYear()
  }
  `;
}

function preDating() {
  let vorDate = startDate + 6048000000;
  let dVorDate = new Date(vorDate);
  document.getElementById("vorDatierung").innerHTML = ``;
  document.getElementById("vorDatierung").innerHTML += `${
    dVorDate.getDate() +
    "." +
    (dVorDate.getMonth() + 1) +
    "." +
    dVorDate.getFullYear()
  }
`;
}

function today() {
  let today = new Date();
  document.getElementById("today").innerHTML = ``;
  document.getElementById("today").innerHTML +=
    today.getDate() + "." + (today.getMonth() + 1) + "." + today.getFullYear();
}

function check() {
  document.getElementById("check").classList.add("d-none");
  document.getElementById("modeToggler").classList.remove("d-none");
  deltaDays();
  today();
  preDating();
  maxDays();
}

function reset() {
  document.getElementById("dayCount").innerHTML = `-`;
  document.getElementById("status").innerHTML = `-`;
  document.getElementById("chooseDate").value = ``;
}

function changeMode() {
  let wholeContainer = document.getElementById("wholeContainer");
  wholeContainer.classList.toggle("whiteMode");
  let modelight = document.getElementById("modelight");
  modelight.classList.toggle("light");
  let modedark = document.getElementById("modedark");
  modedark.classList.toggle("dark");
}
