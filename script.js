const allAnswers = ['No doubt!', 'Obviosly!', 'May be not this time', 'For now it\'s unpredictable.', 'Forget about it', 'No for now, but it may change.', 'You already know the answer yourself.'];
let answersCount = allAnswers.length;
const answer = () => {
    let answerIndex = Math.floor(Math.random() * answersCount);
    return allAnswers[answerIndex];
}

console.log(answer());