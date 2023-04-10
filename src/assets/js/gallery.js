const royalSliderOpen = () => {
    document.body.classList.add('rs-opened')
}

const royalSliderClose = () => {
    document.body.classList.remove('rs-opened')
}

const createRoyalSlider = () => {
    var $royalSlider = $('.royalSlider');
    $royalSlider.royalSlider({
        //controlNavigation: 'none',
        navigateByClick: true,
        arrowsNav: true,
        sliderDrag: true,
        sliderTouch: true,
        numImagesToPreload:2,
        arrowsNavHideOnTouch: true,
        keyboardNavEnabled: true,
        fadeinLoadedSlide: true,
        globalCaptionInside: false,
        transitionSpeed: 300,
        //imageScaleMode: 'fill',
        video: {
            autoHideControlNav:false,
            autoHideBlocks: true,
            youTubeCode: '<iframe src="https://www.youtube.com/embed/%id%?rel=1&autoplay=1&showinfo=0" frameborder="no" allowFullscreen></iframe>'
        } 
    });
}



document.querySelectorAll("[data-block='gallery']")?.forEach(gallery => {
    gallery?.querySelectorAll('.tile')?.forEach(tile => {
        tile?.addEventListener('click', royalSliderOpen)
    })
})


document.querySelector('.royalSlider__container .close__container')?.addEventListener('click', royalSliderClose)



document.onload = createRoyalSlider()