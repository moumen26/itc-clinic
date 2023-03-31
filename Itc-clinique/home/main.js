var itemWork = document.querySelector(".item1");
var itemMission = document.querySelector(".item2");
var itemAchievement = document.querySelector(".item3");

var listWork = document.querySelector(".list1");
var listMission = document.querySelector(".list2");
var listAchievement = document.querySelector(".list3");

var par = document.querySelector(".allAbout-right-section");

itemWork.addEventListener("click", () => {
  console.log("work");
  par.classList.add("work-active");
  par.classList.remove("mission-active");
  par.classList.remove("achievement-active");
  listWork.classList.add("list-style");
  listMission.classList.remove("list-style");
  listAchievement.classList.remove("list-style");
});

itemMission.addEventListener("click", () => {
  console.log("mission");
  par.classList.remove("work-active");
  par.classList.add("mission-active");
  par.classList.remove("achievement-active");
  listWork.classList.remove("list-style");
  listMission.classList.add("list-style");
  listAchievement.classList.remove("list-style");
});

itemAchievement.addEventListener("click", () => {
  console.log("Achievement");
  par.classList.remove("work-active");
  par.classList.remove("mission-active");
  par.classList.add("achievement-active");
  listWork.classList.remove("list-style");
  listMission.classList.remove("list-style");
  listAchievement.classList.add("list-style");
});

var swipeBtn1 = document.getElementById("btn1");
var swipeBtn2 = document.getElementById("btn2");
var navigationManual = document.querySelector(".navigation-manual");
swipeBtn1.addEventListener("click", () => {
  navigationManual.classList.add("swipe-btn-active");
  navigationManual.classList.remove("swipe-btn-active2");
});

swipeBtn2.addEventListener("click", () => {
  navigationManual.classList.add("swipe-btn-active2");
  navigationManual.classList.remove("swipe-btn-active");
});

var swipeBtnBlogs1 = document.getElementById("btn1-blogs");
var swipeBtnBlogs2 = document.getElementById("btn2-blogs");
var navigationManualBlogs = document.querySelector(".navigation-manual-blogs");
swipeBtnBlogs1.addEventListener("click", () => {
  navigationManualBlogs.classList.add("swipe-btn-active-blogs");
  navigationManualBlogs.classList.remove("swipe-btn-active2-blogs");
});

swipeBtnBlogs2.addEventListener("click", () => {
  navigationManualBlogs.classList.add("swipe-btn-active2-blogs");
  navigationManualBlogs.classList.remove("swipe-btn-active-blogs");
});

var appoinTime = document.querySelector(".appoin-time-grid");
var appoinItem1 = document.getElementById("appoin-item1");
var appoinItem2 = document.getElementById("appoin-item2");
var appoinItem3 = document.getElementById("appoin-item3");
var appoinItem4 = document.getElementById("appoin-item4");
var appoinItem5 = document.getElementById("appoin-item5");
var appoinItem6 = document.getElementById("appoin-item6");
var appoinItem7 = document.getElementById("appoin-item7");
var appoinItem8 = document.getElementById("appoin-item8");
var appoinItem9 = document.getElementById("appoin-item9");

appoinItem1.addEventListener("click", () => {
  appoinTime.classList.add("appoinItem1-active");
  appoinTime.classList.remove("appoinItem2-active");
  appoinTime.classList.remove("appoinItem3-active");
  appoinTime.classList.remove("appoinItem4-active");
  appoinTime.classList.remove("appoinItem5-active");
  appoinTime.classList.remove("appoinItem6-active");
  appoinTime.classList.remove("appoinItem7-active");
  appoinTime.classList.remove("appoinItem8-active");
  appoinTime.classList.remove("appoinItem9-active");
});

appoinItem2.addEventListener("click", () => {
  appoinTime.classList.remove("appoinItem1-active");
  appoinTime.classList.add("appoinItem2-active");
  appoinTime.classList.remove("appoinItem3-active");
  appoinTime.classList.remove("appoinItem4-active");
  appoinTime.classList.remove("appoinItem5-active");
  appoinTime.classList.remove("appoinItem6-active");
  appoinTime.classList.remove("appoinItem7-active");
  appoinTime.classList.remove("appoinItem8-active");
  appoinTime.classList.remove("appoinItem9-active");
});

