<template>
  <div id="Lesson4.2">
    <div class="back-next-buttons">
      <router-link to="/Lesson4.1">Back</router-link> |
      <router-link to="/Lesson4.3">Next</router-link>
    </div>
    <h1>4.2 Duration</h1>
    <div class ="textbody">
      <p>The <i>duration</i> of the agreement, also called the term, is how many months it lasts. From the same site as before, enter the duration:</p>
      <p>I will have to pay <span class='em'>{{income_share_rate}}%</span> of my income for
      <input type="number" id="duration_isa" :value="duration_isa" @input='update_duration_isa'>
       months.</p>
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
