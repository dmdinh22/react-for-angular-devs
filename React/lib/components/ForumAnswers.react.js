const ForumAnswers = React.createClass({
    render: function() {
        let allAnswers = this.props.allAnswers;
        let answers = [];

        for (let key in allAnswers) {
            answers.push(
                <ForumAnswer key={key} id={key} answer={allAnswers[key]} />
            );
        }

        return <div>{answers}</div>;
    }
});
