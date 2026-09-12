function login() {

    const name =
        document.getElementById("name").value.trim();

    const password =
        document.getElementById("password").value.trim();

    if (name === "") {

        alert("Please enter your name 💕");

        return;
    }

    /*
       Demo password.

       Change "1234" to whatever password
       you want.
    */

    if (password !== "1234") {

        alert("Wrong surprise password 😜");

        return;
    }

    document.getElementById("personalTitle").innerHTML =
        "Dear " + escapeHTML(name) + " 💖";

    changePage("loginPage", "wishesPage");

    createConfetti(70);
}


/* =========================
   PAGE TRANSITION
========================= */

function changePage(oldPage, newPage) {

    document
        .getElementById(oldPage)
        .classList.remove("active");

    setTimeout(() => {

        document
            .getElementById(newPage)
            .classList.add("active");

    }, 200);
}


/* =========================
   MESSAGE PAGE
========================= */

function showMessage() {

    changePage(
        "wishesPage",
        "messagePage"
    );

    setTimeout(() => {

        createConfetti(100);

    }, 500);
}


/* =========================
   CELEBRATION
========================= */

function celebrate() {

    createConfetti(200);

    const button =
        document.querySelector("#messagePage .btn");

    button.innerHTML =
        "🎂 Make a Wish! ✨";

    setTimeout(() => {

        button.innerHTML =
            "🎉 Celebrate Again!";

    }, 3000);
}


/* =========================
   CONFETTI
========================= */

function createConfetti(amount) {

    for (let i = 0; i < amount; i++) {

        const piece =
            document.createElement("div");

        piece.className = "confetti";

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.background =
            `hsl(${Math.random() * 360}, 90%, 65%)`;

        piece.style.animationDuration =
            (Math.random() * 3 + 2) + "s";

        piece.style.animationDelay =
            Math.random() * .8 + "s";

        piece.style.transform =
            `rotate(${Math.random() * 360}deg)`;

        document.body.appendChild(piece);

        setTimeout(() => {

            piece.remove();

        }, 6000);
    }
}


/* =========================
   SECURITY HELPER
========================= */

function escapeHTML(text) {

    const div =
        document.createElement("div");

    div.textContent = text;

    return div.innerHTML;
}
