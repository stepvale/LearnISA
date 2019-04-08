<template>
  <div class="Lesson4.4">
    <router-link to="/Lesson4.3">Back</router-link> |
    <router-link to="/Lesson5.0">Next</router-link>
    <h1>Repayment Cap</h1>
    <div class ="textbody">
      The repayment cap is another way to protect you. It limits the total amount you'll ever repay to some multiple of the funding amount. From the same site as before, enter the repayment cap:
<br><br>
I will pay up to, but no more than,
<input type="number" id="repayment_cap" :value="repayment_cap" @input='update_repayment_cap'>
times the funding amount. Since I'm getting
{{funding_amount}}, the ISA could end up costing me {{repayment_cap_amt}}.

</div>

  </div>
</template>

<script>
// @ is an alias to /src
import {mapState,mapMutations,mapGetters} from 'vuex';

export default {
  name: 'Lesson4.1',
  computed: {...mapState([
    'school','income_share_rate_per_10k', 'funding_amount','income', 'duration','income_floor',
    'repayment_cap'
  ]),
  ...mapGetters([
    'income_share_rate','income_share', 'repayment_cap_amt'
  ])
},
methods:{
  update_repayment_cap(e){
    this.$store.commit('update_repayment_cap',e.target.value)
  }
 }
}
</script>
