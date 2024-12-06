
const handleScrollTop = () => {

    const mainContainer = document.querySelector('main')

    const intro = document.querySelector('.w-intro')

    const scrollY = intro.getBoundingClientRect().height 
    console.log(scrollY, window.scrollY )

        window.scroll({
            top: scrollY,
            left: 0,
            behavior: "smooth",
        });
    
}

export { handleScrollTop }