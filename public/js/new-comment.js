const newComment = async (event) => {
    event.preventDefault();
    const post_id = parseInt(window.location.pathname.split('/').pop());
    const content = document.querySelector('#content-new-comment').value.trim();

    if (content) {
        const res = await fetch(`/api/comments`, {
            method: 'POST',
            body: JSON.stringify({ comment_text: content, post_id }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (res.ok) {
            document.location.reload();
        } else {
            console.log('Response status:', response.status);
            console.log('Response text:', await response.text());
            alert('Failed to create a comment.');
        }
    }
};

const newCommentHandler = document.querySelector('.new-comment-form');
if (newCommentHandler) {
    newCommentHandler.addEventListener('submit', newComment)
}