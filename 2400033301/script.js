function addRecommendation() {
  let recInput = document.getElementById("new-rec").value.trim();
  if (recInput !== "") {
    let recList = document.getElementById("rec-list");
    let li = document.createElement("li");
    li.textContent = recInput;
    recList.appendChild(li);
    document.getElementById("new-rec").value = "";
    alert("Thank you for your recommendation!");
  } else {
    alert("Please write something before submitting.");
  }
}
