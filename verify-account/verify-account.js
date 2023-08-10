const codes = document.querySelectorAll(".code");

codes[0].focus();
//input'lar içerisinde enter'a basınca diğer input'a geçme - input'lar arası gezinme
codes.forEach((code, idx) => {
  code.addEventListener("keydown", (e) => {
    if (e.key >= 0 && e.key <= 9) {
      codes[idx].value = ``;
      setTimeout(() => codes[idx + 1].focus(), 10);
      //input değerlerini silerken bir önceki input'a geçme
    } else if (e.key === "Backspace") {
      setTimeout(() => codes[idx - 1].focus(), 10);
    }
  });
});
