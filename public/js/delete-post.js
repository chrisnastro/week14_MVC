const deletePost = async (post_id) => {
    const res = await fetch(`/api/posts/${post_id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
        document.location.reload();
    } else {
        alert("Unable to delete");
    }
};

const deletePostHandler = (event) => {
    if (event.target.matches(".delete-post")) {
        const post_id = event.target.getAttribute("data-post-id");
        deletePost(post_id);
    }
};

document.addEventListener("click", deletePostHandler);