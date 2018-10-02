const ForumAnswers = React.createClass({
    displayName: 'ForumAnswers',

    _onMarkCorrect: function (id) {
        ForumDispatcher.dispatch({
            actionType: 'FORUM_ANSWER_MARKED_CORRECT',
            id: id
        });
    },
    render: function () {
        let allAnswers = this.props.allAnswers;
        let answers = [];

        for (let key in allAnswers) {
            answers.push(React.createElement(ForumAnswer, {
                key: key,
                id: key,
                answer: allAnswers[key],
                onMarkCorrect: this._onMarkCorrect
            }));
        }

        return React.createElement(
            'div',
            null,
            answers
        );
    }
});