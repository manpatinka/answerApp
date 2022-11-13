const allAnswers = ['No doubt!', 'Obviosly!', 'Yes, but not now', 'For now it\'s unpredictable.', 'Forget about it', 'It only depends on your actions', 'No for now, but it may change.', 'You already know the answer yourself.'];
//const allAnswersRu = ['Даже не сомневайся!', 'Определенно.', 'Да, но не сейчас.', 'Сейчас нельзя дать точный ответ.', 'Забудь об этом.', 'Все зависит от твоих действий', 'Сейчас нет, но все может поменяться.', 'Ты уже знаешь ответ.'];


let answer = () => {
    let answersCount = allAnswers.length;
    let answerIndex = Math.floor(Math.random() * answersCount);
    return allAnswers[answerIndex];
}

console.log(answer());