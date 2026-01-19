let saldo = 930.00;

const prijzen = {
  aandelen: {
    TechCorp: 220.00,
    GreenCoin: 95.00
  },
  crypto: {
    BitPlus: 0.45,
    GreenCoin: 0.30
  }
};

document.addEventListener("DOMContentLoaded", () => {
  updateProducten();
  document.getElementById("categorie").addEventListener("change", updateProducten);
});

function updateProducten() {
  const categorie = document.getElementById("categorie").value;
  const productSelect = document.getElementById("product");

  productSelect.innerHTML = "";

  for (let product in prijzen[categorie]) {
    const optie = document.createElement("option");
    optie.value = product;
    optie.textContent = product;
    productSelect.appendChild(optie);
  }

  updatePrijs();
}

function updatePrijs() {
  const categorie = document.getElementById("categorie").value;
  const product = document.getElementById("product").value;
  const prijs = prijzen[categorie][product];

  document.getElementById("prijs").textContent = prijs.toFixed(2);
}

function BeleggingDoen() {
  const bedrag = parseFloat(document.getElementById("bedrag").value);
  const product = document.getElementById("product").value;
  const melding = document.getElementById("message");
  const investering = document.getElementById("investering");

  if (!bedrag || bedrag <= 0) {
    melding.textContent = "Vul een geldig bedrag in.";
    investering.textContent = "";
    return;
  }

  if (bedrag > saldo) {
    melding.textContent = "Onvoldoende saldo.";
    investering.textContent = "";
    return;
  }

  saldo -= bedrag;
  document.getElementById("saldo").textContent = saldo.toFixed(2);

  melding.textContent = "Investering succesvol!";
  melding.classList.add("succes");
  investering.textContent = `Je hebt €${bedrag.toFixed(2)} geïnvesteerd in ${product}.`;
}