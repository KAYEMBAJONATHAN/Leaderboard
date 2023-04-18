import Store from './store.js';

class Design {
  static displayUsers() {
    const users = Store.getUser();

    users.forEach((user) => Design.addUserToList(user));
  }

  static addUserToList(user) {
    const list = document.querySelector('#user-list');

    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${user.name}</td>
        <td>${user.score}</td>
    `;
    list.appendChild(row);
  }

  static clearFields() {
    document.querySelector('#name').value = '';
    document.querySelector('#score').value = '';
  }
}

export default Design;