<template>
  <div id="Lesson4.3">
    <div class="back-next-buttons">
      <router-link to="/Lesson4.2">Back</router-link> |
      <router-link to="/Lesson4.4">Next</router-link>
    </div>
    <h1>4.3 Income Floor</h1>
    <div class ="textbody">
      <p>The income floor is there so that you don't have to pay anything if you earn below the floor amount. It's there to make sure that the investor only gets paid if you're successful.</p>
      <p>From the same site as before, enter the income floor:</p>
      <p>While I’m earning less than
       <input type="number" id="income_floor" :value="income_floor" @input='update_income_floor'>
       , I won’t have to pay anything on my ISA.</p>

</div>

  </div>
</template>

<script>
// @ is an alias to /src
import {mapState,mapMutations,mapGetters} from 'vuex';

export default {
  name: 'Lesson4.1',
  computed: {...mapState([
    'school','income_share_rate_per_10k', 'funding_amount','income', 'duration','income_floor'
  ]),
  ...mapGetters([
    'income_share_rate','income_share'
  ])
},
methods:{
  update_income_floor(e){
    this.$store.commit('update_income_floor',e.target.value)
  }
 }
}
</script>
