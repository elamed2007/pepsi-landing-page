//Save the selected can + colors to localStorage, then apply them
function SaveStyle(imgPepsi, bgcolor, fontColor) {

    const Style = {
        imgPepsi: imgPepsi,
        bgcolor: bgcolor,
        fontColor: fontColor
    };

    localStorage.style = JSON.stringify(Style);

    addActive(imgPepsi)

    loadStyle()

}

// Read saved style, build a <style> tag for body bg/text colors, re-add active class
function loadStyle() {

    if (localStorage.style) {
        const style = JSON.parse(localStorage.style);

        styletag = document.createElement("style")

        styletag.textContent = `
                    body{
                        background-color: ${style.bgcolor}
                    }
                    .description h2, .description p, .container nav ul li a{
                        color: ${style.fontColor}
                    }
                    
                `

        document.head.appendChild(styletag)

        document.getElementById(`${style.imgPepsi}`).classList.add("active")


    } else {
        const defaultStyle = {
            imgPepsi: "pepsi1",
            bgcolor: "#0063A3",
            fontColor: "#fff"
        };
    }
}

loadStyle()

//Toggle active so only the clicked Pepsi can is highlighted
function addActive(id) {
    imgsAllowed = ["pepsi1", "pepsi2", "pepsi1"];

    imgClicked = document.getElementById(id)
    const imgPepsi = document.querySelectorAll(`.pepsi-img img`)

    imgPepsi.forEach(e => {

        (imgClicked.id === e.id)
            ? e.classList.add("active")
            : e.classList.remove("active");
    });

}