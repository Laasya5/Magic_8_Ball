document.addEventListener('DOMContentLoaded', function() {
    const responses = [
        "Yes - definitely.",
        "It is decidedly so.",
        "Without a doubt.",
        "Reply hazy, try again.",
        "Ask again later.",
        "Better not tell you now.",
        "My sources say no.",
        "Outlook not so good.",
        "Very doubtful."
    ];

    const questionInput = document.getElementById('questionInput');
    const submitButton = document.getElementById('submitButton');
    const questionText = document.getElementById('questionText');
    const answerText = document.getElementById('answerText');

    submitButton.addEventListener('click', function() {
        const question = questionInput.value.trim();
        if (question === '') {
            alert('Please enter a question.');
            return;
        }

        const randomIndex = Math.floor(Math.random() * responses.length);
        const answer = responses[randomIndex];

        questionText.textContent = `Question: ${question}`;
        answerText.textContent = `Magic 8 Ball: ${answer}`;

        // Clear input after submitting
        questionInput.value = '';
    });
});
