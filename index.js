((d) => {
  let $expandbtn = d.querySelectorAll(".card-items span");

  $expandbtn.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      for (let i = 0; i < $expandbtn.length; i++) {
        if (index == i) {
          $expandbtn[i].parentElement.classList.toggle("expand");
        } else {
          $expandbtn[i].parentElement.classList.remove("expand");
        }
      }
    });
  });
})(document);
