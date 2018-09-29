const ForumAnswers = React.createClass({
    displayName: "ForumAnswers",

    render: function () {
        let allAnswers = this.props.allAnswers;
        let answers = [];

        for (let key in allAnswers) {
            answers.push(React.createElement(ForumAnswer, { key: key, id: key, answer: allAnswers[key] }));
        }

        return React.createElement(
            "div",
            null,
            answers
        );
    }
});