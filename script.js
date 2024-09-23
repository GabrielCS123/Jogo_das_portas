const questions = [
    { application: 'FTP DADOS', port: '20' },
    { application: 'FTP CONTROLE', port: '21' },
    { application: 'SSH', port: '22' },
    { application: 'Telnet', port: '23' },
    { application: 'SMTP', port: '25' },
    { application: 'DNS', port: '53' },
    { application: 'DHCP servidor', port: '67' },
    { application: 'DHCP cliente', port: '68' },
    { application: 'TFTP', port: '69' },
    { application: 'HTTP', port: '80' },
    { application: 'POP3', port: '110' },
    { application: 'IMAP', port: '143' },
    { application: 'SNMP', port: '161' },
    { application: 'HTTPS', port: '443' }
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
    const questionElement = document.getElementById('question');
    questionElement.textContent = `Qual é a porta da aplicação: ${questions[currentQuestion].application}?`;
}

function checkAnswer() {
    const userAnswer = document.getElementById('answer').value.trim();
    const feedbackElement = document.getElementById('feedback');

    if (userAnswer === questions[currentQuestion].port) {
        feedbackElement.textContent = 'Correto!';
        score++;
    } else {
        feedbackElement.textContent = `Errado! A porta correta é ${questions[currentQuestion].port}.`;
    }

    document.getElementById('score').textContent = `Pontuação: ${score}`;
    currentQuestion++;

    if (currentQuestion < questions.length) {
        setTimeout(() => {
            feedbackElement.textContent = '';
            document.getElementById('answer').value = '';
            showQuestion();
        }, 1500);
    } else {
        setTimeout(() => {
            feedbackElement.textContent = `Fim do jogo! Você acertou ${score} de ${questions.length} perguntas.`;
            document.getElementById('submit').disabled = true;
        }, 1500);
    }
}

document.getElementById('submit').addEventListener('click', checkAnswer);
showQuestion();
