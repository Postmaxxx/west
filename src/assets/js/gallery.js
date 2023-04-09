/*const allCategories = document.querySelectorAll("[data-block='gallery']")?.querySelectorAll('.tile')







allCategories?.forEach(tile => {
    tile.addEventListener('click', handleClick)
})
*/
const handleClick = (e) => {
    console.log(e.currentTarget.dataset.type || 'none');
}


document.querySelectorAll("[data-block='gallery']")?.forEach(gallery => {
    gallery?.querySelectorAll('.tile')?.forEach(tile => {
        tile?.addEventListener('click', handleClick)
    })
})
