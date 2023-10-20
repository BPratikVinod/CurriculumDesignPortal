var num = 0;
var r = 0;
function moveChat() {

}
function addContact() {
    var name = "Contacto " + num;
    num = num + 1;
    var list = document.getElementById("contactList");
    var contacto = document.createElement('div');
    contacto.innerHTML = name;
    contacto.onclick = function () {
        var actual = document.getElementById("contactoActual");
        actual.innerHTML = contacto.innerHTML;
    }
    contacto.className = "contactInfo";
    list.appendChild(contacto);
}
function addMessage() {
    var list = document.getElementById("messageList");
    var message = document.createElement('div');
    var input = document.getElementById("mensajeInput");
    if (input.value) {
        message.innerHTML = input.value;
        message.className = "messageSent";
        list.appendChild(message);
    }
}
function addRamdomMessage() {
    console.log("mensaje");
    var list = document.getElementById("messageList");
    var message = document.createElement('div');
    var input = document.getElementById("mensajeInput");
    if (input.value) {
        message.innerHTML = input.value;
        message.className = "messageReceived";

        list.appendChild(message);
    }
}
function start() {
    setInterval(addRamdomMessage, 4000);
}
var counter = 0;
function count() {
    counter++;
    console.log(count);
    if (count % 83 == 0) expandInput();
}
function expandInput() {
    var elem = document.getElementById("mensajeInput");

    elem.style.height = "50px";

}