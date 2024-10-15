async function askQuestion() {
    const question = document.getElementById("questionInput").value;

    // 调用Ragflow API
    const response = await fetch('http://localhost/v1/api/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ question: question })
    });

    const data = await response.json();
    document.getElementById("answer").innerText = data.answer;
}
