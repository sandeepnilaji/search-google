// console.log("hi");
let show = document.getElementById("show");
var timerId;
async function star() {
  let value = document.getElementById("searchs").value;
  if (value.length == 0) {
    return false;
  }
  let char = await fetch(
    `http://api.serpstack.com/search?access_key=466e56c078c163ef217970b1d906de22&query=${value}&engine=google&num=5`
  );
  let data = await char.json();
  // console.log(data.results);
  // console.log(data);

  shows(data.organic_results, data.request);
}
function throttle() {
  if (timerId) {
    return false;
  }
  timerId = setTimeout(() => {
    main();
    timerId = undefined;
  }, 500);
  // console.log(timerId);
}
function shows(d, s) {
  show.innerHTML = null;
  d.forEach((el) => {
    let div1 = document.createElement("div");
    div1.className = "showing";
    div1.innerHTML = el.title;
    div1.addEventListener("click", function () {
      window.location.href = s.search_url;
    });
    show.append(div1);
  });
}
async function main() {
  star();
}
