	let texto1 = '  “ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”'
	let texto2 = '“ I ve been interested in coding for a while but never taken the jump, until now. I couldn t recommend this course enough. I m now in the job of my dreams and so excited about the future. ”'
 	let subText1 =   'Tanya Sinclair UX Engineer'
 	let subText2 =   'John Tarkpor Junior Front-end Developer'
	var textSlides = new Array(texto1,texto2)
	var subTextSlides = new Array(subText2,subText1)
	var slides=new Array("images/image-john.jpg","images/image-tanya.jpg");
 	var length=slides.length;
 	var current=1;

 function inicio(){
	 document.querySelector(".image").style.backgroundImage="url('"+slides[current]+"')";
	 document.querySelector(".text").innerHTML=textSlides[current];
	 document.querySelector(".subText").innerHTML=subTextSlides[current]; 
 }

 function troca(){
	current++
	 if(current < 0){
		 current=1;
	 }else if(current >= length){
		 current=0;
	 }
	 document.querySelector(".image").style.backgroundImage="url('"+slides[current]+"')";
	 document.querySelector(".text").innerHTML=textSlides[current];
	 document.querySelector(".subText").innerHTML=subTextSlides[current];	
 }