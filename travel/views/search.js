const header = require('./partials/header');
const footer = require('./partials/footer');

module.exports = `
<%- ${header} %>

<main>
    <div class="container">
        <h2>Search Results for "<%= query %>"</h2>
        <% posts.forEach(post => { %>
            <div class="post">
                <h3><%= post.title %></h3>
                <p><%= post.content.substring(0, 100) %>...</p>
                <p><strong>Destination:</strong> <%= post.destination %></p>
                <p><strong>Author:</strong> <%= post.User.username %></p>
                <a href="/posts/<%= post.id %>" class="btn btn-primary">Read More</a>
            </div>
        <% }) %>
    </div>
</main>

<%- ${footer} %>
`