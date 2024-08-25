module.exports = `
<header>
    <div class="container">
        <h1>Ultimate Vacation Destination Blog</h1>
        <nav>
            <a href="/">Home</a>
            <a href="/posts">Posts</a>
            <% if (typeof user === 'undefined') { %>
                <a href="/register">Register</a>
                <a href="/login">Login</a>
            <% } else { %>
                <a href="/posts/create">Create Post</a>
                <span>Welcome, <%= user.username %>!</span>
            <% } %>
        </nav>
    </div>
</header>
`