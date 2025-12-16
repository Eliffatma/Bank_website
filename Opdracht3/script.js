function logout() {
    if (confirm('Weet je zeker dat je wilt uitloggen?')) {
        window.location.href = 'inloggen.html';
        }
}

function addAccount() {
    const accountNaam = prompt("Naam van de rekening:");
    if (!accountNaam) return;

    const startSaldo = prompt("Start saldo:");
    if (!startSaldo) return;

    const accountsLijst = document.getElementById("accounts");

    const listItem = document.createElement("li");
    listItem.innerHTML = `
        <span>${accountNaam}</span>
        <span>€${startSaldo}</span>
    `;

    accountsLijst.appendChild(listItem);
}