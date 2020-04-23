function bishBosh(times, bish, bosh){
    let outputString = "";
    for(let i = 1; i <= times; i++){
        if(((i % bish) === 0) && ((i % bosh) === 0)){
            outputString += " Bish-Bosh​ ";
        }
        else if((i % bish) === 0 ){
            outputString += " Bish ";
        }else if((i % bosh) === 0){
            outputString += " Bosh ";
        }else {
            outputString += ` ${i} `;
        }

    }
    return outputString;
}

let startButton = document.getElementById("start");

startButton.addEventListener("click", function(){
    let WrongElement1 = document.getElementById("times-input-wrong");
    WrongElement1.classList.add("d-none");
    let WrongElement2 = document.getElementById("bish-input-wrong");
    WrongElement2.classList.add("d-none");
    let WrongElement3 = document.getElementById("bosh-input-wrong");
    WrongElement3.classList.add("d-none");

    let times = document.getElementById("times").value;
    let bish = document.getElementById("bish").value;
    let bosh = document.getElementById("bosh").value;

    let outputString = bishBosh(times, bish, bosh);
    let inputValid = true;

    if(times <= 0){
        let WrongElement = document.getElementById("times-input-wrong");
        WrongElement.classList.remove("d-none");
        inputValid = false;
    }
    if(bish <= 0) {
        let WrongElement = document.getElementById("bish-input-wrong");
        WrongElement.classList.remove("d-none");
        inputValid = false;
    }
    if(bosh <= 0) {
        let WrongElement = document.getElementById("bosh-input-wrong");
        WrongElement.classList.remove("d-none");
        inputValid = false;
    }
    
    if(inputValid){
        document.getElementById("results").textContent = outputString;
    }


    
});
