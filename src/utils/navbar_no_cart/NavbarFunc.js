function topHamburgerCheck(event) {
    event.target.nextSibling.childNodes[0].classList.add("hamb-top-check");
    event.target.nextSibling.childNodes[0].classList.remove("hamb-top-uncheck");
}
function ctrHamburgerCheck(event) {
    event.target.nextSibling.childNodes[1].classList.add("hamb-ctr-check");
    event.target.nextSibling.childNodes[1].classList.remove("hamb-ctr-uncheck");
}
function btmHamburgerCheck(event) {
    event.target.nextSibling.childNodes[2].classList.add("hamb-bt-check");
    event.target.nextSibling.childNodes[2].classList.remove("hamb-bt-uncheck");
}
function topHamburgerUncheck(event) {
    event.target.nextSibling.childNodes[0].classList.remove("hamb-top-check");
    event.target.nextSibling.childNodes[0].classList.add("hamb-top-uncheck");
}
function ctrHamburgerUncheck(event) {
    event.target.nextSibling.childNodes[1].classList.remove("hamb-ctr-check");
    event.target.nextSibling.childNodes[1].classList.add("hamb-ctr-uncheck");
}
function btmHamburgerUncheck(event) {
    event.target.nextSibling.childNodes[2].classList.remove("hamb-bt-check");
    event.target.nextSibling.childNodes[2].classList.add("hamb-bt-uncheck");
}
function menusShow(event) {
    event.target.parentNode.parentNode.nextElementSibling.classList.add(
        "menus-show"
    );
    event.target.parentNode.parentNode.nextElementSibling.classList.remove(
        "menus-hide"
    );
}
function menusHide(event) {
    event.target.parentNode.parentNode.nextElementSibling.classList.remove(
        "menus-show"
    );
    event.target.parentNode.parentNode.nextElementSibling.classList.add(
        "menus-hide"
    );
}
function invertLogo(event) {
    event.target.parentNode.previousSibling.classList.remove(
        "invert-element-back"
    );
    event.target.parentNode.previousSibling.classList.add("invert-element");
}
function invertLogoBack(event) {
    event.target.parentNode.previousSibling.classList.remove("invert-element");
    event.target.parentNode.previousSibling.classList.add(
        "invert-element-back"
    );
}
const NavbarFunction = {
    topHamburgerCheck,
    ctrHamburgerCheck,
    btmHamburgerCheck,
    topHamburgerUncheck,
    ctrHamburgerUncheck,
    btmHamburgerUncheck,
    menusShow,
    menusHide,
    invertLogo,
    invertLogoBack,
};

export default NavbarFunction;
