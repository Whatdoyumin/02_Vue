<template lang="">
  <div class="row">
    <div class="col">
      <ul class="list-group">
        <!-- 할 일 목록 요소 컴포넌트 -->

        <!-- props로 받은 데이터 수정 X
           -> emit을 이용해서 부모로 전달하여 수정
           
           TodoItem -> TodoList -> App
        -->
        <TodoListItem
          v-for="todo in todoList"
          :todoItem="todo"
          @toggle-completed="emit('toggle-completed', $event)"
          @delete-todo="emit('delete-todo', $event)"
        />
        <!-- 
          $event : 자식 컴포넌트에서 방출된 payload 참조 변수 (id)
        -->
      </ul>
    </div>
  </div>
</template>
<script setup>
import TodoListItem from './TodoListItem.vue';

const props = defineProps({
  // 전달 받은 todolist는 배열 형태, 필수 데이터
  todoList: { type: Array, required: true },
});

const emit = defineEmits(['toggle-completed', 'delete-todo']);
</script>
