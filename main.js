const questionsBox = document.querySelectorAll('.question-container');

questionsBox.forEach(qBox => {
		qBox.addEventListener('click', () => {
				showAns(qBox)
		});
});

function showAns(box) {
		const question = document.querySelector(`#${box.id} .question`);
		const arrowDownImg = document.querySelector(`#${box.id} .arrow-down`);
		const answer = document.querySelector(`#${box.id} .answer`);
		
		if (box.classList.contains('clicked')) {
				answer.style.display = 'block';
				question.classList.add('active');
				arrowDownImg.classList.add('rotate');
				box.classList.remove('clicked');
		}
		else {
				answer.style.display = 'none';
				question.classList.remove('active');
				arrowDownImg.classList.remove('rotate');
				box.classList.add('clicked');
		}
}
