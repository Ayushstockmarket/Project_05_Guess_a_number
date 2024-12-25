const input_user_value = document.querySelector("#input_value_user");
const submit_btn = document.querySelector("#submit_btn");
const alert_message = document.querySelector("#alert_message");
const user_input_display = document.querySelector("#your_input_display");
const computer_input_display = document.querySelector("#computer-guess");
let max = 100,
  min = 1;
let computer_input_store;
let user_value;
let final_check = 0;
let to_low = "Too low!";
let to_high = "Too high!";
let correct = "You Win!";
window.onload = () => {
  input_user_value.value = "";
};
input_user_value.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    com_choise();
    computer_input_display.textContent = computer_input_store;
    check();
  }
});

submit_btn.addEventListener("click", () => {
  com_choise();
  computer_input_display.textContent = computer_input_store;
  check();
});

function check() {
  user_value = parseInt(input_user_value.value);
  user_input_display.textContent = user_value;
  final_check = parseInt(user_input_display.textContent);
  if (computer_input_store === final_check) {
    alert_message.textContent = correct;
    alert_message.style.color = "green";
    input_user_value.value = "";
  } else if (computer_input_store !== final_check) {
    if (computer_input_store > final_check) {
      alert_message.textContent = to_low;
      alert_message.style.color = "orange";
      input_user_value.value = "";
      console.log(
        `Computer input :${computer_input_store}`,
        `User input :${final_check}`
      );
    } else if (computer_input_store < final_check) {
      alert_message.textContent = to_high;
      alert_message.style.color = "red";
      input_user_value.value = "";
      console.log(
        `Computer input :${computer_input_store}`,
        `User input :${final_check}`
      );
    }
  } else {
    alert_message.textContent = "Please enter a number!";
    alert_message.style.color = "red";
    input_user_value.value = "";
    console.log(
      `Computer input :${computer_input_store}`,
      `User input :${final_check}`
    );
  }
}
function com_choise() {
  return (computer_input_store = Math.floor(
    Math.random() * (max - min + 1) + min
  ));
}
