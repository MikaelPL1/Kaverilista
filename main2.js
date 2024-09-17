
const btnsubmit = document.getElementById("btnsubmit");
const btnpoista = document.getElementById("btnpoista");
const btnsort = document.getElementById("btnsort");
const kaverit = document.getElementById("kaverit");
const kenttä = document.getElementById("kenttä");

let kaverit1 = [];


btnsubmit.onclick = function() {
    const kaveri = kenttä.value.trim();
    
    if (kaveri !== "" && isNaN(kaveri)) {
        kaverit1.push(kaveri);  
        päivitäLista();  
        kenttä.value = "";  
    }
};

btnpoista.onclick = function() {
    const poisto = kenttä.value.trim();
    
    if (poisto !== "") {
        const index = kaverit1.indexOf(poisto);  
        if (index !== -1) {
            kaverit1.splice(index, 1);  
        }
        päivitäLista();  
        kenttä.value = "";  
    }
};

btnsort.onclick = function() {
    kaverit1.sort();  
    päivitäLista();  
};

function päivitäLista() {
    kaverit.innerHTML = "";  

    for (let i = 0; i < kaverit1.length; i++) {
        kaverit.innerHTML += (i + 1) + ". " + kaverit1[i] + "<br>";  
    }
}


