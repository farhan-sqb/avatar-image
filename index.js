// JavaScript Document
/*
function textChangeListener (evt) {
      var id = evt.target.id;
      var text = evt.target.value;
      
      if (id == "topLineText") {
        window.topLineText = text;
      } else {
        window.bottomLineText = text;
      }
      
      drawMeme(window.image, window.topLineText, window.bottomLineText);
} /*

/*function drawMeme(image, topLine, bottomLine) { */
function drawMeme(t,b) {
	
    const sel1 = document.getElementById("select1").value;
    const sel2 = document.getElementById("select2").value;
    const error = "Oops, something went wrong. Try again later."
    
    const downloadMeme = "<button onclick='download_image()'>Download</button>";

    if (sel1 && sel2) {

        if (sel1 === "Human" && sel2 === "Cat" || sel1 === "Cat" && sel2 === "Human") {
            document.getElementById("output").innerHTML = "<canvas id='catCan' class='downloadCanvas' width='400' height='600'></canvas>";
            var imgSubject = "https://assets.codepen.io/344004/cat.jpg?format=auto";
            var canvas = document.getElementById('catCan');
			
			document.getElementById("button").innerHTML = downloadMeme;
			
			document.getElementById("topLineText").style.display = "block";
			document.getElementById("bottomLineText").style.display = "block";
        }
        if (sel1 === "Human" && sel2 === "Dog" || sel1 === "Dog" && sel2 === "Human") {
            document.getElementById("output").innerHTML = "<canvas id='dogCan' class='downloadCanvas' width='400' height='600'></canvas>";
            var imgSubject = "https://assets.codepen.io/344004/dog.jpg?format=auto";
            var canvas = document.getElementById('dogCan');
			
			document.getElementById("button").innerHTML = downloadMeme;
			
			document.getElementById("topLineText").style.display = "block";
			document.getElementById("bottomLineText").style.display = "block";
        }
        if (sel1 === "Human" && sel2 === "Monkey" || sel1 === "Monkey" && sel2 === "Human") {
			document.getElementById("output").innerHTML = "<canvas id='monkeyCan' class='downloadCanvas' width='400' height='600'></canvas>";
            var imgSubject = "https://assets.codepen.io/344004/monkey.jpg?format=auto";
            var canvas = document.getElementById('monkeyCan');
			
			document.getElementById("button").innerHTML = downloadMeme;
			
			document.getElementById("topLineText").style.display = "block";
			document.getElementById("bottomLineText").style.display = "block";
        }
        if (sel1 === "Human" && sel2 === "Banana" || sel1 === "Banana" && sel2 === "Human") {
            document.getElementById("output").innerHTML = "<canvas id='bananaCan' class='downloadCanvas' width='400' height='600'></canvas>";
            var imgSubject = "https://assets.codepen.io/344004/banana.jpg?format=auto";
            var canvas = document.getElementById('bananaCan');
			
			document.getElementById("button").innerHTML = downloadMeme;
			
			document.getElementById("topLineText").style.display = "block";
			document.getElementById("bottomLineText").style.display = "block";
        }

    }
    else {
        document.getElementById("output").innerHTML = error;
    }

    //canvas
    function drawImageActualSize(evt) {
    //function drawImageActualSize() 
        canvas.width = this.naturalWidth;
        canvas.height = this.naturalHeight;
        ctx.drawImage(this, 0, 0);
        ctx.drawImage(this, 0, 0, this.width, this.height);
      
        ctx.font = '18pt Impact';
        ctx.textAlign = 'center';
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;
        ctx.fillStyle = 'white';
        
        //temp static text
		
		if(t==undefined){
			var topLine = "This is top text and is a bit longer";	
		}else{
			var topLine = t;
		}
		
		if(b==undefined){
			var bottomLine = "This is bottom text";	
		}else{
			var bottomLine = b;
		}
		
        //alert(topLine);
       if (topLine != null) {
         ctx.fillText(topLine, canvas.width / 2, 40);
         ctx.strokeText(topLine, canvas.width / 2, 40);
       }

       if (bottomLine != null) {
        ctx.fillText(bottomLine, canvas.width / 2, canvas.height - 20);
        ctx.strokeText(bottomLine, canvas.width / 2, canvas.height - 20);
       }
    }

    const ctx = canvas.getContext('2d');
    var image = new Image(); // Using optional size for image
    image.onload = drawImageActualSize; // Draw when image has loaded
    image.src = imgSubject;
    image.setAttribute('crossOrigin', 'anonymous');

    const modal = document.getElementById("modal");
    const modalBg = document.getElementById("modal-bg");
    modal.style.display = "block";
    modalBg.style.display = "block";

}

    /*
    var select1 = document.getElementById('topLineText');
    var select2 = document.getElementById('bottomLineText');
    //needs something else than onfocus...
    select1.onchange = textChangeListener;
    select2.onchange = textChangeListener;
   */

function download_image() {
    var canvas = document.getElementsByClassName("downloadCanvas");
    image = canvas[0].toDataURL("image/jpg");
    var link = document.createElement('a');
    link.download = "ohmygenes-meme.jpg";
    link.href = image;
    link.click();
}

function closeModal() {
    const closeModal = document.getElementById("modal");
    const hideModalBg = document.getElementById("modal-bg");
    closeModal.style.display = "none";
    hideModalBg.style.display = "none";
}

function getTopText(){
	var toptext = document.getElementById("topLineText").value;
	var bottomtext = document.getElementById("bottomLineText").value;
	drawMeme(toptext, bottomtext);
}

function getBottomText(){
	var toptext = document.getElementById("topLineText").value;
	var bottomtext = document.getElementById("bottomLineText").value;
	drawMeme(toptext, bottomtext);
}