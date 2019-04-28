<template>
  <div id="Lesson1.0">
    <div class="back-next-buttons">
      <!-- <router-link to="/">Back</router-link>| -->
      <router-link to="/Lesson1.1">Next </router-link>
    </div>
    <h1>1.0 Welcome to the Academy!</h1>
    <div class ="textbody">
      <p>You're here because you need money to pay for college and aren't afraid to think out of the box.</p>
      <p> I like your style.</p>
      <p>This mini-class will teach you what you need to know about Income Share Agreements.</p>
</div>

  </div>
</template>

<script>
// @ is an alias to /src
import {mapState,mapMutations} from 'vuex';

export default {
  name: 'home'
}

</script>
