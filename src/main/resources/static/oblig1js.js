
let billettListe = [];
function addBillett() {
    if (checkInput()) {
        let billett = {
            film: document.getElementById('filmNames').value,
            antall: document.getElementById('antall').value,
            fornavn: document.getElementById('fornavn').value,
            etternavn: document.getElementById('etternavn').value,
            telefonnr: document.getElementById('telefonnr').value,
            epost: document.getElementById('epost').value
        };
        billettListe.push(billett);
        listBilletter();
        resetForm();
    }
}
function checkInput() {
    let isValid = true;
    let film = document.getElementById("filmNames").value;
    let filmAdv = document.getElementById("filmAdv"); // Uyarı mesajını göstermek için bir element id'si
    if (film === "") {
        filmAdv.innerText = "Vennligst velg en film fra listen";
        filmAdv.style.display = "inline-block";
        isValid = false;
    } else {
        filmAdv.style.display = "none";
    }
    let antall = document.getElementById('antall').value;
    let antallAdv = document.getElementById("antallAdv");
    if (parseInt(antall) < 1 || isNaN(parseInt(antall))) {
        antallAdv.innerText = "Må skrive noe antall";
        antallAdv.style.display = "inline-block";
        isValid = false;
    } else {
        antallAdv.style.display = "none";
    }
    let fornavn = document.getElementById("fornavn").value;
    let fornavnAdv = document.getElementById("fornavnAdv");
    if (!/^[a-zA-ZæøåÆØÅ\s]+$/.test(fornavn) || fornavn.length < 2) {
        fornavnAdv.innerText = "Fornavn er ikke gyldig";
        fornavnAdv.style.display = "inline-block";
        isValid = false;
    } else {
        fornavnAdv.style.display = "none";
    }
    let etternavn = document.getElementById("etternavn").value;
    let etternavnAdv = document.getElementById("etternavnAdv");
    if (!/^[a-zA-ZæøåÆØÅ\s]+$/.test(etternavn) || etternavn.length < 2) {
        etternavnAdv.innerText = "Etternavn er ikke gyldig";
        etternavnAdv.style.display = "inline-block";
        isValid = false;
    } else {
        etternavnAdv.style.display = "none";
    }
    let telefonnr = document.getElementById("telefonnr").value;
    let telAdv = document.getElementById("telAdv");
    if (!/^\d{8}$/.test(telefonnr)) {
        telAdv.innerText = "Vennligst skriv inn et gyldig telefonnummer med 8 siffer";
        telAdv.style.display = "inline-block";
        isValid = false;
    } else {
        telAdv.style.display = "none";
    }
    let epost = document.getElementById("epost").value;
    let epostAdv = document.getElementById("epostAdv");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(epost)) {
        epostAdv.innerText = "Vennligst skriv inn en gyldig e-postadresse (f.eks. bruker@eksempel.no)";
        epostAdv.style.display = "inline-block";
        isValid = false;
    } else {
        epostAdv.style.display = "none";
    }

    return isValid;
}
function resetForm() {
    document.getElementById('billettForm').reset();
    let warnings = document.querySelectorAll('.validation-error');
    warnings.forEach(function(warning) {
        warning.style.display = 'none';
    });
}
function listBilletter() {
    let alleBilletterDiv = document.getElementById('alleBilletter');
    alleBilletterDiv.innerHTML = '';
    billettListe.forEach(function(billett) {
        alleBilletterDiv.innerHTML += "<th>"+billett.film+"</th>"+
            "<th>"+billett.antall+"</th>"+
            "<th>"+billett.fornavn+"</th>"+
            "<th>"+billett.etternavn+"</th>"+
            "<th>"+billett.telefonnr+"</th>"+
            "<th>"+billett.epost+"</th>";
    });

}

function slettAlleBilletter() {
    billettListe = [];
    listBilletter();
}