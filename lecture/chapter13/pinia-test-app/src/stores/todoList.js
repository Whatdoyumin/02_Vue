import { defineStore } from 'pinia';
import { computed, reactive } from 'vue';

export const useTodoListStore = defineStore('todoList', () => {
  // 반응형 상태
  const state = reactive({
    todoList: [
      { id: 1, todo: 'Learn Vue', done: false },
      { id: 2, todo: 'Learn Pinia', done: false },
      { id: 3, todo: 'Learn Vue Router', done: false },
      { id: 4, todo: 'Learn Vuex', done: false },
      { id: 5, todo: 'Learn Vue Composition API', done: false },
    ],
  });

  // 액션
  const addTodo = (todo) => {
    state.todoList.push({ id: new Date().getTime(), todo, done: false });
  };

  const deleteTodo = (id) => {
    let index = state.todoList.findIndex((todo) => todo.id === id);
    state.todoList.splice(index, 1);
  };

  const toggleDone = (id) => {
    let index = state.todoList.findIndex((todo) => todo.id === id);
    state.todoList[index].done = !state.todoList[index].done;
  };

  const doneCount = computed(() => {
    return state.todoList.filter((todoItem) => todoItem.done === true).length;
  });

  const todoList = computed(() => state.todoList);

  return { todoList, addTodo, deleteTodo, toggleDone, doneCount };
  // doneCount는 구조 분해 할당이 불가능. computed를 이용해서 나타내야 함 (읽기 전용)
});
