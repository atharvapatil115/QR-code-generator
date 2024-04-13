const image_box = document.querySelector(".image")
const image = document.querySelector(".QR_img");
const Textimp = document.getElementById("Textimp");
const callButton = document.getElementById("QR_btn");
const container = document.querySelector(".container");
const downloadBtn = document.querySelector("#downloadButton");


function GenerateQR(Textimpvalue) {

    if (Textimp.value != "") {
        image.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data= ${Textimp.value}`
        image_box.classList.add("showImg");
        container.classList.add("after");
    }
    else {
        alert("!! Input field cannot be empty !!");
    }
};

function downloadQR() {

    const downloadLink = document.createElement('a');
    downloadLink.href = image.src;
    downloadLink.download = '${Text.imp}.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}



callButton.addEventListener("click", () => {
    console.log("QR generated");
    console.log("element : ", Textimp.value);
    GenerateQR(Textimp.value);
})
downloadBtn.addEventListener("click",()=>{
    downloadQR();
})

