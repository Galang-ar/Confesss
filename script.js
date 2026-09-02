const text = `
Woi pendek gw sebenernya suka sama lo. Cuma gw takut kepedean anjir. 
Gw takut lo diomongin ama temen-temen lu karena punya pacar kayak gw.
Gw takut lu malu punya cowo kayak gw. Gw takut lo ga nyaman sama gw. 
Banyaklah pokoknya.`;

const message = document.getElementById("message");

let index = 0;

function typing() {

    if (index < text.length) {

        message.innerHTML += text.charAt(index);

        index++;

        setTimeout(typing, 35);
    }
}

typing();

const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");

let noCount = 0;

const maxEscape = 8;

function moveNoButton() {

    noCount++;

    if (noCount >= maxEscape) {

        noButton.style.display = "none";

        yesButton.style.transform = "scale(1.2)";

        return;
    }

    noButton.style.position = "fixed";


    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;


    const maxX =
        window.innerWidth - buttonWidth - 20;

    const maxY =
        window.innerHeight - buttonHeight - 20;


    const randomX =
        Math.floor(Math.random() * maxX) + 10;

    const randomY =
        Math.floor(Math.random() * maxY) + 10;


    noButton.style.left =
        randomX + "px";

    noButton.style.top =
        randomY + "px";

    const texts = [
        "Dih? ",
        "Nolak ni ceritanya? ",
        "DIH??? ",
        "Lo mau nolak gwehj?? ",
        "Pikir lagi deh ",
        "Pencet ke \"Ya\" nya itu ",
        "Pencet Anjir ",
        "Hehehe 😈"
    ];


    noButton.innerText =
        texts[Math.min(
            noCount - 1,
            texts.length - 1
        )];
}

noButton.addEventListener(
    "mouseenter",
    moveNoButton
);

noButton.addEventListener(
    "touchstart",
    function(event) {

        event.preventDefault();

        moveNoButton();
    }
);

noButton.addEventListener(
    "click",
    function(event) {

        event.preventDefault();

        moveNoButton();
    }
);

yesButton.addEventListener(
    "click",
    function() {

        document.getElementById(
            "mainContent"
        ).style.display = "none";


        document.getElementById(
            "success"
        ).style.display = "block";

        for (let i = 0; i < 30; i++) {

            createHeart();
        }
    }
);

function createHeart() {

    const heart =
        document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";


    heart.style.left =
        Math.random() * 100 + "vw";


    heart.style.fontSize =
        (15 + Math.random() * 30) + "px";


    heart.style.animationDuration =
        (4 + Math.random() * 6) + "s";


    heart.style.animationDelay =
        Math.random() * 2 + "s";


    document.querySelector(".hearts")
        .appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 10000);
}

setInterval(createHeart, 500);