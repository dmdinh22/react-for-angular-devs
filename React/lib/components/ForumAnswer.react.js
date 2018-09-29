const ForumAnswer = React.createClass({
    // in order to create this component, these
    // props are required
    propTypes: {
        answer: React.PropTypes.object.isRequired
    },

    render: function() {
        // passed down from ForumAnswers component
        let answer = this.props.answer;

        return (
            <div className="panel panel-default">
                <div className="panel-body">{answer.body}</div>
            </div>
        );
    }
});
