// -------------------- Berechnung der Zuataten --------------------

function calculateIngredients(event) {
    event.preventDefault(); // verhindert neu laden der seite nachdem das formular submitted wurde

    let amount_portions = document.getElementById("amt-portions").value; // wert vom input feld
    let list_of_ingredients = document.getElementsByClassName("ingredients"); // generieren einer liste allet zutaten div-container

    for (let i = 0; i < list_of_ingredients.length; i++) {
        let base_amount = parseInt(list_of_ingredients[i].getAttribute("data-base-amount")); // fester wert jedes zutaten-containers für korrekte berechnung
        let amount_before = parseInt(list_of_ingredients[i].innerHTML); // zahl die sich im jeweiligen div befindet (string wird abgeschnitten und zahl in int umgewandelt)

        if (base_amount > 0) {
            let amount_after = base_amount * amount_portions; // neu berechneter wert
            list_of_ingredients[i].innerHTML = list_of_ingredients[i].innerHTML.replace(amount_before, amount_after); // vorherigen mit neuberechneten wert ersetzen
        }
    }
}

// -------------------- Mail versenden --------------------

function sendMail(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch("https://formspree.io/f/mblrkbkk", {
        method: "POST",
        body: new FormData(event.target),
        headers: {
            Accept: "application/json",
        },
    })
        .then(() => {
            window.location.href = "./send_mail.html";
        })
        .catch((error) => {
            console.log(error);
        });
}

// -------------------- Responsive Menu --------------------

// function toggleRespMenu() {
//     document.getElementById("resp-menu").classList.toggle("resp-menu-closed");
// }

function toggleRespMenu() {
    const menu = document.getElementById("resp-menu");
    const body = document.body;

    // Toggle der Klasse für das Menü
    menu.classList.toggle("resp-menu-closed");

    // Wenn das Menü geöffnet ist, deaktiviere das Scrollen
    if (!menu.classList.contains("resp-menu-closed")) {
        body.addEventListener("wheel", preventDefault, { passive: false });
        body.addEventListener("touchmove", preventDefault, { passive: false });
    } else {
        // Wenn das Menü geschlossen ist, aktiviere das Scrollen wieder
        body.removeEventListener("wheel", preventDefault, { passive: false });
        body.removeEventListener("touchmove", preventDefault, { passive: false });
    }
}

function preventDefault(e) {
    e.preventDefault();
}
