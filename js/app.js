let accordionToggle = document.querySelectorAll(".accordion__item")

accordionToggle.forEach(element => {
    element.addEventListener("click", () => {
        if (element.classList.contains("active")) {
            element.classList.remove("active")
        } else {
            accordionToggle.forEach(item => {
                item.classList.remove("active")
            })
            element.classList.add("active")
        }
    })
});