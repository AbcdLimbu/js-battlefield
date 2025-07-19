const screen = document.getElementById("display"); // element -> div
const buttons = document.querySelectorAll(".btn"); // nodeList -> array

let output = "";

function display(output) {
  screen.textContent = output;
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    if (value === "C") {
      output = "";
      display(0);
      return;
    }

    if (value === "=") {
      try {
        const result = eval(output);
        output = result.toString();
        display(output);
        
      } catch (err) {
        display("Error");
        output = '';
      }
      return;
    }

    // prevent wierd start like *3 or +4;
    if (output === '' && ['*','/', '+', '-'].includes(value)){
        return;
    }
    output += value;
    display(output);
  });
});
