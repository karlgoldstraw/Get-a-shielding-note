const { body } = require('express-validator');

// Guidance at: docs/views/examples/validation

module.exports = {
  '/v1/screener-question/answer': [
    body('self-isolate')
      .not().isEmpty()
      .withMessage('Select if you are at high risk from coronavirus (clinically extremely vulnerable)')
  ],
  '/v1/screener-question-live-work/answer': [
    body('self-isolate-live-work')
      .not().isEmpty()
      .withMessage('Select if you work in an area where shielding advice is in place, but live outside this area')
  ],
  '/v1/screener-question-leave-home/answer': [
    body('self-isolate-leave-home')
      .not().isEmpty()
      .withMessage('Select if you need to leave you home to go to work ')
  ],
  '/v1/self-isolate-note-when/answer': [
    body('self-isolate-note-when')
      .not().isEmpty()
      .withMessage('Select when you need your shielding note to start from')
  ],
};

