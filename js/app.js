function calculate(){
    let textbox1 = document.getElementById("textbox1");
    let textbox2 = document.getElementById("textbox2");

    let love = Math.round(Math.random()*100);

    let doc = document.getElementById("displaypercent");

    if(textbox1.value != "" && textbox2.value != ""){

        doc.value = love+"%";

        event.preventDefault();
    }


}