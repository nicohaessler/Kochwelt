function calculateIngredients(event) {
  event.preventDefault(); // verhindert neu laden der seite nachdem das formular submitted wurde

  let amount_portions = document.getElementById("amt-portions").value; // 4
  let list_of_ingredients = document.getElementsByClassName("ingredients");

  for (let i = 0; i < list_of_ingredients.length; i++) {
    let base_amount = parseInt(list_of_ingredients[i].getAttribute("data-base-amount")); // 1
    let amount_before = parseInt(list_of_ingredients[i].innerHTML); // 4

    if (base_amount > 0) {
      let amount_after = base_amount * amount_portions;
      list_of_ingredients[i].innerHTML = list_of_ingredients[i].innerHTML.replace(amount_before, amount_after);
    }
  }
}
