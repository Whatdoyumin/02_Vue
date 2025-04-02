<template>
  <div>
    <h1>/get/:id (단건 조회)</h1>
    <hr />
    <h3>조회할 Todo의 id 입력</h3>
    <div>
      <input type="text" placeholder="id 입력" v-model="id" />
      <button @click="getTodo">조회</button>
    </div>
  </div>

  <div>
    <h3>조회 결과</h3>
    <ul>
      <li>id: {{ state.todo.id }}</li>
      <li>todo: {{ state.todo.todo }}</li>
      <li>desc: {{ state.todo.desc }}</li>
      <li>done: {{ state.todo.done }}</li>
    </ul>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref, reactive } from 'vue';

// 입력된 id
const id = ref('1');

const state = reactive({ todo: {} });

const getTodo = async () => {
  // 'api' === 'http:/'
  // ref() == 객체 -> 데이터 접근 시 .value 이용
  const response = await axios.get(`http://localhost:3000/todos/${id.value}`);

  state.todo = response.data;
  // 조회된 후 화면이 리렌더링 될 것.
};
</script>
