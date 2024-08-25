const header = require('./partials/header');
const footer = require('./partials/footer');

module.exports = `
<%- ${header} %>

<main>
    <div class="container">
        <h2>Admin Dashboard</h2>
        <table class="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <% posts.forEach(post => { %>
                    <tr>
                        <td><%= post.title %></td>
                        <td><%= post.User.username %></td>
                        <td>
                            <form action="/admin/approve/<%= post.id %>" method="POST" style="display:inline;">
                                <button class="btn btn-success">Approve</button>
                            </form>
                            <form action="/admin/reject/<%= post.id %>" method="POST" style="display:inline;">
                                <button class="btn btn-danger">Reject</button>
                            </form>
                        </td>
                    </tr>
                <% }) %>
            </tbody>
        </table>
    </div>
</main>

<%- ${footer} %>
`