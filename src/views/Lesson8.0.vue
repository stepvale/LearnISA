<template>
  <div class="Lesson8.0">
    <router-link to="/Lesson7.0">Back</router-link> |
    <router-link to="/About">Next</router-link>

    <h1>Share this Course</h1>
    <div class ="textbody">
      Please share this course with your parents (or student).

      If you have any comments, questions, or feedback, email me at {{myemail_username}}@{{myemail_domain}} Thanks!
</div>

  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex';

export default {
  name: 'lesson1',
  data(){ //local data
    return {
      localMagic_number: 3
    }
  },
  computed: mapState([
    'magic_number',
    'myemail_username',
    'myemail_domain'
  ]),
  methods: mapMutations([
    'increment',
    'incrementBy',
    'decrement'
  ])
}
</script>
