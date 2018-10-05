const ForumDispatcher = require('../dispatcher/ForumDispatcher');
const ForumConstants = require('../constants/ForumConstants');

// action creator to clean up dispatching code
const ForumActions = {
    markAnswerCorrect: function(id) {
        ForumDispatcher.dispatch({
            actionType: ForumConstants.FORUM_ANSWER_MARKED_CORRECT,
            id: id
        });
    },

    addNewAnswer: function(answerText) {
        ForumDispatcher.dispatch({
            actionType: ForumConstants.FORUM_ANSWER_ADDED,
            newAnswer: answerText
        });
    }
};

module.exports = ForumActions;
