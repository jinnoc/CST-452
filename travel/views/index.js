const header = require('./partials/header');
const footer = require('./partials/footer');

module.exports = `
<%- ${header} %>

<main>
    <div class="container">
        <h2>Welcome to the Ultimate Vacation Destination Blog</h2>
        <p>Your go-to platform for exploring the world's top vacation spots!</p>
    </div>
</main>

<%- ${footer} %>
`