document.getElementById('review-button').addEventListener('click', getReviews);

function getReviews() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => {
            let output = '';
            data.forEach(function (comment) {
                output += `
                <section>
                    <h3>${comment.name}</h3>
                    <h4>${comment.email}</h4>
                    <p>${comment.body}</p>
                </section>
                `;
            })
            document.getElementById('review').innerHTML = output;
        });
}