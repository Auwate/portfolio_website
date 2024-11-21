function toggleMenu() {
    const menu = document.querySelector(".mobile_nav_links")
    const icon = document.querySelector(".mobile_hamburger_icon")
    const body = document.body

    menu.classList.toggle("mobile_open")
    icon.classList.toggle("mobile_icon_open")
    body.classList.toggle("mobile_menu_open")
}