// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
mdc.autoInit();

document.getElementById('greeting-form').addEventListener('submit', function (evt) {
    evt.preventDefault();
    var firstname = evt.target.elements.firstname.value;
    var lastname = evt.target.elements.lastname.value;
    var greeting = 'Hello';
    if (firstname || lastname) {
        greeting += ', ';
        if (firstname && lastname) {
            greeting += firstname + ' ' + lastname;
        } else if (lastname) {
            greeting += 'Mx. ' + lastname;
        } else {
            greeting += firstname;
        }
    }
    greeting += '!';

    document.getElementById('greeting').textContent = greeting;
});

var drawerEl = document.querySelector('.mdc-temporary-drawer');
var MDCTemporaryDrawer = mdc.drawer.MDCTemporaryDrawer;
var drawer = new MDCTemporaryDrawer(drawerEl);
document.querySelector('.demo-menu').addEventListener('click', function () {
    drawer.open = true;
});
drawerEl.addEventListener('MDCTemporaryDrawer:open', function () {
    console.log('Received MDCTemporaryDrawer:open');
});
drawerEl.addEventListener('MDCTemporaryDrawer:close', function () {
    console.log('Received MDCTemporaryDrawer:close');
});