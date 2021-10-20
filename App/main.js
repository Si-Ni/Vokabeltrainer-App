const eingabeForm = document.getElementById("neuerEintragForm");
const input1 = document.getElementById("eingabe1");
const input2 = document.getElementById("eingabe2");
var id = 0;

eingabeForm.addEventListener("submit", (e) => {
    e.preventDefault();
    add({vokabel1: input1.value, vokabel2: input2.value, id: id});
    id++;
    input1.value = "";
    input2.value = "";
    input1.focus();
})

function add (data) {
    var item = document.createElement("li");
    item.innerHTML =    `<form id="changeForm">
                        <div class="ersteVokabel">${data.vokabel1}</div>
                        <button id="${data.id}" type="button" class="buttonD" onClick="reply_clickButton(this.id)">D</button>
                        <div class='zweiteVokabel'>${data.vokabel2}</div>
                        </form>`;
    item.className = data.id + "d";
    ausgabe.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
}

function reply_clickButton(clicked_id){
    item = document.getElementsByClassName(clicked_id+"d")[0];
    item.remove();
}

function linksVerdecken() {
    let all = document.getElementsByClassName('ersteVokabel');
        for (let i = 0; i < all.length; i++) {
            all[i].style.setProperty("--main-color", "transparent");
        }
    all = document.getElementsByClassName('zweiteVokabel');
        for (let i = 0; i < all.length; i++) {
            all[i].style.setProperty("--main-color", "black");
        }
}

function rechtsVerdecken() {
    let all = document.getElementsByClassName('zweiteVokabel');
        for (let i = 0; i < all.length; i++) {
            all[i].style.setProperty("--main-color", "transparent");
        }
    all = document.getElementsByClassName('ersteVokabel');
        for (let i = 0; i < all.length; i++) {
            all[i].style.setProperty("--main-color", "black");
        }
}

function anzeigen() {
    let all = document.getElementsByClassName('ersteVokabel');
        for (let i = 0; i < all.length; i++) {
            all[i].style.setProperty("--main-color", "black");
        }
    all = document.getElementsByClassName('zweiteVokabel');
        for (let i = 0; i < all.length; i++) {
            all[i].style.setProperty("--main-color", "black");
        }
}

