function toggleMenu() {
    const menu = document.querySelector(".mobile_nav_links")
    const background = document.querySelector(".mobile_menu")
    const icon = document.querySelector(".mobile_hamburger_icon")
    const body = document.body
    const links = document.querySelector(".mobile_links")

    background.classList.toggle("cover-background")
    menu.classList.toggle("mobile_open")
    icon.classList.toggle("mobile_icon_open")
    body.classList.toggle("mobile_menu_open")
    links.classList.toggle("mobile_open")
}