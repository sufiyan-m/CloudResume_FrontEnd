const countEl = document.getElementById('counter');

updateVisitCount();

function updateVisitCount() {
	fetch('https://u9ef363qq1.execute-api.us-east-1.amazonaws.com/Prod/visitor/')
	.then(res => res.json())
	.then(res => {
		countEl.innerHTML = res;
	});
}