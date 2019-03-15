import "./../stylesheet/main.scss";
var root = document.querySelector(".Posts-sec");
var html;
fetch("https://www.reddit.com/r/html.json").then(res => res.json()).then(obj => {
	obj.data.children.forEach(v => {
		html = 
		`<section class="cards">
			<div class="left-sec-card">
				<span><i class="fas fa-arrow-up"></i></span>
				<p class="score">${v.data.score}</p>
				<span><i class="fas fa-arrow-down"></i></span>
			</div>

			<div class="card">
				<h2 class="title">${v.data.title}</h2>
				<p class="para">${v.data.selftext}</p>
				
				<div class="Comments-sec">
					<span><i class="fas fa-comment-alt"></i>Comments</span>
					<span class="two"><i class="fas fa-comment-alt"></i>Share</span>
					<span class="three"><i class="fas fa-bookmark"></i>Save</span>
					<span class="four">...</span>
				</div>
			</div>
		</section
		`;
		root.innerHTML += html;
	});
});