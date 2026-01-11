const transactions = [
  { id: 1, type: 'inkomend', datum: '01-01-2026', bedrag: 150.00, omschrijving: 'Cadeau' },
  { id: 2, type: 'uitgaand', datum: '03-11-2025', bedrag: 50.00, omschrijving: 'Boodschappen' },
  { id: 3, type: 'inkomend', datum: '06-11-2025', bedrag: 200.00, omschrijving: 'Salaris' },
  { id: 4, type: 'uitgaand', datum: '10-11-2025', bedrag: -30.00, omschrijving: 'Abonnement' },
  { id: 5, type: 'inkomend', datum: '12-11-2025', bedrag: 75.00, omschrijving: 'Verkoop spullen' },
  { id: 6, type: 'uitgaand', datum: '15-11-2025', bedrag: -100.00, omschrijving: 'Restaurant' }
];

function displayTransactions(filteredTransactions) {
    const transactionList = document.getElementById('transaction-list');
    transactionList.innerHTML = '';

    if (filteredTransactions.length === 0) {
        transactionList.innerHTML = '<p class="no-results">Geen transacties gevonden</p>';
        return;
    }

    filteredTransactions.forEach(transaction => {
        const transactionItem = document.createElement('div');
        transactionItem.classList.add('transaction');
        const typeClass = transaction.type === 'inkomend' ? 'inkomend' : 'uitgaand';
        const bedragKleur = transaction.bedrag >= 0 ? 'positief' : 'negatief';
        transactionItem.innerHTML = `
            <div class="transaction-header">
                <span class="datum">${transaction.datum}</span>
                <span class="omschrijving">${transaction.omschrijving}</span>
                <span class="bedrag ${bedragKleur}">€${transaction.bedrag.toFixed(2)}</span>
            </div>
            <div class="transaction-type ${typeClass}">${transaction.type}</div>
        `;
        transactionList.appendChild(transactionItem);
    });

    const totaal = filteredTransactions.reduce((sum, t) => sum + t.bedrag, 0);
    const totaalDiv = document.createElement('div');
    totaalDiv.classList.add('totaal');
    const totaalKleur = totaal >= 0 ? 'positief' : 'negatief';
    totaalDiv.innerHTML = `<strong>Totaal</strong> <span class="${totaalKleur}">€${totaal.toFixed(2)}</span>`;
    transactionList.appendChild(totaalDiv);
}

displayTransactions(transactions);

function filterTransactions() {
    const filterType = document.getElementById('filter-type').value;
    const filterDatum = document.getElementById('filter-datum').value;

    let filteredTransactions = transactions;

    if (filterType !== 'alle') {
        filteredTransactions = filteredTransactions.filter(transaction => transaction.type === filterType);
    }

    if (filterDatum) {
        const [year, month, day] = filterDatum.split('-');
        const formattedDatum = `${day}-${month}-${year}`;

        filteredTransactions = filteredTransactions.filter(transaction => transaction.datum === formattedDatum);
    }

    displayTransactions(filteredTransactions);
}

function resetFilters() {
    document.getElementById('filter-type').value = 'alle';
    document.getElementById('filter-datum').value = '';
    displayTransactions(transactions);
}