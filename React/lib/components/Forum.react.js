var Forum = React.createClass({
    displayName: "Forum",

    getInitialState: function () {
        return {
            allAnswers: ForumStore.getAnswers()
        };
    },

    componentDidMount: function () {
        ForumStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
        ForumStore.removeListener(this._onChange);
    },

    _onChange: function () {
        this.setState({ allAnswers: ForumStore.getAnswers() });
    },

    _onAddAnswer: function (answerText) {
        // dispatch that an event has occured
        ForumDispatcher.dispatch({
            actionType: 'FORUM_ANSWER_ADDED',
            newAnswer: answerText
        });
    },

    render: function () {
        return React.createElement(
            "div",
            null,
            React.createElement(ForumHeader, null),
            React.createElement(
                "div",
                { className: "container" },
                React.createElement(ForumQuestion, null),
                React.createElement("hr", null),
                React.createElement(ForumAnswers, { allAnswers: this.state.allAnswers }),
                React.createElement("hr", null),
                React.createElement(
                    "h4",
                    null,
                    "Add an answer"
                ),
                React.createElement(ForumAddAnswerBox, { onAddAnswer: this._onAddAnswer })
            )
        );
    }
});