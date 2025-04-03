<template>
  <div class="container">
    <Header />
    <router-view></router-view>
  </div>
</template>
<script setup>
import Header from './components/Header.vue';
import { reactive, computed, provide } from 'vue';

const states = reactive({
  todoList: [
    // closure 기반으로 데이터가 관리됨
    { id: 1, todo: 'Todo 1', desc: '설명2', done: false },
    { id: 2, todo: 'Todo 2', desc: '설명2', done: true },
    { id: 3, todo: 'Todo 3', desc: '설명3', done: false },
  ],
});

const addTodo = ({ todo, desc }) => {
  states.todoList.push({
    id: new Date().getTime(),
    todo,
    desc,
    done: false,
  });
};

const updateTodo = (id, { todo, desc }) => {
  const index = states.todoList.findIndex((todo) => todo.id === id);
  states.todoList[index] = { ...states.todoList[index], todo, desc, done };
};

const deleteTodo = (id) => {
  const index = states.todoList.findIndex((todo) => todo.id === id);
  if (index !== -1) {
    states.todoList.splice(index, 1); // Array.prototype.filter() 메서드를 사용하여 코드를 줄일 수 있음
  }
};

const toggleDone = (id) => {
  const index = states.todoList.findIndex((todo) => todo.id === id);
  states.todoList[index].done = !states.todoList[index].done;
};

provide(
  'todoList',
  computed(() => states.todoList)
); // 읽기 전용

provide('actions', {
  addTodo,
  updateTodo,
  deleteTodo,
  toggleDone,
}); // 읽기/쓰기
</script>
<style lang=""></style>
