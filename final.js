



$("#submit").on('click',function(event){
event.preventDefault()
let name = $("#name").val().fontsize(3);
let comment = $("#comment").val().fontsize(6);

$(".commentSection").append(`<div id="replybox"> 
	
	<div id="firstpart"> <div id="imgdiv"> <img src="https://media.gettyimages.com/photos/dababy-attends-sir-lucian-grainges-2020-artist-showcase-presented-by-picture-id1201941767?s=594x594" class='image' ="image" width="100px" height="100px"> 
	</div>




 <div id"postdiv"> ${name} : <br><br>${comment} </div> </div>

 




 <input type="reset" name="clear" id="remove" value="delete">  <br> 
 
 <div id="editbutton"> Edit </div> 
 <div id="editcontainer" class='nodisplay'><input type="text" name="edit" >

    <input type="submit" name="redo" id="redo"value="redo">
 </div>

 </div>`);


  

})

$(".commentSection").on('click','#remove',function(){

 


   
   let nextstep = $(this).parents()[0].remove();
   console.log(nextstep);
 



})

$('.commentSection').on('click','#editbutton',function(){



     
      let next = $(this).next().toggleClass('nodisplay');
     

})




$('.commentSection').on('click','#redo',function(){

//Start at $(this) and move to the input box
 let haha = $(this).parents()[0];
 

 //Store the value in the input in a variable
let hah2 = $(haha).children()[0];
 console.log(haha);
 //Start at $(this) and move to the old comment text
  let finalstep = $(this).parents()[1];
  let finalstep2 = $(finalstep).children()[0];
  let finalstep3 = $(finalstep2).children()[1];
  let finalstep4 = $(finalstep3).children()[3];
  
 
  console.log(finalstep4);

 //Replace the text using .text() with the value that you stored from the second comment
   
   $(finalstep4).text($(hah2).val())


  
      
    






});

































  







