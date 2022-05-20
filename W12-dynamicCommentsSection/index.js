function createEnclosingDiv() {
	let enclosingDiv = document.createElement("div");
    enclosingDiv.classList.add("comment");
	return enclosingDiv;
}


// In the createAvatar() function body, after the <span> element is created, 
// set the innerText value of the <span> element stored in newAvatar. 
// Your code should set the innerText property to the value passed through the initials parameter.
function createAvatar(initials) {
	let newAvatar = document.createElement("span");
    newAvatar.classList.add("avatar");
	newAvatar.innerText = initials;
	return newAvatar;
}


function createText(text) {
	var newText = document.createElement("span");
	newText.classList.add("text");
	newText.innerText = text;
	return newText;
}


// target the "initials" <input> element by its ID (#initials) and set its value to an empty string. (i)
// repeat the same, but this time for the "comment text" <input> element, which has the ID #commentText. (ii)
function resetFields() {
    document.getElementById("initials").value = ""; // (i)
    document.getElementById("commentText").value = ""; // (ii)
}


// Use the appropriate JavaScript function to first append the avatar element (1)
// and then the text element to the enclosingDiv. (2)
// Then, use the appropriate JavaScript function to append the enclosingDiv to the commentsDiv. (3)
function addComment() {
    let commentsDiv = document.getElementById("commentSection");
	let initialsInput = document.getElementById("initials").value;
	let textInput = document.getElementById("commentText").value;

	let enclosingDiv = createEnclosingDiv();
	let avatar = createAvatar(initialsInput);
	let text = createText(textInput);

    enclosingDiv.appendChild(avatar); // (1)
	enclosingDiv.appendChild(text); // (2)
	commentsDiv.appendChild(enclosingDiv); // (3)
    // Call the resetFields() function after a comment has been successfully added to the document.
    resetFields();
}