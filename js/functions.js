

const button = document.getElementById('calculate');

const calculate = () => {
    const age = document.getElementById('ika').value;
    const maxHeartRate = 220 - age;
    const lowerLimit = maxHeartRate * 0.65
    const upperLimit = maxHeartRate * 0.85
    const limit = document.getElementById('limits');
    limit.innerHTML = lowerLimit.toFixed(0) +"-"+ upperLimit.toFixed(0)
};

button.addEventListener('click',calculate)