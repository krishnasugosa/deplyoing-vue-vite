<template>
  <div class="container-xxl">
    <div class="wrapper-container">
      <!--navigation bar-->
      <nav class="p-5 flex justify-between">
        <h2 class="transition ease text-3xl text-white ml-7 hover:text-green-500 cursor-default duration-1000 ... " @mouseenter="logo = 'Vue.JS'" @mouseleave="logo = 'Vue.JV'">{{ logo }}</h2>
        <div class="list-nav flex m-1">
            <select name="agama" class="text-green-500 text-2xl bg-transparent outline-none">
                 <option class="bg-zinc-900 text-white text-sm">Docs</option>
                 <option class="bg-zinc-900 text-white text-sm">Guide</option>
                 <option class="bg-zinc-900 text-white text-sm">Tutorial</option>
                 <option class="bg-zinc-900 text-white text-sm">QA</option>
            </select>
          <h2 class="text-white text-2xl m-2 hover:text-green-500 cursor-pointer">API</h2>
          <h2 class="text-white text-2xl m-2 hover:text-green-500 cursor-pointer">Playground</h2>
          <h2 class="text-white text-2xl m-2 hover:text-green-500 cursor-pointer">About</h2>
          <h2 class="text-white text-2xl m-2 hover:text-green-500 cursor-pointer">Sponsor</h2>
        </div>
      </nav>

      <!--hero section-->
      <section class="container-1 p-20">
        <div class="wrapper-container-1 flex flex-col justify-center items-center ">
          <li class=" flex gap-10">
            <h2 class="text-white text-5xl" v-for="clickMe in TryClickMe" ><a :href="clickMe.url">{{ clickMe.try }}</a></h2>
          </li>
         <button class="w-40 mt-10 p-2 rounded-md border-4 border-white text-white text-4xl  flex justify-center items-center transition ease hover:border-green-500 duration-1000" @click="countNumber">{{count}}</button>
        </div>
      </section>

      <section class="flex justify-center items-center">
        <div class="wrapper-cara p-5 flex flex-col justify-center items-center w-96">
        <h2 class="text-center text-white text-3xl">CHESS SHIFT</h2>
        <div class="karakter" :style="karakterStyle"></div>
        <div class="position-btn flex justify-center items-center ">
          <button class="border-4 border-white text-white m-5 p-2 w-28" @click="kingLeft">LEFT</button>
          <button class="border-4 border-white text-white m-5 p-2 w-28" @click="kingRight">RIGHT</button>
        </div>
      </div>
      </section>

      <section class="p-5">
        <h2 class="text-center text-white text-5xl italic ... mt-10" data-aos="fade-right" v-if="decisionLove === '👍'">⚡VUE JS IS COOL👍</h2>
        <h2 class="text-center text-white text-5xl italic ... mt-10" data-aos="fade-right" v-else>WHY❓</h2>
      </section>

      <section class="p-5">
        <h2 class=" text-center text-green-500 text-5xl bold italic ..." data-aos="fade-up" >{{counting}}%</h2>
      </section>

      <section class="p-5">
        <h2 class=" text-center text-blue-300 text-5xl bold italic ..." @click="countingValue.hitung++">reactive count: {{ countingValue.hitung }}</h2>
      </section>

      <section class="p-5">
        <h2 class=" text-center text-green-700 text-5xl bold" :style="{rotate:'90deg' , translate:'2rem'}">{{ reactiveText.text[0][2][2] }}</h2>
        <h2 class=" text-center text-white text-5xl bold">caveat unwrapped: {{ id + 2 }}</h2>
        <h2 class=" text-center text-white text-5xl bold mt-5">{{ PublisherBooks }}</h2>
        <div :class="{ active: isActive }"></div>
      </section>
     
     
    </div>
  </div>
  
</template>

