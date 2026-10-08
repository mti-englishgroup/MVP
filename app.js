document.getElementById('process-btn').addEventListener('click', () => {
    const inputText = document.getElementById('input-text').value;
    
    if (!inputText.trim()) {
        alert('Введите текст для анализа.');
        return;
    }

    const outputSection = document.getElementById('output-section');
    const resultText = document.getElementById('result-text');
    const inspectorMetric = document.getElementById('inspector-metric');

    outputSection.style.display = 'block';

    // Моковая логика для демонстрации интерфейса без бэкенда
    if (inputText.toLowerCase().includes('you broke everything')) {
        resultText.textContent = 'Keep the existing user == null check and add the same check to updateUser.';
        inspectorMetric.textContent = 'Было: 78% (Пассивная агрессия) -> Стало: 4% (Нейтрально)';
    } else {
        resultText.textContent = 'Предлагаем скорректировать формулировку комментария с учетом сохранения технического контекста.';
        inspectorMetric.textContent = 'Было: 65% (Раздражение) -> Стало: 2% (Нейтрально)';
    }
});

document.querySelectorAll('.feedback-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const vote = e.target.getAttribute('data-vote');
        console.log('Фидбек пользователя:', vote);
        alert('Спасибо, оценка зафиксирована для последующего дообучения модели.');
    });
});
