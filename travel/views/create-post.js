const header = require('./partials/header');
const footer = require('./partials/footer');

module.exports = `
<%- ${header} %>

<main>
    <div class="container">
        <h2>Create a New Post</h2>
        <form action="/posts" method="POST">
            <input type="text" name="title" placeholder="Post Title" required>
            <input type="text" name="destination" placeholder="Destination" required>
            <textarea name="content" placeholder="Post Content" required></textarea>
            <input type="text" name="tags" placeholder="Tags (comma separated)">
            <button type="submit" class="btn btn-primary">Create Post</button>
        </form>
    </div>
</main>

<%- ${footer} %>
`