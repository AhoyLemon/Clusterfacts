//@prepros-prepend rounds.js
//@prepros-prepend keys.js

var r = Math.floor((Math.random() * rounds.length));
var round = rounds[r];
console.log(r);
console.log(round);
console.log(round.title);

var current = {
  'phase': "asking",
  'num': 0,
  'showing': 'question',
  'question': '',
  'answer': ''
};

$('.round-title').text(round.title);
if (round.description) {
  $('#RoundDescription').text(round.description);
} else {
  $('#RoundDescription').hide();
}

if (round.written) {
  $('#DateWritten').text(round.written);
  $('.date-written').show();
} else {
  $('.date-written').show();
}

$('.round-title').text(round.title);


if (current.phase == "asking") {
  $('section.asking').show();
  $('section.asking').siblings('section').hide();
  populateQuestion();
} else if (current.phase == "summary") {
  $('section.summary').show();
  $('section.summary').siblings('section').hide();
  $.each( round.questions, function( key, value ) {
    $('.question-list').append('<li class="question">'+value.Q+'</li>');
    //$('.question-list').append('<dd class="answer">'+value.A+'</dd>');
    console.log(value.Q);
  });
} else if (current.phase == "answering") {
  $('section.answering').show();
  $('section.answering').siblings('section').hide();
  populateQuestion();
}





/**
$('#Questions').empty();
$.each( round.questions, function( key, value ) {
  $('#Questions').append('<dt class="question">'+value.Q+'</dt>');
  $('#Questions').append('<dd class="answer">'+value.A+'</dd>');
  console.log(value.Q);
});
**/