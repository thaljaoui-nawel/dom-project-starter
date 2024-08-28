//get all plus button ()
let plusBtns = document.getElementsByClassName("fa-square-plus");
//console.log(plusBtns);
// Loop through plusBtns and add event listener to every plus button
for (let i = 0; i < plusBtns.length; i++) {
  const element = plusBtns[i];
  console.log(element);
  element.addEventListener("click", function (event) {
    //incriment quantity
    event.target.previousElementSibling.innerText++;
    calculateTotal();
  });
}

//get all minus button ()
let minusBtns = document.getElementsByClassName("fa-square-minus");
//console.log(plusBtns);
// Loop through minusBtns and add event listener to every minus button
for (let i = 0; i < minusBtns.length; i++) {
  const element = minusBtns[i];
  console.log(element);
  element.addEventListener("click", function (event) {
    //decriment quantity
    if (event.target.nextElementSibling.innerText > 1) {
      event.target.nextElementSibling.innerText--;
      calculateTotal();
    }
  });
}

//get all like button ()
let likeBtns = document.getElementsByClassName("fa-thumbs-up");
//console.log(plusBtns);
// Loop through likeBtns and add event listener to every like button
for (let i = 0; i < likeBtns.length; i++) {
  const element = likeBtns[i];
  console.log(element);
  element.addEventListener("click", function (event) {
    event.target.classList.toggle("liked");
  });
}

//get all remove button ()
let trashBtns = document.getElementsByClassName("fa-trash");
//console.log(plusBtns);
// Loop through trashBtns and add event listener to every remove button
for (let i = 0; i < trashBtns.length; i++) {
  const element = trashBtns[i];
  console.log(element);
  element.addEventListener("click", function (event) {
    event.target.closest(".single-item").remove();
    calculateTotal();
  });
}

//calculate total price
function calculateTotal() {
  let total = 0;
  //get total price
  let totalPrice = document.getElementById("total");
  //get All single item
  let singleItems = document.getElementsByClassName("single-item");
  //loop through single item
  for (let i = 0; i < singleItems.length; i++) {
    const element = singleItems[i];
    const unitPrice = element.querySelector(".price").innerText;
    const quantity = element.querySelector(".quantity").innerText;

    total += unitPrice * quantity;
  }
  totalPrice.innerText = total;
}

calculateTotal();
