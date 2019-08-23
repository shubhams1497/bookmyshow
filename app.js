function on() {
    document.getElementById("overlay").style.display = "block";
}
                
function off() {
    document.getElementById("overlay").style.display = "none";
}



document.getElementById('rating-input').addEventListener('mouseover',function(e) { 
    if(e.target.nodeName == "path")
    {
      //e.target.className.baseVal = "heart-red";
      let stringId = e.target.id;
      stringId = stringId.substr(11,stringId.length);
      for(let i=1;i<=stringId;i++)
      {
          document.getElementById('icon-heart-'+i).className.baseVal = "heart-red";
      }
      for(let i=stringId+1 ; i<=10; i++)
      {
          document.getElementById('icon-heart-'+i).className.baseVal = "heart-gray";
      }

      document.getElementById('rating-value').innerHTML = (stringId/2.0).toFixed(1);

    }
 });
 
 document.getElementById('rating-input').addEventListener('mouseout', function(e){
 
   for(let i=1;i<=10;i++)
       {
           document.getElementById('icon-heart-'+i).className.baseVal = "heart-gray";
       }
       document.getElementById('rating-value').innerHTML = (0.0).toFixed(1);
   });


function expandStoriesToggle()  {
    
    let val = document.getElementById("see-more-content").style;
    if(val.display != "flex")
    {
        val.display="flex";
    }
    else{
        val.display="none";
    }
}