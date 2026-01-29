function mywatch()
{var datetime = new Date();
    var hours  = datetime.getHours();
   var minutes = datetime.getMinutes();
   var seconds = datetime.getSeconds();
   
   var watch = hours+ ':' +minutes+ ':' +seconds;
   
   document.getElementById('clock').innerText = watch;
 }



setInterval(mywatch,1000);


var searchBtn=document.getElementById('searchbtn');
searchbtn.onclick = function()
{
    document.getElementById('result').innerText="Search result Found";
}
function bookAppointment() {
    alert("Thank you! A representative will contact you shortly to confirm your appointment.");
  }
  document.getElementById("currentYear").textContent = new Date().getFullYear();