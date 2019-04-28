<template>
  <div id="Lesson8.0">
    <div class="back-next-buttons">
      <router-link to="/Lesson7.0">Back</router-link> |
      <router-link to="/About">Next</router-link>
    </div>
    <h1>Share this Course</h1>
    <div class ="textbody">
      <p>Please share this course with your parents (or student).</p>

      <p>If you have any comments, questions, or feedback, email me at {{myemail_username}}@{{myemail_domain}} Thanks!</p>
</div>

  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex';

// TODO delete below
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
