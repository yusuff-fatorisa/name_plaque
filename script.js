// Adding variables to store our data
const userInput = document.querySelector('.field-input');
const userLeterPreview = document.querySelector('.plaque-prev');
const userPricePreview = document.querySelector('#plaquePrice');
const buyButton = document.querySelector(".buy-submit");


// Refactoring with Arrow Function
const countLeters = (some_data) =>{
  const price = some_data.replaceAll(' ', '').length * 5; // price of each letter
  userLeterPreview.textContent = some_data;
  userPricePreview.textContent = '$'+price;
}

const buyNow = (data) => {
  if (data === "") {
    alert("Input the letters of your name");
    userInput.focus();
  }
  else if (data === "YOUR NAME") {
    alert("Enter valid letters of your name");
    userInput.focus();
  }
  else {
    if (data.replaceAll(" ", "").length <= 15) {
      alert("Success!!! Your name has been processed for printing");
    }
    else {
      alert("The limit of characters allowed is 15");
    }
  }
}

userInput.oninput = (e)=>{
  countLeters(e.target.value)
}

buyButton.onclick = () => {
  buyNow(userInput.value);
}
