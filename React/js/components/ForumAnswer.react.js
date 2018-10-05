var React = require('react');

const ForumAnswer = React.createClass({
    // in order to create this component, these
    // props are required
    propTypes: {
        answer: React.PropTypes.object.isRequired,
        onMarkCorrect: React.PropTypes.func.isRequired
    },

    _markCorrect: function() {
        this.props.onMarkCorrect(this.props.id);
    },

    render: function() {
        // passed down from ForumAnswers component
        let answer = this.props.answer;

        let markAnswer;

        if (!answer.correct) {
            markAnswer = (
                <div className="pull-right">
                    <small>
                        <a href="#" onClick={this._markCorrect}>
                            Mark as correct
                        </a>
                    </small>
                </div>
            );
        }

        let classNames = 'panel-body';

        if (answer.correct) {
            classNames += ' bg-success';
        }

        return (
            <div className="panel panel-default">
                <div className={classNames}>
                    {answer.body}
                    {markAnswer}
                </div>
            </div>
        );
    }
});

module.exports = ForumAnswer;
