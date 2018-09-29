const ForumAddAnswerBox = React.createClass({
    render: function() {
        return (
            <div>
                <textarea className="col-md-6 col-xs-8" id="addAnswer" />
                &nbsp;
                <input type="button" className="btn btn-primary" value="Add" />
            </div>
        );
    }
});
