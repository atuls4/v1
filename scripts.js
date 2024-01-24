// Function to toggle night mode based on checkbox state
var body = document.body;
var checkbox = document.getElementById("nightModeCheckbox");
      var now = new Date();
      var hours = now.getHours(); 

      if (hours >= 6 && hours < 18) {
        checkbox.checked = true;
        body.classList.add('night');
      } 
      else {

              body.classList.remove('night');
     }
    

 function toggleNightMode() {
      // Get the checkbox element
      var checkbox = document.getElementById("nightModeCheckbox");

      if (checkbox.checked) {
        // If checked, add a class to the body
        body.classList.add("night");
      } else {
        // If not checked, remove the class from the body
        body.classList.remove("night");
      }
    }

