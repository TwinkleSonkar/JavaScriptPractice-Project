document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('.to-do-input input');
  const addButton = document.querySelector('.to-do-input button');
  const toDoList = document.createElement('ul');
  toDoList.classList.add('to-do-list');
  document.querySelector('.to-do-box').appendChild(toDoList);

  addButton.addEventListener('click', addTodo);

  function addTodo() {
    const taskText = input.value.trim();
    if (taskText !== '') {
      const listItem = document.createElement('li');
      listItem.textContent = taskText;

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => {
        toDoList.removeChild(listItem);
      });

      listItem.appendChild(deleteButton);
      toDoList.appendChild(listItem);

      input.value = '';
    }
  }
});
