let entryPrice = 0;

// Function to select a cryptocurrency and fetch live price
async function selectCrypto(cryptoId, symbol) {
    const entryPriceField = document.getElementById("entry-price");
    entryPriceField.innerText = "Fetching...";

    // Use a CORS proxy to bypass restrictions
    const proxyUrl = "https://api.allorigins.win/get?url=";
    const apiUrl = `https://api.coingecko.com/api/v3/simple/price?ids=${cryptoId}&vs_currencies=usd`;
    const url = `${proxyUrl}${encodeURIComponent(apiUrl)}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const parsedData = JSON.parse(data.contents); // Parse the data inside 'data.contents' for allorigins proxy

        entryPrice = parsedData[cryptoId]?.usd;
        
        if (entryPrice) {
            entryPriceField.innerText = `$${entryPrice.toFixed(2)} USD`;
        } else {
            entryPriceField.innerText = "Price not available";
        }
    } catch (error) {
        entryPriceField.innerText = "Error fetching price";
        console.error("Error fetching live price:", error);
    }
}

// Function to calculate stop-loss price
function calculateStopLoss() {
    const tradeAmount = parseFloat(document.getElementById("trade-amount").value);
    const portfolioSize = parseFloat(document.getElementById("portfolio-size").value);
    const riskPercentage = parseFloat(document.getElementById("risk-percentage").value) / 100;
    const leverage = parseFloat(document.getElementById("leverage").value);

    if (isNaN(entryPrice) || isNaN(tradeAmount) || isNaN(portfolioSize) || isNaN(riskPercentage) || isNaN(leverage)) {
        alert("Please fill in all fields correctly.");
        return;
    }

    const riskAmount = portfolioSize * riskPercentage;
    const stopLossPrice = entryPrice - (riskAmount / (tradeAmount * leverage));

    document.getElementById("stop-loss-result").innerText = `Stop-Loss Price: $${stopLossPrice.toFixed(2)}`;
}
