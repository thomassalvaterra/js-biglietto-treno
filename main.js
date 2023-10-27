const km = parseInt( prompt( "Quanti km vuoi percorrere?" ) );
// console.log("chilometri", km);
const eta = parseInt( prompt( "Quanti anni hai?" ) );
// console.log("età: ", eta);
const element = document.getElementById("message");




// Se età e distanza sono numerici
if( Number.isFinite(eta) && Number.isFinite(km) ){
    let costo = km * 0.21;
    console.log("Costo iniziale: ", costo);
    // console.log("ESEGUO IL CODICE");
    // let message;
    let message = "";

    // sconto under 18
    if(eta < 18){
        

        // let scontistica = (costo / 100) * 20;
        // costo = costo - scontistica;

        // let scontistica = costo * 0.20;
        // costo = costo - scontistica;
        
        costo = costo * 0.8;

        // const message = `Hai diritto allo sconto Under. Costo biglietto: ${costo} $`;
        // document.getElementById("message").innerHTML = message;

        // message = `Hai diritto allo sconto Over. Costo biglietto: ${costo} $`;

        message = `Hai diritto allo sconto Under. `;

     // sconto over 65
    }else if (eta >= 65){
        costo = costo * 0.6;
        
        // const message = `Hai diritto allo sconto Over. Costo biglietto: ${costo} $`;
        // document.getElementById("message").innerHTML = message;

        // message = `Hai diritto allo sconto Under. Costo biglietto: ${costo} $`;

        message = `Hai diritto allo sconto Under. `;

        // console.log("Costo con scontistica: ", costo);
    }
    // Nessuno sconto
    // }else {

    //     const message = `Costo biglietto: ${costo} $`;
    //     document.getElementById("message").innerHTML = message;

    // }

    //Dopo if/else dell'età
    message += `Costo biglietto: ${costo} $`;
    element.innerHTML = message;

   
}else {
    element.innerHTML = "Errore: i dati inseriti non sono numerici";
    // console.log("ERRORE");
}