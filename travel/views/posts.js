const header = require('./partials/header');
const footer = require('./partials/footer');

module.exports = `
<%- ${header} %>

<main>
    <div class="container">
        <h2>Explore Vacation Destinations</h2>
        <% posts.forEach(function(post) { %>
            <div class="post">
                <h3><%= post.title %></h3>
                <p><%= post.content.substring(0, 100) %>...</p>
                <p><strong>Destination:</strong> <%= post.destination %></p>
                <p><strong>Author:</strong> <%= post.author.username %></p>
            </div>
        <% }) %>
    </div>
</main>

<%- ${footer} %>
`