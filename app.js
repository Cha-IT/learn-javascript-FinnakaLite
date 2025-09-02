// Variables Oppgave 1
let usrname = "Stranger";
// Variables Oppgave 2
let tallEn = 0;
let tallTo = 0;
let birthDate = null;

function oppgaveEn() {
    // Tar inn navnet, og lager en pop up med hei navnet
    usrname = prompt("Hva er navnet ditt?");
    alert("Hei " + usrname);
}

function oppgaveTo() {
    //Her må jeg bruke "Number" siden prompt gir alltid en string tilbake.
    tallEn = Number(prompt("Vennligst velg tall nr 1!"))
    tallTo = Number(prompt("Vennligst velg tall nr 2!"))
    //Med denne første linjen sjekker jeg at både tallEn og tallTo IKKE er "falsy" hvis brukeren setter in en string istedenfor kun number, så blir det til en NAN som er falsy.
    if (tallEn && tallTo) {
        alert(`Her er tallene dine regnet om!
        ${tallEn} + ${tallTo} = ${tallEn + tallTo}
        ${tallEn} - ${tallTo} = ${tallEn - tallTo}
        ${tallEn} x ${tallTo} = ${tallEn * tallTo}
        ${tallEn} / ${tallTo} = ${tallEn / tallTo}`);
    } else {
        alert("Error: Husk å kun bruke tall i input boksen! Vennligst prøv igjen.")
    }
}

function oppgaveTre() {
    //Tar dato fra kalenderen
    birthDate = Date.parse(document.getElementById("oppgaveTreDate").value);

    // 5.68e+11 representerer 18 år i millisekunder.
    if (birthDate + 5.68e+11 < Date.now()) {
        alert("Du får kjøpe øl!")
    } else if (birthDate + 5.68e+11 > Date.now()) {
        alert("Du får IKKE kjøpe øl :(")
    } else {
        alert("Husk å velge en dato før du trykker på submit!")
    }
}