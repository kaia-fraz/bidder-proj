// Grab elements
const form = document.getElementById("bid-form");
const bidder1Input = document.getElementById("bidder1");
const bidder2Input = document.getElementById("bidder2");
const bidder1Display = document.getElementById("bidder1-result");
const bidder2Display = document.getElementById("bidder2-result");
const resultSpan = document.getElementById("result");
const historyList = document.getElementById("bidhstry");

// Load bid history from localStorage when page loads
window.addEventListener("DOMContentLoaded", () => {
  const savedHistory = JSON.parse(localStorage.getItem("bidHistory")) || [];
  savedHistory.forEach(entry => addHistoryToDOM(entry));
});

// Handle form submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const bidder1Bid = parseFloat(bidder1Input.value) || 0;
  const bidder2Bid = parseFloat(bidder2Input.value) || 0;

  // Update current bid display
  bidder1Display.innerText = bidder1Bid.toFixed(2);
  bidder2Display.innerText = bidder2Bid.toFixed(2);

  // Show who is leading
  let resultText = "";
  if (bidder1Bid > bidder2Bid) {
    resultText = "Bidder 1 is leading";
  } else if (bidder2Bid > bidder1Bid) {
    resultText = "Bidder 2 is leading";
  } else {
    resultText = "It's a tie";
  }
  resultSpan.innerText = resultText;

  // Create history entry
  const entry = {
    bidder1: bidder1Bid.toFixed(2),
    bidder2: bidder2Bid.toFixed(2),
    result: resultText,
    time: new Date().toLocaleString()
  };

  // Save to localStorage
  const history = JSON.parse(localStorage.getItem("bidHistory")) || [];
  history.push(entry);
  localStorage.setItem("bidHistory", JSON.stringify(history));

  // Add to page
  addHistoryToDOM(entry);

  // Reset form inputs
  form.reset();
});

// Helper function: add one history entry to the page
function addHistoryToDOM(entry) {
  const li = document.createElement("li");
  li.textContent = `${entry.time} - Bidder 1: $${entry.bidder1}, Bidder 2: $${entry.bidder2} → ${entry.result}`;
  historyList.appendChild(li);
}
