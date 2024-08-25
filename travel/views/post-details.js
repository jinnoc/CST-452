const header = require('./partials/header');
const footer = require('./partials/footer');

module.exports = `
<%- ${header} %>

<main>
    <div class="container">
        <h2><%= post.title %></h2>
        <p><%= post.content %></p>
        <p><strong>Destination:</strong> <%= post.destination %></p>
        <p><strong>Author:</strong> <%= post.User.username %></p>

        <hr>

        <h3>Comments</h3>
        <% post.Comments.forEach(comment => { %>
            <div>
                <strong><%= comment.User.username %>:</strong>
                <p><%= comment.content %></p>
            </div>
        <% }) %>

        <hr>

        <% if (typeof user !== 'undefined') { %>
            <form action="/comments/<%= post.id %>" method="POST">
                <textarea name="content" placeholder="Add a comment..." required></textarea>
                <button class="btn btn-primary" type="submit">Comment</button>
            </form>
        <% } else { %>
            <p><a href="/login">Login</a> to comment.</p>
        <% } %>
    </div>
</main>

<%- ${footer} %>
`