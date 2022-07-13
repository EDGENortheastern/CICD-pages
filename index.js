import { calculateResults } from './logic.mjs';

// Listen for submit button clicks
document.getElementById('percent--form').addEventListener('submit', (e) => {
    e.preventDefault();
    const amount = document.getElementById('amount').value;
    const percent = document.getElementById('percent').value;
    const result = document.getElementById('result');
    result.value = calculateResults(amount, percent);
});