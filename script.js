let etapaAtual = 1;
const totalEtapas = 5;

function avancarEtapa() {
  document.getElementById("etapa" + etapaAtual).classList.add("hidden");
  etapaAtual++;
  if (etapaAtual <= totalEtapas) {
    document.getElementById("etapa" + etapaAtual).classList.remove("hidden");
  } else {
    alert("Processo concluído! O lixo virou energia e ajudou a plantação 🌱");
    etapaAtual = 1;
    document.getElementById("etapa1").classList.remove("hidden");
  }
}

let residuos = 0;
let biogas = 0;
let energia = 0;
let plantas = 0;

function coletarResiduos() {
  residuos += 1;
  document.getElementById("residuos").innerText = "Resíduos: " + residuos;
}

function fermentar() {
  if (residuos > 0) {
    residuos -= 1;
    biogas += 1;
    document.getElementById("residuos").innerText = "Resíduos: " + residuos;
    document.getElementById("biogas").innerText = "Biogás: " + biogas;
    alert("Resíduo fermentado → biogás produzido!");
  } else {
    alert("Adicione resíduos primeiro!");
  }
}

function gerarEnergia() {
  if (biogas > 0) {
    biogas -= 1;
    energia += 10; 
    document.getElementById("biogas").innerText = "Biogás: " + biogas;
    document.getElementById("energia").innerText = "Energia: " + energia;
    alert("Biogás transformado em energia limpa!");
  } else {
    alert("Você precisa fermentar resíduos para gerar biogás!");
  }
}

function irrigar() {
  if (energia >= 10) {
    energia -= 10;
    plantas += 1;
    document.getElementById("energia").innerText = "Energia: " + energia;
    document.getElementById("plantas").innerText = "Plantas saudáveis: " + plantas;
    alert("Energia usada para irrigar → planta cresceu!");
  } else {
    alert("Você precisa de mais energia para irrigar!");
  }
}
