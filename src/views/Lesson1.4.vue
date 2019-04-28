<template>
  <div id="Lesson1-4">
    <div class="back-next-buttons">
      <router-link to="/Lesson1.3">Back</router-link> |
      <router-link to="/Lesson2.0">Next</router-link>
    </div>
    <h1>1.4 Alternatives</h1>
    <div class ="textbody">
      <p>It's always good to know your options.</p>
    <p>I need $<input type="number" id="funding_amount" :value="funding_amount" @input="update_funding_amount">
    to pay for school.
    If I don't get an ISA, I would get a
    <select>
    <option value = "Private">Private</option>
     <option value = "Federal">Federal</option>
   </select>
 loan with an interest rate of <input type="number" id="loan_rate" :value="loan_rate" @input='update_loan_rate'>
%.</p>

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
    'repayment_cap', 'major', 'school_avg_major_income', 'income_low','income_high', 'loan_rate'
  ]),
  ...mapGetters([
    'income_share_rate','income_share', 'repayment_cap_amt', 'expected_income'
  ])
},
methods:{
  update_funding_amount(e){
    this.$store.commit('update_funding_amount',e.target.value)
  },
  update_loan_rate(e){
    this.$store.commit('update_loan_rate',e.target.value)
  }
 }
}
</script>
