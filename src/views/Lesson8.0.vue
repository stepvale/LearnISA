<template>
  <div id="Lesson8-0">
    <div class="back-next-buttons">
      <router-link to="/Lesson7.0">Back</router-link> |
      <router-link to="/About">Next</router-link>
    </div>
    <h1>Share this Course</h1>
    <div class ="textbody">
      <p>Please click the email icon to share this course with your parents (or student): <email :url="url" subject="Learning about Income Share Agreements" scale="3"></email></p>

      <p>If you have any comments, questions, or feedback, email me at {{myemail_username}}@{{myemail_domain}} Thanks!</p>
</div>

  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex';
import { Email } from 'vue-socialmedia-share';

export default {
  name: 'lesson8',
  computed: mapState([
    'myemail_username',
    'myemail_domain'
  ]),
  components: {
    Email
  },
  data(){
    return {
      url:"https://frosty-bohr-554fa7.netlify.com"
    }
  }
}
</script>
