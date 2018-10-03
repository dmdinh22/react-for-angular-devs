const answerData = {
    '1': {
        body: 'Isn\'t that about time travel?',
        correct: false
    },
    '2': {
        body:
            'React and Flux are a tool and methodologies for building the front end of web applications.',
        correct: false
    },
    '3': {
        body: 'React is a synonym for \'respond\'',
        correct: false
    }
};

const ForumStore = new EventEmitter();

ForumStore.getAnswers = function() {
    return answerData;
};

ForumStore.addAnswer = function(newAnswer) {
    answerData[Object.keys(answerData).length + 1] = {
        body: newAnswer,
        correct: false
    };
};

ForumStore.markAsCorrect = function(id) {
    for (key in answerData) {
        answerData[key].correct = false;
    }

    answerData[id].correct = true;
};
