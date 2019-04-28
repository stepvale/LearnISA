<template>
  <div id="Lesson4.1">
    <div class="back-next-buttons">
      <router-link to="/Lesson4.0">Back</router-link> |
      <router-link to="/Lesson4.2">Next</router-link>
    </div>
    <h1>4.1 Income Share Rate</h1>
    <div class ="textbody">
      <p>The income share rate is how much of your future income you will pay back to the investors. The more money they give you now, the higher the rate will be. It can also depend on things like what your major is.</p>

      <p>Here's your first research assignment. Please go to <span class='em'>{{school}}'s</span> website, look up the rate for your major, and enter it below.</p>
      <p>My income share rate is <input type="number" id="income_share_rate_per_10k" :value="income_share_rate_per_10k" @input='update_ISA_rate_per_10k'>
      % for every $10,000 of funding I receive.
      Since I'm borrowing <span class='em'>{{funding_amount}}</span>, I will have to pay <span class='em'>{{income_share_rate}}%</span> of my income after I graduate. For example, if I'm earning <span class='em'>{{income}}</span> per year, I'll pay <span class='em'>{{income_share}}</span> per year.</p>

</div>

  </div>
</template>

<script>
// @ is an alias to /src
import {mapState,mapMutations,mapGetters} from 'vuex';

export default {
  name: 'Lesson4.1',
  computed: {...mapState([
    'school','income_share_rate_per_10k', 'funding_amount','income'
  ]),
  ...mapGetters([
    'income_share_rate','income_share'
  ])
},
methods:{
  update_ISA_rate_per_10k(e){
    this.$store.commit('update_ISA_rate_per_10k',e.target.value)
  }
 }
}
</script>
