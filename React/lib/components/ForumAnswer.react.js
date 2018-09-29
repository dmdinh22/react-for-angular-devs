const ForumAnswer = React.createClass({
    displayName: "ForumAnswer",

    // in order to create this component, these
    // props are required
    propTypes: {
        answer: React.PropTypes.object.isRequired
    },

    render: function () {
        // passed down from ForumAnswers component
        let answer = this.props.answer;

        return React.createElement(
            "div",
            { className: "panel panel-default" },
            React.createElement(
                "div",
                { className: "panel-body" },
                answer.body
            )
        );
    }
});