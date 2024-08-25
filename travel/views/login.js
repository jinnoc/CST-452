const header = require('./partials/header');
const footer = require('./partials/footer');

module.exports = `
<%- ${header} %>

<main>
    <div class="container">
        <h2>Login</h2>
        <form action="/auth/login" method="POST">
            <input type="email" name="email" placeholder="Email" required>
            <input type="password" name="password" placeholder="Password" required>
            <button type="submit" class="btn btn-primary">Login</button>
        </form>
    </div>
</main>

<%- ${footer} %>
`