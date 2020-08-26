function createList() {
  var x = document.taskBox.words.value;

  var parent = document.getElementById("para1");

  var child = document.createElement("p");
  var text = document.createTextNode(x);
  child.appendChild(text);

  parent.appendChild(child);
}
