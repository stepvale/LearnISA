<template>
  <div class="Lesson4.3">
    <router-link to="/Lesson4.2">Back</router-link> |
    <router-link to="/Lesson4.4">Next</router-link>
    <h1>Income Floor</h1>
    <div class ="textbody">
      The income floor is there so that you don't have to pay anything if you earn below the floor amount. It's there to make sure that the investor only gets paid if you're successful.
      <br><br>
      From the same site as before, enter the income floor:
      <br><br>
      While I’m earning less than
       <input type="number" id="income_floor" :value="income_floor" @input='update_income_floor'>
       , I won’t have to pay anything on my ISA.

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
