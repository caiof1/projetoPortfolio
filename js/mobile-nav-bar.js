class MobileNavBar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu)
        this.navList = document.querySelector(navList)
        this.navLinks = document.querySelectorAll(navLinks)
        this.activeClass = "active"
        this.menuLinks = document.querySelectorAll('.nav a[href^="#"')
    }


    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
            ? (link.style.animation = '')
            : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3 }s`) 
        })
    }

    addClickEvent() {
        this.mobileMenu.addEventListener('click', () => {
            this.navList.classList.toggle(this.activeClass)
            this.mobileMenu.classList.toggle(this.activeClass)
            this.animateLinks()
        })

        
        this.menuLinks.forEach((link) => {
            link.addEventListener('click', () => {
                this.navList.classList.toggle(this.activeClass)
                this.mobileMenu.classList.toggle(this.activeClass)
                this.animateLinks()
            })
            
        })
    }

    init() {
        if(this.mobileMenu) {
            this.addClickEvent()
        }

        return this
    }
}

const mobileNavBar = new MobileNavBar(
    '.bar',
    '.nav',
    '.nav nav ul li'
)
mobileNavBar.init()