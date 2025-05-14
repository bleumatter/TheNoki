var coll = document.getElementsByClassName("blujournal_Button");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

/*WORD COUNTER JS*\
function countWord() {

            // Get the input text value
            let words = document
                .getElementById("word").value;

            // Initialize the word counter
            let count = 0;

            // Split the words on each
            // space character 
            let split = words.split(' ');

            // Loop through the words and 
            // increase the counter when 
            // each split word is not empty
            for (let i = 0; i < split.length; i++) {
                if (split[i] != "") {
                    count += 1;
                }
            }

            // Display it as output
            document.getElementById("show")
                .innerHTML = count;
        }
