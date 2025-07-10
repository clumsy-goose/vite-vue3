<script setup>
import { ref } from 'vue'
import { fetchPost } from '../request/indes';

defineProps({
  msg: String,
})

const count = ref('')
const result = ref('')
const result2 = ref('')
const hanldeClick = async () => { 
  const url = process.env.NODE_ENV === 'production' ? 'helloworld' : 'api/helloworld';
  const res = await fetch(url);
  const text = await res.text()
  console.log("🚀 ~ hanldeClick ~ text:", text)
  result.value = text;
};
const hanldeClick2 = async () => { 
  const res = await fetchPost(1);
  console.log("🚀 ~ hanldeClick2 ~ res:", res)
  // result.value = JSON.stringify(res);
  result2.value = `标题: ${res.title}, 内容: ${res.body}`;
};

const handleCount = async () => {
  count.value++;
  const url = process.env.NODE_ENV === 'production' ? `get/${count.value}?from=homepage&name=test` : `api/get/${count.value}?from=homepage&name=test`;
  const res = await fetch(url);
  console.log("🚀 ~ handleCount ~ count:", res);
}

const handlePost = async () => {
  const url = process.env.NODE_ENV === 'production' ? 'post' : 'api/post';
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: '测试标题',
      content: '测试内容'
    })
  });
  const json = await res.json();
  console.log("🚀 ~ handlePost ~ json:", json);
}

</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="handleCount">点击触发api/get/:id {{ count }}</button>
    <button @click="hanldeClick"> 点击触发边缘函数 </button>
    <button @click="hanldeClick2"> 点击触发后端接口 </button>
    <button @click="handlePost"> 点击触发post请求 </button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
    <p>{{ result }}</p>
    <p>{{ result2 }}</p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
