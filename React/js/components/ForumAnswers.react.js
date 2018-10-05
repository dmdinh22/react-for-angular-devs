const React = require('react');
const ForumAnswer = require('./ForumAnswer.react');
const ForumActions = require('../actions/ForumActions');

const ForumAnswers = React.createClass({
    _onMarkCorrect: function(id) {
        ForumActions.markAnswerCorrect(id);
    },
    render: function() {
        let allAnswers = this.props.allAnswers;
        let answers = [];

        for (let key in allAnswers) {
            answers.push(
                <ForumAnswer
                    key={key}
                    id={key}
                    answer={allAnswers[key]}
                    onMarkCorrect={this._onMarkCorrect}
                />
            );
        }

        return <div>{answers}</div>;
    }
});

module.exports = ForumAnswers;
