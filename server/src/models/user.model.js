var users = require("../../assets/user.data");

function createUser(user = {}) {
  user.id = users.length + 1;
  users.push(user);
}

function fetchUser(id) {
  const userId = Number(id);
  return users.filter(data => {
    return data.id == userId;
  });
}

function updateUser(user) {
  const userId = user.id;
  for (const obj of users) {
    if (obj.id === userId) {
      Object.assign(obj, user);
      break;
    }
  }
}

function deleteUser(id) {
  let i = 0;
  len = users.length;
  for (i = 0; i < len; i++) {
    const obj = users[i];
    if (obj.id === id) {
      users.splice(i, 1);
      break;
    }
  }
}

module.exports = {
  createUser: createUser,
  fetchUser: fetchUser,
  updateUser: updateUser,
  deleteUser: deleteUser,
  users: users
};
