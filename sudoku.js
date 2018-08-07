const uploadImage = () => {
	function hasGetUserMedia() {
	  return !!(navigator.mediaDevices &&
		navigator.mediaDevices.getUserMedia);
	}

	if (hasGetUserMedia()) {
	  // Good to go!
		const constraints = {
			video: true
		};

		const video = document.querySelector('video');
		
		alert('ready to stream');
		
		navigator.mediaDevices.getUserMedia(constraints).
		  then((stream) => {video.srcObject = stream});
	  
	} else {
	  alert('getUserMedia() is not supported by your browser');
	}
}


const viewSelector = () => {
	alert("select views...")
}

const makeCollage = () => {
	alert("make collage...")
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

	Tesseract.recognize(myImage, {
		lang: 'equ',
		tessedit_char_blacklist: 'I'
	})
	.then(function(result){
		console.log(result)
	})
	
	// img = document.getElementById(id);
	
	modal.style.display = "block";
    modalImg.src = myImage.src;
    captionText.innerHTML = myImage.alt;
    //console.log(modal.style.display, modalImg, captionText.innerHTML)
	
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}


