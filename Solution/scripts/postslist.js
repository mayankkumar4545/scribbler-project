function viewDeletePostModal(id) {
    document.getElementById('deletePostModal').style.display = 'block';
    document.getElementById('deletePostModal').setAttribute('idToDelete', id);
}

function closeDeletePostModal(event) {
    document.getElementById('deletePostModal').style.display = 'none';
    event.preventDefault(); // prevents page from refreshing
}

function viewFullPost() {
    window.location.href = "./post.html";
}

function deletePost(event) {
    event.preventDefault(); // prevents page from refreshing
    document.getElementById('deletePostModal').style.display = 'none';
    var idToDelete = document.getElementById('deletePostModal').getAttribute('idToDelete');
    document.getElementById(idToDelete).remove();
}