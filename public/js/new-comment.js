const newComment = async (event) => {
    event.preventDefault();
    const post_id = parseInt(window.location.pathname.split('/').pop());
    const content = document.querySelector('#content-new-comment').value.trim();

    if (content) {
        const response = await fetch(`/api/comments`, {
            method: 'POST',
            body: JSON.stringify({ comment_text: content, post_id }),
            headers: { 'Content-Type': 'application/json' },
        })
    }
}