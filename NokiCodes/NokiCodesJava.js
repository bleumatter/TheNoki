/* WORD COUNT STUFF */
var profile_values = document.getElementsByClassName('word-count');
var total_words = 0;
for (i = 0; i < profile_values.length; i++) {
  total_words += profile_values[i].innerHTML.split(' ').length;
}
document.getElementById('word-count').innerHTML = total_words;
