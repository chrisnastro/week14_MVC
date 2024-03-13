const newPost = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title-new-post').value.trim();
    const content = document.querySelector('#content-new-post').value.trim();

    if (title && content) {
        const res = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (res.ok) {
            document.location.replace('/dashboard');
        } else {
            alert("Unable to create new post");
        }
    }
};

const newPostForm = document.querySelector('.new-post-form');
if (newPostForm) {
    newPostForm.addEventListener('submit', newPost);
}