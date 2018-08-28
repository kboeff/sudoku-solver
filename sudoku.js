const uploadImage = () => {
	
}

// Get the modal
let modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
let img = '';
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
const getId = (id) => {
	var myImage = document.getElementById(id);
	myImage.setAttribute('crossOrigin', '');

	if(myImage.height === 0) {
		myImage.height = myImage.naturalHeight;
	}

	if(myImage.width === 0) {
		myImage.width = myImage.naturalWidth;
	}
	
	modal.style.display = "block";
	captionText.innerHTML = "Loading, please wait.";

	Tesseract.recognize(myImage, {
		lang: 'eng'
	})
	.then(function(result){
		modal.style.display = "block";
		modalImg.src = myImage.src;
		captionText.innerHTML = result.text;
	})
	
	// img = document.getElementById(id);
	
	modal.style.display = "block";
    modalImg.src = myImage.src;
    
    //console.log(modal.style.display, modalImg, captionText.innerHTML)
	
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
