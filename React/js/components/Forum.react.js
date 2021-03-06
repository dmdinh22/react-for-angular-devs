const React = require('react');
const ForumHeader = require('./ForumHeader.react');
const ForumQuestion = require('./ForumQuestion.react');
const ForumAnswers = require('./ForumAnswers.react');
const ForumAddAnswerBox = require('./ForumAddAnswerBox.react');
const ForumActions = require('../actions/ForumActions');
const ForumStore = require('../stores/ForumStore');

const Forum = React.createClass({
    getInitialState: function() {
        return {
            allAnswers: ForumStore.getAnswers()
        };
    },

    componentDidMount: function() {
        ForumStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        ForumStore.removeListener(this._onChange);
    },

    _onChange: function() {
        this.setState({ allAnswers: ForumStore.getAnswers() });
    },

    _onAddAnswer: function(answerText) {
        // dispatch that an event has occured
        ForumActions.addNewAnswer(answerText);
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

module.exports = Forum;
