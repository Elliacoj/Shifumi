let rock = document.getElementById("rock");
let scissor = document.getElementById("scissor");
let paper = document.getElementById("paper");
let newGame = document.getElementById("newGame");
let player = document.getElementById("player");
let ia = document.getElementById("ia");
let score = document.getElementById("score");
let resume = document.getElementById("resume");
let imgScissor = "ciseaux.png";
let imgPaper = "feuille.png";
let imgRock = "pierre.png";
let array = [imgScissor, imgPaper, imgRock];
let victory = 0;
let defaite = 0;
let draw = 0;
let game = 0;

score.innerHTML = "Victoire joueur: " + victory + "<br>" + "Victoire ordinateur: " + defaite + "<br>" + "Egalité: " + draw;

scissor.addEventListener("click", function () {
    if(player.getElementsByTagName("img").length === 0) {
        img(imgScissor);
    }
})

paper.addEventListener("click", function () {
    if(player.getElementsByTagName("img").length === 0) {
        img(imgPaper);
    }
})

rock.addEventListener("click", function () {
    if(player.getElementsByTagName("img").length === 0) {
        img(imgRock);
    }
})

newGame.addEventListener("click", function () {
    player.removeChild(player.lastElementChild);
    ia.removeChild(ia.lastElementChild);
})

function img(image) {
    let playerImg = document.createElement("img");
    let iaImg = document.createElement("img");
    let random = Math.trunc(Math.random()*3)

    playerImg.style.width = "100%";
    playerImg.style.height = "100%";

    iaImg.style.width = "100%";
    iaImg.style.height = "100%";
    player.append(playerImg);
    ia.append(iaImg);
    playerImg.src = image;
    iaImg.src = array[random];
    win(image, array[random]);

}

function win(player, choice) {
    game++;
    if (choice === player) {
        draw++;
        resume.innerHTML += "Round " + game + ": " + "Egalité" + "<br>";
    }
    else if((player === imgScissor && choice === imgRock) || (player === imgRock && choice === imgPaper) || (player === imgPaper && choice === imgScissor)) {
        defaite++
        resume.innerHTML += "Round " + game + ": " + "Défaite" + "<br>";
    }
    else {
        victory++
        resume.innerHTML += "Round " + game + ": " + "Victoire" + "<br>";
    }
    score.innerHTML = "Victoire joueur: " + victory + "<br>" + "Victoire ordinateur: " + defaite + "<br>" + "Egalité: " + draw;
}
