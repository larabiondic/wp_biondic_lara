/* let broj1 = prompt ("Unesi prvi broj");
let broj2 = prompt ("Unesi drugi broj");
if(broj1 > broj2)
{
    alert (broj1 + "je veći od" + broj2);
}
else if(broj1 < broj2)
{
    alert (broj2 + "je veći od" + broj1);
}
else 
{
    alert ("Brojevi su jednaki");
} */

    BMI App 

        BMI = masa (kg) / visina*visina (m)
        -unijeti masu i visinu 
        - ispisati bmi (vaš BMI iznosti: xx )
        )


let tezina = prompt("Unesi svoju težinu u kg:");
let visina = prompt("Unesi svoju visinu u metrima:");
let bmi = tezina / (visina * visina);

alert("Vaš BMI iznosi: " + bmi.toFixed(2));