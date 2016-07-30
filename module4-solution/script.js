(function() {
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
console.log(names);

for (var property in names) {
  var firstLetter = names[property].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    byeSpeaker.speak(names[property]);
  } else {
    helloSpeaker.speak(names[property]);
  }
}
})();
