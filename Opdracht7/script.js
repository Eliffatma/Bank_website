const prijzen = {
  Bitcoin: 90000,
  Ethereum: 4800,
  Litecoin: 250
};

const investeringen = {
  Bitcoin: 0,
  Ethereum: 0,
  Litecoin: 0
};

function updateWeergave() {
  document.getElementById("btc").textContent =
    `Bitcoin: €${investeringen.Bitcoin.toFixed(2)} (${prijzen.Bitcoin} per eenheid)`;

  document.getElementById("eth").textContent =
    `Ethereum: €${investeringen.Ethereum.toFixed(2)} (${prijzen.Ethereum} per eenheid)`;

  document.getElementById("ltc").textContent =
    `Litecoin: €${investeringen.Litecoin.toFixed(2)} (${prijzen.Litecoin} per eenheid)`;
}

function getBedrag() {
  const waarde = document.getElementById("amount").value;
  const bedrag = parseFloat(waarde);

  if (!waarde || bedrag <= 0) {
    document.getElementById("investering").textContent =
      "Vul een geldig bedrag in.";
    return null;
  }

  return bedrag;
}

function koop() {
  const crypto = document.getElementById("crypto").value;
  const bedrag = getBedrag();

  if (bedrag === null) return;

  investeringen[crypto] += bedrag;
  updateWeergave();

  document.getElementById("investering").textContent =
    `Je hebt €${bedrag.toFixed(2)} in ${crypto} geïnvesteerd.`;
}

function verkoop() {
  const crypto = document.getElementById("crypto").value;
  const bedrag = getBedrag();

  if (bedrag === null) return;

  investeringen[crypto] -= bedrag;

  if (investeringen[crypto] < 0) investeringen[crypto] = 0;

  updateWeergave();

  document.getElementById("investering").textContent =
    `Je hebt €${bedrag.toFixed(2)} aan ${crypto} verkocht.`;
}

updateWeergave();