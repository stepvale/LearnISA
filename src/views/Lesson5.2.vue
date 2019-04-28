<template>
  <div id="Lesson5-2">
    <div class="back-next-buttons">
      <router-link to="/Lesson5.1">Back</router-link> |
      <router-link to="/Lesson6.0">Next</router-link>
    </div>
    <h1>5.2 Career Plans</h1>
    <div class ="textbody">
      <p>But that's just the average. Your income will depend on what job you take, where you live, and whether you go on for more graduate school.
      Even if you're not sure of your plans (which is natural and OK!), please go to www.payscale.com  or www.paysa.com, look up some salaries for a job you want, and enter a range below.</p>
      <p>While the average income for someone in my major is <span class ='em'>{{school_avg_major_income}}</span>,
       based on my research I expect to earn between a low of
       <input type="number" id="income_low" :value="income_low" @input='update_income_low'>
        and a high of
        <input type="number" id="income_high" :value="income_high" @input='update_income_high'>
         in my first job after graduation.</p>
      <p>Based on this range, my expected income is about <span class ='em'>{{expected_income}}</span>.</p>
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
    'repayment_cap', 'major', 'school_avg_major_income', 'income_low','income_high'
  ]),
  ...mapGetters([
    'income_share_rate','income_share', 'repayment_cap_amt', 'expected_income'
  ])
},
methods:{
  update_income_low(e){
    this.$store.commit('update_income_low',e.target.value)
  },
  update_income_high(e){
    this.$store.commit('update_income_high',e.target.value)
  }
 }
}
</script>
