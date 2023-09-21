function displayGreeting() {
    const name = document.getElementById('name').value;
    const greetingDiv = document.getElementById('greeting');
    greetingDiv.innerText = `Hello, ${name}! Have a colorful day!`;
  }
  