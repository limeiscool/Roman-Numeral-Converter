const input = document.getElementById('number');
const button = document.getElementById('convert-btn');
const output = document.getElementById('output');

const numerals = [
  { arabic: 1000, roman: "M" }, { arabic: 900, roman: "CM" },
  { arabic: 500, roman: "D" }, { arabic: 400, roman: "CD" },
  { arabic: 100, roman: "C" }, { arabic: 90, roman: "XC" },
  { arabic: 50, roman: "L" }, { arabic: 40, roman: "XL" },
  { arabic: 10, roman: "X" }, { arabic: 9, roman: "IX" },
  { arabic: 5, roman: "V" }, { arabic: 4, roman: "IV" },
  { arabic: 1, roman: "I" }
];

const getConversion = (number) => {
  const romanArr = [];
  let count = number
  numerals.forEach(obj => {
    while (count >= obj.arabic) {
      romanArr.push(obj.roman)
      count -= obj.arabic;
    }
  })

  return romanArr.join('')

}

const getInputValue = () => {
  const inputValue = input.value
  output.classList.remove('hidden');
  if (inputValue === "") {
    output.classList.add('small-text');
    output.innerText = "Please enter a valid number"
  } else if (inputValue <= 0) {
    output.classList.add('small-text');
    output.innerText = "Please enter a number greater than or equal to 1"
  } else if (inputValue > 3999) {
    output.classList.add('small-text');
    output.innerText = "Please enter a number less than or equal to 3999"
  } else {
    output.classList.remove('small-text');
    const outputText = getConversion(inputValue);
    output.innerText = outputText;
  }
}

button.addEventListener("click", getInputValue);



