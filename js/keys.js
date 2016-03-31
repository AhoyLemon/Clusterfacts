function populateQuestion() {
  current.question = round.questions[current.num].Q;
  current.qsize = round.questions[current.num].Q.length;
  $('.big-question').removeAttr('length');
  $('.big-question').removeAttr('qsize');
  if (current.qsize > 100) {
    $('.big-question').attr('length','very-long');
  } else if (current.qsize > 80) {
    $('.big-question').attr('length','long');
  } else if (current.qsize > 60) {
    $('.big-question').attr('length','medium');
  } else if (current.qsize > 40) {
    $('.big-question').attr('length','short');
  } else {
    $('.big-question').attr('length','very-short');
  } 
  $('.big-question').attr('qsize',current.qsize);
  $('.big-question').text(current.question);
}



$('body').keyup(function(e) {
  
  if (current.phase == "asking") {
    if (e.keyCode == 39) {
      current.num++;
      
    } else if (e.keyCode == 37) {
      current.num--;
      
    }
    if (current.num > 8) {
      current.num = 8; 
    } else if (current.num < 0) { 
      current.num = 0;
    }
    console.log(current.num);
    $('.question-number').text(current.num + 1);
    $('#BigQuestion').text(round.questions[current.num].Q);
  } else if (current.phase == "answering") {
    if (e.keyCode == 39) {
      if (current.showing == "question") {
        current.showing = "answer";
      } else if (current.showing == "answer") {
        current.num++;
        current.showing = "question";
      }
    } else if (e.keyCode == 37) {
      current.num--;
      current.showing = "question";
    }
    if (current.num > 8) {
      current.num = 8; 
    } else if (current.num < 0) { 
      current.num = 0;
    }
    $('.question-number').text(current.num + 1);
    if (current.showing == "question") {
      populateQuestion();
      $('.big-answer').empty();
    } else if (current.showing == "answer") {
      populateQuestion();
      $('.big-answer').text(round.questions[current.num].A);
    }
  }
});