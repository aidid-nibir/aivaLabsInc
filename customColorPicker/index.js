window.addEventListener("load", () => {
    const colorItems = document.querySelectorAll('.color-item');
    const HovercolorItems = document.querySelectorAll('.hover-color-item');

    colorItems.forEach(item => {
        item.addEventListener('click', function () {
            const idSelected = this.id;
            document.body.classList = idSelected;
            document.getElementById('square').style.backgroundColor = idSelected;
        })
    })

    HovercolorItems.forEach(item => {
        item.addEventListener('click', function () {
            const hoverIdSelected = this.id;
            document.getElementById('square').onmouseover = function () {
                document.body.classList = hoverIdSelected;
                this.style.backgroundColor = hoverIdSelected;
            };
        })
    })

})