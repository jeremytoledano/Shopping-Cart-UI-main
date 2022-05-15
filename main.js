function update(product, operator){
    var value = parseInt( document.getElementById(product).innerHTML );
    if (operator == "+")
        value++;
    else if (operator == "-" && value >0)
        value --;
    
    document.getElementById(product).innerHTML = value;
}

function addCookie(){
    const d = new Date();
    d.setTime(d.getTime() + (7*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    var apple = document.getElementById('apple').innerHTML;
    var grape = document.getElementById('grape').innerHTML;
    document.cookie = "apple =" + apple + ";" + expires + ";path=/";
    document.cookie = "grape =" + grape + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
    }