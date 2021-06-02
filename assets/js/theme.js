document.querySelectorAll('.datepicker').forEach(function(field) {
	var picker = new Pikaday({
		field: field
	});
});

var i = 0;
var txt = 'As an engineering student, I aspire to have an internship or a job in which I can make a real contribution. My technical skills, as well as my desire to pursue it as my profession, have convinced me that this industry is one to which I can add value.';
var speed = 50;

typeWriter();
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}