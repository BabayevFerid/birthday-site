document.addEventListener("DOMContentLoaded", () => {
  const candles = document.querySelectorAll("#candles span");
  const wishMessage = document.getElementById("wishMessage");
  let blownCount = 0;

  candles.forEach((candle) => {
    candle.addEventListener("click", () => {
      if (!candle.classList.contains("blowed")) {
        candle.classList.add("blowed");
        blownCount++;
      }
      if (blownCount === candles.length) {
        wishMessage.style.display = "block";
        wishMessage.textContent = "Ad günün mübarək, Zeynəb! 🎉";
      }
    });
  });
});
