// Gallery

let buttons = document.querySelectorAll(".button-group > button");
let galleryItems = document.querySelectorAll(".gallery-item");

document.querySelectorAll(".button-group > button").forEach(value => {
    value.addEventListener("click", function () {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('active');
        }
        this.classList.add('active');

        let dataFilter = this.getAttribute('data-filter');

        for (let j = 0; j < galleryItems.length; j++) {
            galleryItems[j].classList.add('hidden')

            if(galleryItems[j].getAttribute('data-item') == dataFilter || dataFilter == "all"){
                galleryItems[j].classList.remove('hidden')
            }
        }
    })
})


// Modal

let prevButton = document.querySelector(".mg-prev");
let nextButton = document.querySelector(".mg-next");
let allImg = document.querySelectorAll(".gallery-item img");
const modalImg = document.querySelector(".img-modal img");
const modal = document.querySelector(".container-modal");
const backdrop = document.querySelector(".backdrop");

for (let i = 0; i < allImg.length; i++) {
    allImg[i].addEventListener("click", function () {
        const urlImg = this.getAttribute('src');
        modal.style.display = "flex";
        backdrop.style.display = "flex";
        document.body.style.overflow = "hidden";
        backdrop.addEventListener("click", function (event) {
            event.stopPropagation();
            modal.style.display = "none";
            backdrop.style.display = "none";
            document.body.style.overflow = "scroll";
        })
        modalImg.setAttribute('src', urlImg)
        iterator = i
    })
}

prevButton.addEventListener("click", function () {
    iterator === 0 ? iterator = allImg.length - 1 : iterator -= 1
    const urlImg = allImg[iterator].getAttribute('src');
    modalImg.setAttribute('src', urlImg)

    while (true) {
        if ( galleryItems[iterator].classList.contains('hidden') ) {
            iterator === 0 ? iterator = allImg.length - 1 : iterator -= 1
            const urlImg = allImg[iterator].getAttribute('src');
            modalImg.setAttribute('src', urlImg)
        } else {
            break;
        }
    }
})

nextButton.addEventListener("click", function () {
    iterator === allImg.length - 1 ? iterator = 0 : iterator += 1
    const urlImg = allImg[iterator].getAttribute('src');
    modalImg.setAttribute('src', urlImg)

    while (true) {
        if ( galleryItems[iterator].classList.contains('hidden') ) {
            iterator === allImg.length - 1 ? iterator = 0 : iterator += 1
            const urlImg = allImg[iterator].getAttribute('src');
            modalImg.setAttribute('src', urlImg)
        } else {
            break;
        }
    }
})