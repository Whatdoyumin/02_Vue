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
import { ref, reactive, onMounted } from 'vue';
import { useRoute } from 'vue-router'; // 현재 라우팅 정보를 담고 있는 객체

// 현재 페이지 라우팅 시 id 파라미터에 전달된 값
const currentRoute = useRoute();

// 입력된 id 또는 /get/:id의 id 파라미터 값
const id = ref(currentRoute.params.id);

const state = reactive({ todo: {} });

const getTodo = async () => {
  // 'api' === 'http:/'
  // ref() == 객체 -> 데이터 접근 시 .value 이용
  const response = await axios.get(`/api/todos/${id.value}`);

  state.todo = response.data;
  // 조회된 후 화면이 리렌더링 될 것.
};

onMounted(() => {
  getTodo();
});
</script>
