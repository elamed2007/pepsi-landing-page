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

function loadStyle() {

    if (localStorage.style !== null) {
        const style = JSON.parse(localStorage.style);

        styletag = document.createElement("style")

        console.log(style.bgcolor)

        styletag.textContent = `
                    body{
                        background-color: ${style.bgcolor}
                    }
                    body *{
                        color: ${style.fontColor}
                    
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