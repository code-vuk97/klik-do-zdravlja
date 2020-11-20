// function calculateBMI() {
//     // var tezina = Number(document.getElementsByClassName("weight").value);
//     // var visina = Number(document.getElementsByClassName("height").value);
//     // var godine = Number(document.getElementsByClassName("ages").value);

//     // if (tezina > 0 && visina > 0) {
//     //     var finalBmi = tezina / ((visina / 100 )* (visina / 100));
//     //     document.getElementsByName("result").innerHTML="Vaš BMI je:" + finalBMI;
//     //     if (finalBmi < 18.5) {
//     //         document.getElementsByName("comment").innerHTML = "Vaš BMI je prenizak. Potražite recepte za kalorične, ali zdrave obroke na našem sajtu"
//     //     }
//     //     if (finalBmi > 18.5 && finalBmi < 25) {
//     //         document.getElementsByName("comment").innerHTML  = "Vaš BMI je idealan! Pratite naše recepte da tako i ostane!"
//     //     }
//     //     if (finalBmi > 25) {
//     //         document.getElementsByName("comment").innerHTML  = "Vaš BMI je previsok. U borbi protiv kilograma pomoćiće vam recešti na našem sajtu!"
//     //     }
//     // } else {
//     //     alert("Podaci nisu ispravno uneti");
//     // }


// }

function calculateBMI() {
    var visina = document.getElementById("height").value;
    var tezina = document.getElementById("weight").value;
    var bmi = tezina / (visina / 100 * visina / 100);
    var bmio = (bmi.toFixed(2));

    document.getElementById("result").value = bmio;
}

function resetuj() {
    document.getElementById("forma").reset();
}