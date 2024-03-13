const post_is = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
];

const updatePost = async (event) => {
    event.preventDefault();
    const title = document.querySelector("#title-update-sw-post").value.trim();
    const content = document.querySelector("#content-update-sw-post").value.trim();

    if (title && content) {
        const response = await fetch(`/api/post/${post_id}`, {
            method: "PUT",
            body: JSON.stringify({ title, content }),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            document.location.replace("/dashboard");
        } else {
            alert("Unable to update");
        }
    }
};

const deletePost = async (event) => {
    event.preventDefault();
    const response = await fetch(`/api/posts/${post_id}`, {
        method: "DELETE",
    });

    if (response.ok) {
        document.location.replace("/dashboard");
    } else {
        alert("Unable to delete");
    }
};

const updatePostButton = document.querySelector("#update-sw-post");

if (updatePostButton) {
    updatePostButton.addEventListener("click", updatePost);
}

const deletePostButton = document.querySelector("#delete-sw-post");

if (deletePostButton) {
    deletePostButton.addEventListener("click", deletePost);
}