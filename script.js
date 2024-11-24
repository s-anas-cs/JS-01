function calculateTax() {
    // Get values from the input fields
    const income = parseFloat(document.getElementById('income').value);
    const taxRate = parseFloat(document.getElementById('taxRate').value);

    if (isNaN(income) || income <= 0) {
        alert('Please enter a valid income.');
        return;
    }

    // Calculate tax amount
    const taxAmount = (income * taxRate) / 100;

    // Calculate net income
    const netIncome = income - taxAmount;

    // Display the results
    document.getElementById('taxAmount').textContent = taxAmount.toFixed(2);
    document.getElementById('netIncome').textContent = netIncome.toFixed(2);
}