appoinItem3.addEventListener("click", () => {
  appoinTime.classList.remove("appoinItem1-active");
  appoinTime.classList.remove("appoinItem2-active");
  appoinTime.classList.add("appoinItem3-active");
  appoinTime.classList.remove("appoinItem4-active");
  appoinTime.classList.remove("appoinItem5-active");
  appoinTime.classList.remove("appoinItem6-active");
  appoinTime.classList.remove("appoinItem7-active");
  appoinTime.classList.remove("appoinItem8-active");
  appoinTime.classList.remove("appoinItem9-active");
});

appoinItem4.addEventListener("click", () => {
  appoinTime.classList.remove("appoinItem1-active");
  appoinTime.classList.remove("appoinItem2-active");
  appoinTime.classList.remove("appoinItem3-active");
  appoinTime.classList.add("appoinItem4-active");
  appoinTime.classList.remove("appoinItem5-active");
  appoinTime.classList.remove("appoinItem6-active");
  appoinTime.classList.remove("appoinItem7-active");
  appoinTime.classList.remove("appoinItem8-active");
  appoinTime.classList.remove("appoinItem9-active");
});

appoinItem5.addEventListener("click", () => {
  appoinTime.classList.remove("appoinItem1-active");
  appoinTime.classList.remove("appoinItem2-active");
  appoinTime.classList.remove("appoinItem3-active");
  appoinTime.classList.remove("appoinItem4-active");
  appoinTime.classList.add("appoinItem5-active");
  appoinTime.classList.remove("appoinItem6-active");
  appoinTime.classList.remove("appoinItem7-active");
  appoinTime.classList.remove("appoinItem8-active");
  appoinTime.classList.remove("appoinItem9-active");
});

appoinItem6.addEventListener("click", () => {
  appoinTime.classList.remove("appoinItem1-active");
  appoinTime.classList.remove("appoinItem2-active");
  appoinTime.classList.remove("appoinItem3-active");
  appoinTime.classList.remove("appoinItem4-active");
  appoinTime.classList.remove("appoinItem5-active");
  appoinTime.classList.add("appoinItem6-active");
  appoinTime.classList.remove("appoinItem7-active");
  appoinTime.classList.remove("appoinItem8-active");
  appoinTime.classList.remove("appoinItem9-active");
});

appoinItem7.addEventListener("click", () => {
  appoinTime.classList.remove("appoinItem1-active");
  appoinTime.classList.remove("appoinItem2-active");
  appoinTime.classList.remove("appoinItem3-active");
  appoinTime.classList.remove("appoinItem4-active");
  appoinTime.classList.remove("appoinItem5-active");
  appoinTime.classList.remove("appoinItem6-active");
  appoinTime.classList.add("appoinItem7-active");
  appoinTime.classList.remove("appoinItem8-active");
  appoinTime.classList.remove("appoinItem9-active");
});

appoinItem8.addEventListener("click", () => {
  appoinTime.classList.remove("appoinItem1-active");
  appoinTime.classList.remove("appoinItem2-active");
  appoinTime.classList.remove("appoinItem3-active");
  appoinTime.classList.remove("appoinItem4-active");
  appoinTime.classList.remove("appoinItem5-active");
  appoinTime.classList.remove("appoinItem6-active");
  appoinTime.classList.remove("appoinItem7-active");
  appoinTime.classList.add("appoinItem8-active");
  appoinTime.classList.remove("appoinItem9-active");
});

appoinItem9.addEventListener("click", () => {
  appoinTime.classList.remove("appoinItem1-active");
  appoinTime.classList.remove("appoinItem2-active");
  appoinTime.classList.remove("appoinItem3-active");
  appoinTime.classList.remove("appoinItem4-active");
  appoinTime.classList.remove("appoinItem5-active");
  appoinTime.classList.remove("appoinItem6-active");
  appoinTime.classList.remove("appoinItem7-active");
  appoinTime.classList.remove("appoinItem8-active");
  appoinTime.classList.add("appoinItem9-active");
});

