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





var profile_values = document.getElementsByClassName('word-count');
var total_words = 0;
for (i = 0; i < profile_values.length; i++) {
  total_words += profile_values[i].innerHTML.split(' ').length;
}
document.getElementById('word-count').innerHTML = total_words;



\\CLICK BUTTON\\
document.querySelectorAll('.accordion button').forEach(button => {
    button.addEventListener('click', function(e) {
        let expanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !expanded);
        
        let content = document.getElementById(this.getAttribute('aria-controls'));
        content.hidden = !content.hidden;
        
      content.setAttribute('aria-hidden', content.hidden ? 'true' : 'false');
      
        let icon = this.querySelector('.icon');
        icon.textContent = content.hidden ? '+' : '−';
    });

    // Ovládanie klávesnicou
    button.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === 'Space') {
            e.preventDefault();
            this.click();
        }
    });
});

