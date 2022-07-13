
// 메뉴

let isMenuOpen = false;

const Menu = function () {
    console.log("hello")
    if (isMenuOpen) {
        document.documentElement.style.setProperty("--menu-height", "55px");
        isMenuOpen = false;
    }
    else {
        document.documentElement.style.setProperty("--menu-height", "1000px");
        isMenuOpen = true;
    }
};
