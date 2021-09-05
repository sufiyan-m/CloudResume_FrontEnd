const countEl = document.getElementById('counter');

updateVisitCount();

function updateVisitCount() {
	fetch('https://tlbzb3gjdf.execute-api.us-east-1.amazonaws.com/msufiyan/visitors')
	.then(res => res.json())
	.then(res => {
		countEl.innerHTML = res.value;
	});
}
