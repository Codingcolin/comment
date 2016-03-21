function greeting() {
	var newLi = document.createElement('li')
	var newH2 = document.createElement('h2')
	var text = document.createTextNode(document.getElementById("comment").value)
	var input = document.createTextNode(document.getElementById("username").value)
	newLi.appendChild(text)
	newH2.appendChild(input)
	document.getElementById('toDoList').appendChild(newH2)
	document.getElementById('toDoList').appendChild(newLi)
	console.log(newLi)

}
