const localStorage = window.localStorage;
const STORAGE_KEY = 'spelt-users';

function getData() {
  const users = localStorage.getItem(STORAGE_KEY);
  if (users === null) return [];
  return JSON.parse(users);
}

function saveData(obj) {
  const users = getData();
  if (!obj) throw new Error('Please provide a value to save');
  const updatedUsers = [obj, ...users];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedUsers));
}

function deleteData(id) {
  const users = getData();
  if (!id) throw new Error('Please provide identification to delete a user');
  const updatedUser = users.filter((user) => user.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedUser));
}

const result = {
  saveData,
  getData,
  deleteData,
};

export default result;
