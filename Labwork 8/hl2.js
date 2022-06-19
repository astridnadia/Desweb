document.getElementById("button").addEventListener("click", function() {
  [].forEach.call(document.querySelectorAll("span"), p => {
    p.classList.toggle("highlight");
  });
  this.innerHTML = (this.innerHTML === "Highlight Paragraf") ? "Unhighlight Paragraf" : "Highlight Paragraf";
})