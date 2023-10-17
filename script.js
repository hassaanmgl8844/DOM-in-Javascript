var isstatus = document.querySelector("h5");
var btn = document.querySelector(".add");
var flag = 0;

btn.addEventListener("click", function (e) {
  if (flag == 0) {
    isstatus.innerHTML = "Friend";
    isstatus.style.color = "gray";
    btn.innerHTML = "Remove Friend";
    flag = 1;
  } else {
    isstatus.innerHTML = "Stranger";
    isstatus.style.color = "red";
    btn.innerHTML = "Add Friend";
    flag = 0;
  }
});
