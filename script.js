document.getElementById("bidder1-label").innerText = "Bidder 1";
document.getElementById("bidder2-label").innerText = "Bidder 2";

document.querySelectorAll(".bid-input").forEach(input => {
    input.addEventListener("input", () => {
        const bidder1Bid = parseFloat(document.getElementById("bidder1").value) || 0;
        const bidder2Bid = parseFloat(document.getElementById("bidder2").value) || 0;
        
        if (bidder1Bid > bidder2Bid) {
            document.getElementById("result").innerText = "Bidder 1 is leading";
        } else if (bidder2Bid > bidder1Bid) {
            document.getElementById("result").innerText = "Bidder 2 is leading";
        } else {
            document.getElementById("result").innerText = "It's a tie";
        }
    });
});
