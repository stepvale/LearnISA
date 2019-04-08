<template>
  <div class="Lesson6.0">
    <router-link to="/Lesson5.2">Back</router-link> |
    <router-link to="/Lesson7.0">Next</router-link>
    <h1>So, is an ISA Right for Me?</h1>
    <div class ="textbody">
      Glad you asked! Check out the Comparison sections below to see how an ISA compares to your loan options.
<br><br>
      Feel free to play around with any of the inputs to see how they change things:

      <br> Amount I'm getting: $<input type="number" id="funding_amount" :value="funding_amount" @input="update_funding_amount">
      <br> Rate I'd pay on a loan: <input type="number" id="loan_rate" :value="loan_rate" @input='update_loan_rate'>%
      <br> Income share per $10,000 of income: <input type="number" id="income_share_rate_per_10k" :value="income_share_rate_per_10k" @input='update_ISA_rate_per_10k'>%
      <br> My income share rate will be <b>{{income_share_rate}}%</b> of my what I earn.
      <br> ISA duration: <input type="number" id="duration_isa" :value="duration_isa" @input='update_duration_isa'> months
      <br> Repayment cap: <input type="number" id="repayment_cap" :value="repayment_cap" @input='update_repayment_cap'>
      <br> I expect to earn at least $<input type="number" id="income_low" :value="income_low" @input='update_income_low'>,
      <br>but less than <input type="number" id="income_high" :value="income_high" @input='update_income_high'>
      after school.
      <br> My average expected starting salary is about: <b>{{expected_income}}</b>
      <br><br><i> Note: The below calculations assume that income will grow by 3% a year.</i>
<br><br>
<div id="value_comparison">
<h2><i>Value Comparison</i></h2>
  The net cost of each funding amount equals the amount you receive to pay for school minus the total of what you'll have to pay back.
  <br>
<!-- <button @click='log_expected_income'>log_expected_income </button> -->
  <br> Loan lifetime net cost:<b>{{npv_loan}}</b>
  <br>
  ISA lifetime net cost:<b> {{npv_isa}}</b>
</div>
  <div id ="risk_comparison">
    <h2><i>Risk Comparison</i></h2>
    The risk of each option is shown as the % of your <i>lowest </i> expected starting income that will go towards repayment. If you're paying too much of what you earn towards loans (e.g. 20% or more), you could be at risk of defaulting.
    <br> <br> Loan estimated repayments as % of starting salary:<b> {{starting_income_pct_loan}}</b>
    <br> ISA estimated repayments as % of starting salary: <b>{{starting_income_pct_isa}}</b>
  </div>
  <div id="monthly_payment_comparison">
    <h2><i>Monthly Payments Comparison</i></h2>
    <br> <b>Loan:</b> {{cash_flows_loan}}
    <br><b> ISA: </b>{{cash_flows_isa}}
  </div>
</div>

  </div>
</template>

<script>
// @ is an alias to /src
import {mapState,mapMutations,mapGetters} from 'vuex';

export default {
  name: 'Lesson4.1',
  computed: {...mapState([
    'school','income_share_rate_per_10k', 'funding_amount','income', 'duration_isa','income_floor',
    'repayment_cap', 'major', 'school_avg_major_income', 'income_low','income_high', 'loan_rate'
  ]),
  ...mapGetters([
    'income_share_rate','income_share', 'repayment_cap_amt', 'expected_income',
    'cash_flows_loan', 'cash_flows_isa','npv_loan', 'npv_isa','starting_income_pct_loan','starting_income_pct_isa'
  ])
},
methods:{
  update_funding_amount(e){
    this.$store.commit('update_funding_amount',e.target.value)
  },
  update_loan_rate(e){
    this.$store.commit('update_loan_rate',e.target.value)
  },
  update_ISA_rate_per_10k(e){
    this.$store.commit('update_ISA_rate_per_10k',e.target.value)
  },
  update_duration_isa(e){
    this.$store.commit('update_duration_isa',e.target.value)
  },
  update_repayment_cap(e){
    this.$store.commit('update_repayment_cap',e.target.value)
  },
  update_income_low(e){
    this.$store.commit('update_income_low',e.target.value);
    console.log(this.$store.getters.expected_income);
  },
  update_income_high(e){
    this.$store.commit('update_income_high',e.target.value);
    console.log(this.$store.getters.expected_income);
  },
  log_expected_income(e){
    console.log(this.$store.getters.expected_income);
  }
 }
}
</script>
