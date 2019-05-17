function showAll() {
    const circles = document.querySelectorAll("#circles");
    const colorchangebutton = document.getElementById("colorchangebutton")

    if (circles[3].classList.contains('hover')) {
        for (let i = 0; i < circles.length; i++) {
            colorchangebutton.textContent = "Show All";
            circles[i].classList.remove('hover');
        }
    } else {
        for (let i = 0; i < circles.length; i++) {
            colorchangebutton.textContent = "Hide All";
            circles[i].classList.add('hover')
        }
    }


}
