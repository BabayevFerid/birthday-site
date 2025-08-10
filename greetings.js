document.addEventListener("DOMContentLoaded", () => {
  const rihannaAudio = document.getElementById("rihannaAudio");
  const mbappeAudio = document.getElementById("mbappeAudio");
  const rihannaSubtitle = document.getElementById("rihannaSubtitle");
  const mbappeSubtitle = document.getElementById("mbappeSubtitle");

  document.getElementById("playRihanna").onclick = () => {
    rihannaAudio.play();
    rihannaSubtitle.textContent = "Happy birthday to you, Zeynəb!";
    rihannaAudio.onended = () => {
      rihannaSubtitle.textContent = "";
    };
  };

  document.getElementById("playMbappe").onclick = () => {
    mbappeAudio.play();
    mbappeSubtitle.textContent = "Ad günün mübarək, qalib!";
    mbappeAudio.onended = () => {
      mbappeSubtitle.textContent = "";
    };
  };
});
