function submitbtn(){
    let userinput = document.querySelector("#inputuser").value;
    let userpass = document.querySelector("#inputpass").value;

    if(userinput != ""  && userpass != ""){
        document.querySelector("#inputBox").innerHTML = "Username : " + " " + userinput;
        document.querySelector("#passBox").innerHTML = "Passworld : " + " " + userpass;

        document.querySelector("#inputuser").value = "";
        document.querySelector("#inputpass").value = "";
    }

    else{
        alert("Please Enter Valid Input");
    }
}