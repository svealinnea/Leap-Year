//Business Logic//

//User Interface Logic//
$(document).ready(function() {
  $("#form").submit(function(event){
    event.preventDefault();
    const year = $("input#year").val();

    if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) { 
    alert("This is a leap year!!");
    } else {
    alert("This is not a leap year :(");
    }
  });
});
