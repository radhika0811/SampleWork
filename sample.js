const time = document.getElementById("time");
const greeting = document.getElementById("greeting");
const name = document.getElementById("name");
const date = document.getElementById("date");

//Event Listener
name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);

//Functions
function showtime() {
    let today = new Date();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let sec = today.getSeconds();
    let todaydate = today.toDateString();

    // ampm
    const amPM = hour > 12 ? 'PM' : 'AM';

    //12hrs Format
    hour = hour % 12 || 12;

    //output
    time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(minute)}<span>:</span>${addZero(sec)} ${amPM}`;
    date.innerHTML = `${todaydate}`;
    setTimeout(showtime, 1000);
}

function addZero(n) {
    return ((parseInt(n, 10) < 10 ? '0' : '') + n);
}

function setGreeting() {

    let today = new Date(2020, 12, 12, 10, 12, 12);
    let hour = today.getHours();
    console.log(hour);

    if (hour < 12) {
        document.body.style.backgroundImage = 'url("morning.jpg")';
        greeting.innerHTML = 'Good Morning';
    } else if (hour < 18) {
        document.body.style.backgroundImage = 'url("afternoon.jpg")';
        greeting.innerHTML = 'Good Afternoon';
        document.body.style.color = 'white';
    } else {
        document.body.style.backgroundImage = 'url("night.jpg")';
        greeting.innerHTML = 'Good Evening';
        document.body.style.color = 'white';
    }
}

function getName() {
    if (localStorage.getItem('myData') === null) {
        name.innerHTML = "Enter Name";
    } else {
        name.innerHTML = localStorage.getItem("myData");
    }
}

function setName(e) {
    if (e.type === "keypress") {
        if (e.keyCode == 13) {
            localStorage.setItem('myData', e.target.innerHTML);
            name.blur();
        }
    } else {
        localStorage.setItem('myData', e.target.innerHTML);
    }
}

//Function Call
showtime();
setGreeting();
getName();