const questions = document.querySelectorAll(".question-block");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const icon = question.querySelector("#icon");
    if (icon) {
      icon.classList.toggle("question-minus");
      icon.classList.toggle("question-plus");
    }
    let content = question.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      document.querySelectorAll(".answer-block").forEach((answer) => {
        answer.style.maxHeight = null;
      });
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});

