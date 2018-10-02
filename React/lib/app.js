React.render(React.createElement(Forum, null), document.getElementById('forum'));

const myEmitter = new EventEmitter();

myEmitter.on('STARTED_THE_APP', function () {
    console.log('started the app');
});

myEmitter.on('STARTED_THE_APP', function () {
    console.log('started the app #2');
});

myEmitter.EventEmitter('STARTED_THE_APP');

ForumDispatcher.register(function (action) {
    console.log('received an action');
    console.log(action);
});