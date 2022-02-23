function handleClickCheck() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    submitOK = "true";

    if (email == '' && password == '') {
        document.getElementById('email').style.border = '0.2vw solid #DD4A48'
        document.getElementById('password').style.border = '0.2vw solid #DD4A48'
        submitOK = "false";
    } 
    
    if (email == '' && password != '') {
        document.getElementById('email').style.border = '0.2vw solid #DD4A48'
        document.getElementById('password').style.border = '0.2vw solid rgb(63 133 26)'
        submitOK = "false";
    } 

    if (email != '' && password == '') {
        document.getElementById('email').style.border = '0.2vw solid rgb(63 133 26)'
        document.getElementById('password').style.border = '0.2vw solid #DD4A48'
        submitOK = "false";
    } 

    if (email != '' && password != '') {
        document.getElementById('email').style.border = '0.2vw solid rgb(63 133 26)'
        document.getElementById('password').style.border = '0.2vw solid rgb(63 133 26)'
        submitOK = "true";
    }

    if (submitOK == "false") {
        return false;
    }
}

