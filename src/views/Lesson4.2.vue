<template>
  <div class="Lesson4.2">
    <router-link to="/Lesson4.1">Back</router-link> |
    <router-link to="/Lesson4.3">Next</router-link>
    <h1>Duration</h1>
    <div class ="textbody">
      The <i>duration</i> of the agreement, also called the term, is how many months it lasts. From the same site as before, enter the duration:
      <br><br>
      I will have to pay <b>{{income_share_rate}}%</b> of my income for
      <input type="number" id="duration_isa" :value="duration_isa" @input='update_duration_isa'>
       months.
</div>

  </div>
</template>

<script>
// @ is an alias to /src
import {mapState,mapMutations,mapGetters} from 'vuex';

export default {
  name: 'Lesson4.1',
  computed: {...mapState([
    'school','income_share_rate_per_10k', 'funding_amount','income', 'duration_isa'
  ]),
  ...mapGetters([
    'income_share_rate','income_share'
  ])
},
methods:{
  update_duration_isa(e){
    this.$store.commit('update_duration_isa',e.target.value)
  }
 }
}
</script>
