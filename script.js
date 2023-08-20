const container=document.querySelector(".container")
const qrInput=document.querySelector("#input")
const generateQR=document.querySelector("button"),
        qrImg=document.querySelector(".qrcode img")

        generateQR.addEventListener("click",()=>{
            qrValue=qrInput.value
            // console.log(qrValue)
            if(!qrValue) return;
            // if(qrValue.length >=100) {
            //     alert("maximum charactor reached only 100 charactor")

            // }else{
                // generateQR.innerText="Generating QR....."
                // qrImg.src=`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`
            // }
            generateQR.innerText="Generating QR....."
            qrImg.src=`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`
            qrImg.addEventListener("load",()=>{
                container.classList.add("active")
                generateQR.innerText="Generated QR"
            })
        })
        qrInput.addEventListener("keyup",()=>{
            if(!qrInput.value){
                container.classList.remove('active')
                generateQR.innerText="Regenerate QR"
            }
        })
        console.log(qrImg)