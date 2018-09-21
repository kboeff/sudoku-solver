var globalIdCount = 0; // adding unique integer to IDs to uploaded images

// Can be called by the URL in the example or the "Add" button
const getURL = function(element) {
	let imgURL = document.querySelectorAll("input")[0].value;
	if(arguments.length) {
		imgURL = element.innerHTML;
		console.log(imgURL);
	}
	
	let container = document.getElementsByClassName("img-container")[0];
	if(imgURL.length) {
		let newImg = document.createElement('img');
		
		let att = document.createAttribute("src");
		att.value = imgURL.toString();
		newImg.setAttributeNode(att);
		
		let attHeight = document.createAttribute("height");
		attHeight.value = "200px";
		newImg.setAttributeNode(attHeight);
		
		let attWidth = document.createAttribute("width");
		attWidth.value = "250px";
		newImg.setAttributeNode(attWidth);
		
		let attId = document.createAttribute("id");
		attId.value = "newImg" + globalIdCount;
		globalIdCount++;
		newImg.setAttributeNode(attId);
		
		let attClick = document.createAttribute("onClick");
		attClick.value = "getId(this.id);";
		newImg.setAttributeNode(attClick);
		
		let attOrigin = document.createAttribute("crossOrigin");
		attOrigin.value = "";
		newImg.setAttributeNode(attOrigin);
		
		container.appendChild(newImg);
	} 
	
}

// Get the modal
let modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
let img = '';
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");
let addBtn = document.getElementById("add-btn");
const getId = (id) => {
	let myImage = document.getElementById(id);
	myImage.setAttribute('crossOrigin', '');

	if(myImage.height === 0) {
		myImage.height = myImage.naturalHeight;
	}

	if(myImage.width === 0) {
		myImage.width = myImage.naturalWidth;
	}
	
	modal.style.display = "block";
	captionText.innerHTML = "Loading, please wait.";
	addBtn.style.zIndex = "-1";

	
	Tesseract.recognize(myImage, {
		lang: 'eng'
	})
	.catch(err => alert(err))
	.then(result => {
		modal.style.display = "block";
		modalImg.src = myImage.src;
		captionText.innerHTML = result.text;
	})
	.finally(resultOrError => console.log('oops!', resultOrError))

	
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
  addBtn.style.zIndex = "1";
}
