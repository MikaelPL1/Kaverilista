
const btnsubmit = document.getElementById("btnsubmit");
const kaverit = document.getElementById("kaverit");

let kaverit1 = [];


btnsubmit.onclick = function() {
    kaverit1 = [];  

    for (let luku = 0; luku < 10; luku++) {
        let kaveri = "";
        
        while (kaveri === "" || kaveri === null || !isNaN(kaveri)) {
            kaveri = window.prompt("Anna kaverin nimi: Ei saa olla tyhjä tai numero.");
        }
    
        kaverit1.push(kaveri);  
    }

    kaverit.innerHTML = "";  

    for (let i = 0; i < kaverit1.length; i++) {
        kaverit.innerHTML += (i + 1) + ". " + kaverit1[i] + "<br>";  
    }
};



