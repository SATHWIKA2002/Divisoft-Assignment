document.addEventListener('DOMContentLoaded', () => {
    const userList = document.getElementById('userList');
    const pagination = document.getElementById('pagination');
    const createBtn = document.getElementById('createBtn');
    const apiUrl = 'https://gorest.co.in/public/v2/users';

    fetchUsers("https://gorest.co.in/public/v2/users");
    function fetchUsers(url) {
        fetch('https://gorest.co.in/public/v2/users');
        
            .then(response => response.json())
            .then(data => {
                displayUsers(data.data);
                displayPagination(data.meta);
            })
            .catch(error => console.error('Error fetching users:', error));
    }
    function displayUsers(users) {
        userList.innerHTML = '';

        users.forEach(user => {
            const row = `
                <tr>
                    <td><img src="${user.avatar}" alt="Avatar"></td>
                    <td>${user.name}</td>
                    <td>${user.gender}</td>
                    <td>${user.email}</td>
                    <td>${user.phone}</td>
                    <td>
                        <button onclick="editUser(${user.id})">Edit</button>
                        <button onclick="deleteUser(${user.id})">Delete</button>
                    </td>
                </tr>
            `;
            userList.innerHTML += row;
        });
    }
    function displayPagination(meta) {
        pagination.innerHTML = '';

        const totalPages = meta.pagination.pages;
        const currentPage = meta.pagination.page;

        for (let i = 1; i <= totalPages; i++) {
            const button = document.createElement('button');
            button.innerText = i;
            if (i === currentPage) {
                button.classList.add('active');
            }
            button.addEventListener('click', () => {
                fetchUsers(`${apiUrl}?page=${i}`);
            });
            pagination.appendChild(button);
        }
    }
    createBtn.addEventListener('click', () => {
        console.log('Create new user clicked');
    });
    window.editUser = function(id) {
        console.log('Edit user with id:', id);
    }

    window.deleteUser = function(id) {
        console.log('Delete user with id:', id);
    }
});
