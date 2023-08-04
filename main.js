let questionList = document.querySelectorAll(".faq-questions li");
for (let index = 0; index < questionList.length; index++) {
  questionList[index].addEventListener("click", (e) => {
    let clickedList;
    if (e.target.classList.contains("question-container")) {
      clickedList = e.target.parentElement;
    } else {
      clickedList = e.target.parentElement.parentElement;
    }
    clickedList.classList.toggle("showAnswer");
  });
}
