var React = require('react');

const ForumAddAnswerBox = React.createClass({
    getInitialState: function() {
        return {
            value: ''
        };
    },

    _addAnswer: function() {
        this.props.onAddAnswer(this.state.value);
    },

    _onChange: function(event) {
        this.setState({
            value: event.target.value
        });
    },

    render: function() {
        return (
            <div>
                <textarea
                    className="col-md-6 col-xs-8"
                    id="addAnswer"
                    onChange={this._onChange}
                />
                &nbsp;
                <input
                    type="button"
                    className="btn btn-primary"
                    value="Add"
                    onClick={this._addAnswer}
                />
            </div>
        );
    }
});

module.exports = ForumAddAnswerBox;
