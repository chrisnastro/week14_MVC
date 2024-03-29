const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
];

const updatePost = async (event) => {
    event.preventDefault();
    const title = document.querySelector("#title-update-post").value.trim();
    const content = document.querySelector("#content-update-post").value.trim();

    if (title && content) {
        const res = await fetch(`/api/posts/${post_id}`, {
            method: "PUT",
            body: JSON.stringify({ title, content }),
            headers: { "Content-Type": "application/json" },
        });

        if (res.ok) {
            document.location.replace("/dashboard");
        } else {
            alert("Unable to update");
        }
    }
};

const updatePostButton = document.querySelector("#update-post");

if (updatePostButton) {
    updatePostButton.addEventListener("click", updatePost);
}

const deletePostButton = document.querySelector("#delete-post");

if (deletePostButton) {
    deletePostButton.addEventListener("click", deletePost);
}