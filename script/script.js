document.querySelectorAll('.emoji-vote').forEach((emoji, index) => {
    emoji.addEventListener('click', () => {
        let voteCount = emoji.nextElementSibling;
        let currentVotes = parseInt(voteCount.textContent);
        voteCount.textContent = currentVotes + 1;
    });
});