let appointmentBtn = document.getElementById("apppointment-btn");
let appointmentClass = document.querySelector(".app-active");
let getApp = document.querySelector("#get-app");
appointmentBtn.addEventListener("click", () => {
  appointmentClass.classList.toggle("apppointment-active");
});

getApp.addEventListener("click", () => {
  appointmentClass.classList.remove("apppointment-active");
});


let readMoreBtn1 = document.querySelector("#read-more1");
let readMoreClass1 = document.querySelector(".article1");
let closeReadClass1 = document.querySelector("#close1");
readMoreBtn1.addEventListener("click", () => {
  readMoreClass1.classList.toggle("readeMore-active");
});

closeReadClass1.addEventListener("click", () => {
  readMoreClass1.classList.remove("readeMore-active");
});

let readMoreBtn2 = document.querySelector("#read-more2");
let readMoreClass2 = document.querySelector(".article2");
let closeReadClass2 = document.querySelector("#close2");
readMoreBtn2.addEventListener("click", () => {
  readMoreClass2.classList.toggle("readeMore-active");
});

closeReadClass2.addEventListener("click", () => {
  readMoreClass2.classList.remove("readeMore-active");
});

let readMoreBtn3 = document.querySelector("#read-more3");
let readMoreClass3 = document.querySelector(".article3");
let closeReadClass3 = document.querySelector("#close3");
readMoreBtn3.addEventListener("click", () => {
  readMoreClass3.classList.toggle("readeMore-active");
});

closeReadClass3.addEventListener("click", () => {
  readMoreClass3.classList.remove("readeMore-active");
});

let readMoreBtn4 = document.querySelector("#read-more4");
let readMoreClass4 = document.querySelector(".article4");
let closeReadClass4 = document.querySelector("#close4");
readMoreBtn4.addEventListener("click", () => {
  readMoreClass4.classList.toggle("readeMore-active");
});

closeReadClass4.addEventListener("click", () => {
  readMoreClass4.classList.remove("readeMore-active");
});

let readMoreBtn5 = document.querySelector("#read-more5");
let readMoreClass5 = document.querySelector(".article5");
let closeReadClass5 = document.querySelector("#close5");
readMoreBtn5.addEventListener("click", () => {
  readMoreClass5.classList.toggle("readeMore-active");
});

closeReadClass5.addEventListener("click", () => {
  readMoreClass5.classList.remove("readeMore-active");
});

let readMoreBtn6 = document.querySelector("#read-more6");
let readMoreClass6 = document.querySelector(".article6");
let closeReadClass6 = document.querySelector("#close6");
readMoreBtn6.addEventListener("click", () => {
  readMoreClass6.classList.toggle("readeMore-active");
});

closeReadClass6.addEventListener("click", () => {
  readMoreClass6.classList.remove("readeMore-active");
});

let viewProfileBtn1 = document.querySelector("#view1");
let viewProfileClass1 = document.querySelector(".doctor1");
let closeViewClass1 = document.querySelector("#close11");
viewProfileBtn1.addEventListener("click", () => {
  viewProfileClass1.classList.toggle("readeMore-active");
});

closeViewClass1.addEventListener("click", () => {
  viewProfileClass1.classList.remove("readeMore-active");
});

let viewProfileBtn2 = document.querySelector("#view2");
let viewProfileClass2 = document.querySelector(".doctor2");
let closeViewClass2 = document.querySelector("#close22");
viewProfileBtn2.addEventListener("click", () => {
  viewProfileClass2.classList.toggle("readeMore-active");
});

closeViewClass2.addEventListener("click", () => {
  viewProfileClass2.classList.remove("readeMore-active");
});

let viewProfileBtn3 = document.querySelector("#view3");
let viewProfileClass3 = document.querySelector(".doctor3");
let closeViewClass3 = document.querySelector("#close33");
viewProfileBtn3.addEventListener("click", () => {
  viewProfileClass3.classList.toggle("readeMore-active");
});

closeViewClass3.addEventListener("click", () => {
  viewProfileClass3.classList.remove("readeMore-active");
});

let watchVideoBtn = document.querySelector(".watch-btn");
let watchVideoClass = document.querySelector(".video1");
let closeVideoClass = document.querySelector("#close-video");
watchVideoBtn.addEventListener("click", () => {
  console.log('cdcd');
  watchVideoClass.classList.toggle("readeMore-active");
});

