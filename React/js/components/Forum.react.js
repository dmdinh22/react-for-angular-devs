var Forum = React.createClass({
    getInitialState: function() {
        return {
            allAnswers: ForumStore.getAnswers()
        };
    },

    _onAddAnswer: function(answerText) {
        // dispatch that an event has occured
        ForumDispatcher.dispatch({
            actionType: 'FORUM_ANSWER_ADDED',
            newAnswer: answerText
        });
    },

    render: function() {
        return (
            <div>
                <ForumHeader />

                <div className="container">
                    <ForumQuestion />
                    <hr />
                    <ForumAnswers allAnswers={this.state.allAnswers} />
                    <hr />
                    <h4>Add an answer</h4>
                    <ForumAddAnswerBox onAddAnswer={this._onAddAnswer} />
                </div>
            </div>
        );
    }
});
