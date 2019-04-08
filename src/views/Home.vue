<template>
  <div class="Lesson1.0">
    <router-link to="/home">Back</router-link> |
    <router-link to="/Lesson1.1">Next</router-link>
    <h1>Welcome to the Academy!</h1>
    <div class ="textbody">You're here because you need money to pay for college and aren't afraid to think out of the box.
<br>
<br>
I like your style.
<br>
<br>
This mini-class will teach you what you need to know about Income Share Agreements.
</div>

  </div>
</template>

<script>
// @ is an alias to /src
// import NavBar from '@/components/NavBar.vue'

import {mapState,mapMutations} from 'vuex';

export default {
  name: 'home',
  // components:{
  //   HelloWorld
  // },
  data(){ //local data
    return {
      localMagic_number: 3
    }
  },
  // components: {NavBar},
  computed: mapState([
    'magic_number'
  ]),
  methods: mapMutations([
    'increment',
    'incrementBy',
    'decrement'
  ])
}


// <button @click='increment'>+</button>
// <button @click='decrement'>-</button>

// computed: mapState({
//   magic_number: state => state.magic_number,
//   magic_numberAlias: 'magic_number',
//   magic_numberPlusLocalState(state){
//     return state.magic_number + this.localMagic_number;
//   }
// })

</script>
