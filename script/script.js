document.getElementById('voting').addEventListener('click', (event) => {
    if (event.target.classList.contains('emoji-vote')) {
        let voteCount = event.target.nextElementSibling;
        let currentVotes = parseInt(voteCount.textContent);
        voteCount.textContent = currentVotes + 1;
    }
});