<script>

 export default{
  data(){
    return{
      logo: 'Vue.JV',
      TryClickMe :[
        {try:'TRY' ,url: 'https://www.google.com/search?q=TRY&rlz=1C1UEAD_enID1037ID1037&oq=TRY&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiPAjIHCAIQABiPAjIHCAMQABiPAjIGCAQQRRg8MgYIBRBFGDwyBggGEEUYPTIGCAcQRRg80gEHODI3ajBqN6gCCLACAQ&sourceid=chrome&ie=UTF-8' },
        {try:'TO', url:'https://www.google.com/search?q=TO%0D%0A&sca_esv=6bd2b8a8fcbe8e84&rlz=1C1UEAD_enID1037ID1037&sxsrf=ADLYWIKPLTDQ8MVY53q-IsUnLFMgw44ryw%3A1728191843608&ei=Yx0CZ83sJIPG4-EP6teZoQU&ved=0ahUKEwiNqsSngPmIAxUD4zgGHeprJlQQ4dUDCA8&uact=5&oq=TO%0D%0A&gs_lp=Egxnd3Mtd2l6LXNlcnAiA1RPCjIKECMYgAQYJxiKBTIKEAAYgAQYQxiKBTIOEAAYgAQYsQMYgwEYigUyChAAGIAEGEMYigUyCxAAGIAEGLEDGIMBMg4QLhiABBixAxjRAxjHATILEAAYgAQYsQMYgwEyCxAAGIAEGLEDGIMBMgsQABiABBixAxiDATILEAAYgAQYsQMYgwFIxhRQAFjGA3AAeAGQAQCYAX-gAfYBqgEDMC4yuAEDyAEA-AEBmAICoAKLAsICChAuGIAEGEMYigXCAggQABiABBixA8ICGRAuGIAEGEMYigUYlwUY3AQY3gQY4ATYAQGYAwC6BgYIARABGBSSBwMwLjKgB6EW&sclient=gws-wiz-serp'},
        {try:'CLICK', url:'https://www.google.com/search?q=click&sca_esv=6bd2b8a8fcbe8e84&rlz=1C1UEAD_enID1037ID1037&sxsrf=ADLYWIIpoAQtTsxTPXyDlz0Pr7UFdZzC5A%3A1728191873172&ei=gR0CZ6eUCtae4-EPlty5uAU&ved=0ahUKEwjn2NC1gPmIAxVWzzgGHRZuDlcQ4dUDCA8&uact=5&oq=click&gs_lp=Egxnd3Mtd2l6LXNlcnAiBWNsaWNrMg0QLhiABBixAxhDGIoFMg4QLhiABBjRAxjHARjLATIIEC4YgAQYywEyCBAAGIAEGLEDMggQABiABBjLATIOEC4YgAQY0QMYxwEYywEyCBAAGIAEGMsBMgUQABiABDIIEAAYgAQYywEyDhAuGIAEGMcBGMsBGK8BMhwQLhiABBixAxhDGIoFGJcFGNwEGN4EGOAE2AEBSMcFUABYxgNwAHgBkAEAmAGVAaABpwWqAQMwLjW4AQPIAQD4AQGYAgWgAuUFwgIKECMYgAQYJxiKBcICERAuGIAEGLEDGNEDGIMBGMcBwgILEAAYgAQYsQMYgwHCAg4QLhiABBixAxiDARiKBcICDhAAGIAEGLEDGIMBGIoFwgIKEAAYgAQYQxiKBcICEBAuGIAEGLEDGEMYgwEYigXCAgoQLhiABBhDGIoFwgILEC4YgAQY0QMYxwHCAg4QLhiABBixAxjRAxjHAcICCBAuGIAEGLEDmAMAugYGCAEQARgUkgcDMC41oAeNOg&sclient=gws-wiz-serp'},
        {try:'ME', url:'https://www.google.com/search?q=ME%0D%0A&sca_esv=6bd2b8a8fcbe8e84&rlz=1C1UEAD_enID1037ID1037&sxsrf=ADLYWILl_PJqCmE74iesUc-COucrk3GDTg%3A1728191887779&ei=jx0CZ-anL-SE4-EP__jd4AQ&ved=0ahUKEwimq8y8gPmIAxVkwjgGHX98F0wQ4dUDCA8&uact=5&oq=ME%0D%0A&gs_lp=Egxnd3Mtd2l6LXNlcnAiA01FCjIKECMYgAQYJxiKBTIKEAAYgAQYQxiKBTIOEAAYgAQYsQMYgwEYigUyDhAAGIAEGLEDGIMBGIoFMhAQLhiABBjRAxhDGMcBGIoFMhAQLhiABBjRAxhDGMcBGIoFMgUQABiABDILEC4YgAQYsQMYgwEyBRAAGIAEMgUQABiABEilGVC4B1iFCnABeAGQAQCYAYUBoAGFAqoBAzAuMrgBA8gBAPgBAZgCA6ACoQKoAhHCAgcQIxgnGOoCwgIWEC4YgAQYQxi0AhjIAxiKBRjqAtgBAcICHBAuGIAEGNEDGEMYtAIYxwEYyAMYigUY6gLYAQHCAgQQIxgnwgIIEAAYgAQYsQPCAg4QLhiABBixAxiDARiKBZgDC7oGBggBEAEYCJIHAzEuMqAH8B8&sclient=gws-wiz-serp'}
      ],
      count: 0,
      karakter : 0,
      decisionLove: '👍',

    }
  },


 methods:{
   countNumber(){
    if (typeof this.count === 'number') {
        this.count++;
      }
    if(this.count == 10){
       this.count = "yay🤓";
    }
   },
   kingLeft(){
      this.karakter-=10
   },
   kingRight(){
      this.karakter+=10
   }
 },
 computed:{
  karakterStyle(){
    return{
         transform: `translateX(${this.karakter}px)`,
         transition: 'transform 0.3s ease'
    }
  }
 }

 }

</script>

<script setup>
import { ref } from 'vue';
//import { reactive } from 'vue';
import { reactive,computed } from 'vue';
const counting = ref(0);

window.addEventListener('scroll',()=>{
  if(scrollY >= 200){
    setInterval(() => {
    if(counting.value >= 0 && counting.value <= 99){
      counting.value++;
    }
  }, 80);
  }
})

if(counting.value == 100){
   counting.value = 100;
}

const countingValue = reactive( {hitung:0 });
const reactiveText = reactive(
  {text:[
    [

    [0,1,1],
    [1,2,2],
    [3,2,1]
   ],
   [
    [1,1,1],
    [0,2,2],
    [2,1,1]
   ],
   [
    [0,1,0],
    [1,2,3],
    [1,2,1]
   ]
  ]
}
);

const count = ref(0);
const obj = {
  id: ref(2)
}

const { id } = obj;

const author = reactive({
  game:[
    [1,2,3],
    ['madara','bazara','naruto'],
    [3,2,1]
  ],
  game2:[
    ,'uzumaki','gta5','warriors'
  ]
  
});

const PublisherBooks = computed(()=>{
   return author.game + author.game2;
});


const now = computed(() => Date.now())
console.log(now)
</script>