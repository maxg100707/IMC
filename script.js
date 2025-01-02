var pes = document.getElementById("pes");
var alt = document.getElementById("alt");
var res = document.getElementById("res");
var imc = 0;

function calcular() {
  if (Number(pes.value) == 0 || Number(alt.value) == 0) {
    alert("preencha todos os campos");
  } else {
    var peso = Number(pes.value);
    var altura = Number(alt.value);

    imc = peso / (altura * altura);

    if (imc < 18.5) {
      res.innerHTML = `O seu IMC é de ${imc} e voce esta abaixo do peso ideal.`;
      pes.value = "";
      alt.value = "";
      alt.focus();
    } else if (imc >= 18.5 && imc < 24.9) {
      res.innerHTML = `O seu IMC é de ${imc} e voce esta no peso ideal.`;
      pes.value = "";
      alt.value = "";
      alt.focus();
    } else if (imc >= 24.9 && imc < 29.9) {
      res.innerHTML = `O seu IMC é de ${imc} e voce esta com sobrepeso.`;
      pes.value = "";
      alt.value = "";
      alt.focus();
    } else if (imc >= 29.9 && imc < 34.9) {
      res.innerHTML = `O seu IMC é de ${imc} e voce esta com obesidade de nivel I.`;
      pes.value = "";
      alt.value = "";
      alt.focus();
    } else if (imc >= 34.9 && imc < 39.9) {
      res.innerHTML = `O seu IMC é de ${imc} e voce esta com obesidade de nivel II.`;
      pes.value = "";
      alt.value = "";
      alt.focus();
    } else {
      res.innerHTML = `O seu IMC é de ${imc} e voce esta com obesidade de nivel III.`;
      pes.value = "";
      alt.value = "";
      alt.focus();
    }
  }
}
