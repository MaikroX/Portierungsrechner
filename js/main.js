let startDate = new Date().getTime();
let endDate = document.getElementById("chooseDate");
let callDate = [];
let differenzDays = moment().subtract(123, "days");
let nextDay = [];
let portIsPossible = true;

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
    if (portIsPossible === false) {
        preCallDate();
    }
    document.getElementById("confirmInput").classList.add("d-none");
}

function statusCall(result) {
    let statusCall = document.getElementById("status");
    statusCall.innerHTML = ` `;
    if (result <= 123) {
        statusCall.innerHTML +=
            `<img src="./img/green.png" alt="" style="width: 16px; margin-right:4px">` +
            `Ja`;
        portIsPossible = true;
    } else {
        statusCall.innerHTML +=
            `<img src="./img/red.png" alt="" style="width: 16px; margin-right:4px">` +
            `Nein`;
        portIsPossible = false;
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

// Muss noch ausgegeben werden in APP
function preCallDate() {
    let portLine = document.getElementById("portPossibleClass");
    portLine.classList.remove("d-none");
    let end = endDate.value;
    let newDatePort = moment(end);
    let result = newDatePort.subtract(123, "days");
    let newDateForm = result.format("DD.M.YYYY");
    nextDay.push(newDateForm);
    console.log("IST ES?" + newDateForm);
    document.getElementById("portPossible").innerHTML = "";
    document.getElementById("portPossible").innerHTML += /*html*/ `${nextDay}`;
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

function reset() {
    document.getElementById("dayCount").innerHTML = `-`;
    document.getElementById("status").innerHTML = `-`;
    document.getElementById("chooseDate").value = ``;
    document.getElementById("portPossibleClass").classList.add("d-none");
    nextDay = [];
    portIsPossible = true;
    document.getElementById("confirmInput").classList.remove("d-none");
}

function changeMode() {
    let wholeContainer = document.getElementById("wholeContainer");
    wholeContainer.classList.toggle("whiteMode");
    let modelight = document.getElementById("modelight");
    modelight.classList.toggle("light");
    let modedark = document.getElementById("modedark");
    modedark.classList.toggle("dark");
}

function check() {
    maxDays();
    document.getElementById("check").classList.add("d-none");
    document.getElementById("modeToggler").classList.remove("d-none");
    document.getElementById("portPossibleClass").classList.add("d-none");
    deltaDays();
    today();
    preDating();
    document.getElementById("confirmInput").classList.remove("d-none");
}