// External dependencies
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line

// First screener page routing
router.post('/*/screener-question/answer', function (req, res) {
  // Set a variable to the answer
  var answer = req.session.data['self-isolate']
  // Set prototype version
  var version = req.params[0];

  // Check whether the answer is yes
  if (answer == "yes"){
    // If the answer is yes send to the next question
    res.redirect(`/${version}/screener-question-live-work`);
  }
  else {
    // If the answer is no send to the no screen
    res.redirect(`/${version}/screener-question-no`);
  }

})


// Second screener page routing
router.post('/*/screener-question-live-work/answer', function (req, res) {
  // Set a variable to the answer
  var answer = req.session.data['self-isolate-live-work']
  // Set prototype version
  var version = req.params[0];

  // Check whether the answer is yes
  if (answer == "yes"){
    // If the answer is yes send to the next question
    res.redirect(`/${version}/screener-question-leave-home`);
  }
  else {
    // If the answer is no send to the no screen
    res.redirect(`/${version}/screener-question-no`);
  }

})


// Third screener page routing
router.post('/*/screener-question-leave-home/answer', function (req, res) {
  // Set a variable to the answer
  var answer = req.session.data['self-isolate-leave-home']
  // Set prototype version
  var version = req.params[0];

  // Check whether the answer is yes
  if (answer == "yes"){
    // If the answer is yes send to the next question
    res.redirect(`/${version}/note-when`);
  }
  else {
    // If the answer is no send to the no screen
    res.redirect(`/${version}/screener-question-no`);
  }

})



// Fourth screener page routing
router.post('/*/self-isolate-note-when/answer', function (req, res) {
  // Set a variable to the answer
  var answer = req.session.data['self-isolate-note-when']
  // Set prototype version
  var version = req.params[0];

  // Check whether the answer is Today
  if (answer == "Today"){
    // If the answer is yes send to the next question
    res.redirect(`/${version}/note-name`);
  }
  else {
    // If the answer is no send to the no screen
    res.redirect(`/${version}/note-start-date`);
  }

})




module.exports = router;
