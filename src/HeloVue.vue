<template>
    <h2 class="text-white text-center" :class="{active:Isactive}">hello world</h2>
    <div :style="[StyleFont,StyleFont2]">WARNING</div>
    <div class="flex justify-center align-center">
      <button class="text-white border-4 w-28 flex justify-center align-center mt-5" @click="text.txt = !text.txt">{{ text.txt }}</button>
    </div>
    <h2 class="text-green-500 text-center mt-5 text-4xl" v-if="text.txt">TRUE</h2>
    <h2 class="text-red-600 text-center mt-5 text-4xl" v-else>FALSE</h2>
    <div class="flex justify-center align-center">
      <button class="text-white border-4 w-28 flex justify-center align-center mt-5" @click="text.ok = !text.ok">
         V-<span v-if="text.ok" class="text-green-500">{{text.ok}}</span>
           <span v-else class="text-red-600">{{text.ok}}</span>-show
           
      </button>
    </div>
    <h2 class="text-white text-center" v-show="text.ok">V-SHOW</h2>
    <div>
      <h2 class="text-white text-center" v-if="text.abc === 'A'">A</h2>
      <h2 class="text-white text-center" v-else-if="text.abc === 'B'">B</h2>
      <h2 class="text-white text-center" v-else-if="text.abc === 'C'">C</h2>
      <h2 class="text-white text-center" v-else>NOT ABC!</h2>
    </div>
    <section>
      <h1 class="text-yellow-500 text-center text-4xl">Missing Status</h1>
      <p class="text-white text-center mt-2" v-if="text.statushide">If you can see this the status <span class="text-green-500">TRUE</span></p>
      <p class="text-white text-center mt-2" v-else-if="!text.statushide">If you can see this the status <span class="text-red-600">FALSE</span></p>
    </section>

    <ul class="flex justify-center align-center">
      <li class="text-white m-3" v-for="(array,index) in ArrayOfList">
         {{ ParentList }} -  {{ index }} - {{ array.message }} 
      </li>
    </ul>

    <li class="text-white text-center" v-for="n in 10">{{n}}</li>
    <li class="text-white text-center" v-for="w of word" :key="w.txt">{{ w.txt }}</li>

    <ul v-for="condi in condition">
      <li class="text-white text-center" v-if="!condi.txt">{{ condi.status }}</li>
    </ul>

</template>

<script setup>
import { reactive,ref } from 'vue';

const ParentList = ref('parent')
const ArrayOfList = ref([{message:'VUE'},{message:'ilvu'}]);

const StyleFont = reactive({
   textAlign:'center',
   color:'red',
   fontSize:'30px'
});
const StyleFont2 = reactive({
  textDecoration:'overline',
  rotate:'30deg',
});

const condition = reactive([
  { txt: true, status: 'loser' },
  { txt: false, status: 'winner' }
])

const word = reactive([
  {
    txt:'SENTENCE',
  }
])

const text = reactive({
   txt:true,
   ok:true,
   abc:'A',
   statushide:false
});


</script>