<template>
  <h1>All (전체 조회)</h1>
  <table class="table table-borderedß">
    <thead>
      <th>Done</th>
      <th>ID</th>
      <th>Todo</th>
      <th>Description</th>
      <th>Delete</th>
    </thead>

    <tbody>
      <tr v-for="todo in state.todos" :key="todo.id">
        <td>
          <input
            type="checkbox"
            :checked="todo.done"
            @change="updateTodo(todo)"
          />
        </td>

        <td>{{ todo.id }}</td>
        <td>{{ todo.todo }}</td>
        <td>{{ todo.desc }}</td>
        <td>
          <button @click="deleteTodo(todo)">삭제</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { reactive } from 'vue';
import axios from 'axios';

// 상태 변수 선언 -> 값 변경 시 반응 -> 컴포넌트 다시 렌더링
const state = reactive({
  todos: [],
});

// 비동기로 서버로부터 모든 할 일 목록을 얻어오기
const fetchTodoList = async () => {
  // 'api' === 'http:/'
  const response = await axios.get('/api/todos');

  state.todos = response.data;
};

fetchTodoList();
</script>
