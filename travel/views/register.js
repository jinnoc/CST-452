const header = require('./partials/header');
const footer = require('./partials/footer');

module.exports = `
<%- ${header} %>

<main>
    <div class="container">
        <h2>Register</h2>
        <form action="/auth/register" method="POST">
            <input type="text" name="username" placeholder="Username" required>
            <input type="email" name="email" placeholder="Email" required>
            <input type="password" name="password" placeholder="Password" required>
            <button type="submit" class="btn btn-primary">Register</button>
        </form>
    </div>
</main>

<%- ${footer} %>
`