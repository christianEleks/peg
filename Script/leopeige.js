
 window.addEventListener('scroll', reveal);

 function reveal(){
   var reveals = document.querySelectorAll('.reveal');

   for(var i=0; i<reveals.length; i++){
      var windowheight = window.innerHeight;
      var revealtop = reveals[i].getBoundingClientRect().top;
      var revealpoint = 150;

      if(revealtop < windowheight - revealpoint){
         reveals[i].classList.add('active');
      }
      else{
         reveals[i].classList.remove('active');
      }
   }
 }

 window.addEventListener("load", ()=> {
      document.querySelector(".loader").classList.remove("loader-active");
})

function Load(){
   const currentDate = new Date();
   const year = currentDate.getFullYear();

   document.getElementById("bell").innerHTML = `copyright © ${year} Leopeige Cleaning All Right Reserved <a href="https://www.privacypolicies.com/live/5dfe26c5-263d-40bc-aee5-e18df4cf6074">privacy policy</a>`
}