closeVideoClass.addEventListener("click", () => {
  watchVideoClass.classList.remove("readeMore-active");
});



/* calendar js */
const isLeapYear = (year) => {
  return (
    (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) ||
    (year % 100 === 0 && year % 400 === 0)
  );
};
const getFebDays = (year) => {
  return isLeapYear(year) ? 29 : 28;
};
let calendar = document.querySelector(".calendar");
const month_names = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month_picker = document.querySelector("#month-picker");
const dayTextFormate = document.querySelector(".day-text-formate");
const timeFormate = document.querySelector(".time-formate");
const dateFormate = document.querySelector(".date-formate");

month_picker.onclick = () => {
  month_list.classList.remove("hideonce");
  month_list.classList.remove("hide");
  month_list.classList.add("show");
  dayTextFormate.classList.remove("showtime");
  dayTextFormate.classList.add("hidetime");
  timeFormate.classList.remove("showtime");
  timeFormate.classList.add("hideTime");
  dateFormate.classList.remove("showtime");
  dateFormate.classList.add("hideTime");
};

const generateCalendar = (month, year) => {
  let calendar_days = document.querySelector(".calendar-days");
  calendar_days.innerHTML = "";
  let calendar_header_year = document.querySelector("#year");
  let days_of_month = [
    31,
    getFebDays(year),
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];

  let currentDate = new Date();

  month_picker.innerHTML = month_names[month];

  calendar_header_year.innerHTML = year;

  let first_day = new Date(year, month);

  for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
    let day = document.createElement("div");

    if (i >= first_day.getDay()) {
      day.innerHTML = i - first_day.getDay() + 1;

      if (
        i - first_day.getDay() + 1 === currentDate.getDate() &&
        year === currentDate.getFullYear() &&
        month === currentDate.getMonth()
      ) {
        day.classList.add("current-date");
      }
    }
    calendar_days.appendChild(day);
  }
};

let month_list = calendar.querySelector(".month-list");
month_names.forEach((e, index) => {
  let month = document.createElement("div");
  month.innerHTML = `<div>${e}</div>`;

  month_list.append(month);
  month.onclick = () => {
    currentMonth.value = index;
    generateCalendar(currentMonth.value, currentYear.value);
    month_list.classList.replace("show", "hide");
    dayTextFormate.classList.remove("hideTime");
    dayTextFormate.classList.add("showtime");
    timeFormate.classList.remove("hideTime");
    timeFormate.classList.add("showtime");
    dateFormate.classList.remove("hideTime");
    dateFormate.classList.add("showtime");
  };
});

(function () {
  month_list.classList.add("hideonce");
})();
document.querySelector("#pre-year").onclick = () => {
  if (currentYear.value > 2023) {
    --currentYear.value;
  }
  generateCalendar(currentMonth.value, currentYear.value);
};
document.querySelector("#next-year").onclick = () => {
  ++currentYear.value;
  generateCalendar(currentMonth.value, currentYear.value);
};

let currentDate = new Date();
let currentMonth = { value: currentDate.getMonth() };
let currentYear = { value: currentDate.getFullYear() };
generateCalendar(currentMonth.value, currentYear.value);

const todayShowTime = document.querySelector(".time-formate");
const todayShowDate = document.querySelector(".date-formate");

const currshowDate = new Date();
const showCurrentDateOption = {
  year: "numeric",
  month: "long",
  day: "numeric",
  weekday: "long",
};
const currentDateFormate = new Intl.DateTimeFormat(
  "en-US",
  showCurrentDateOption
).format(currshowDate);
todayShowDate.textContent = currentDateFormate;
setInterval(() => {
  const timer = new Date();
  const option = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  const formateTimer = new Intl.DateTimeFormat("en-us", option).format(timer);
  let time = `${`${timer.getHours()}`.padStart(
    2,
    "0"
  )}:${`${timer.getMinutes()}`.padStart(
    2,
    "0"
  )}: ${`${timer.getSeconds()}`.padStart(2, "0")}`;
  todayShowTime.textContent = formateTimer;
}, 1000);

/*fin calendar js*/
