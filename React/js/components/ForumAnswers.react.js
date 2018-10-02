const ForumAnswers = React.createClass({
    _onMarkCorrect: function(id) {
        ForumDispatcher.dispatch({
            actionType: 'FORUM_ANSWER_MARKED_CORRECT',
            id: id
        });
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
