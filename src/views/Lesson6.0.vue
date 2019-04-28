<template>
  <div id="Lesson6.0">
    <div class="back-next-buttons">
      <router-link to="/Lesson5.2">Back</router-link> |
      <router-link to="/Lesson7.0">Next</router-link>
    </div>
    <h1>So, is an ISA Right for Me?</h1>

    <div id ="risk_comparison">
      <h2>Risk Comparison</h2>
      <p>Repayments as % of starting salary:</p>
      <p>Loan:<span class='em'> {{starting_income_pct_loan}}%</span>
      ISA:<span class='em'> {{starting_income_pct_isa}}%</span></p>
    </div>

    <div id="value_comparison">
    <h2>Value Comparison</h2>
    <p>Lifetime net cost:</p>
      <p>Loan:<span class='em'> {{npv_loan}}</span>
      ISA:<span class='em'> {{npv_isa}}</span></p>
    </div>

    <div id='chart'>
      <div id="update_chart_button">
        <button v-on:click="update_chart">Update Chart</button>
      </div>
      <vue-c3 :handler="handler"></vue-c3>
    </div>

    <div class ="textbody">
      <p>Glad you asked! Check out the Comparison sections on the right to see how an ISA compares to your loan options.</p>
      <p>Feel free to play around with any of the inputs to see how they change things:</p>
      <ul>
      <li>Funding Amount: $<input type="number" id="funding_amount" :value="funding_amount" @input="update_funding_amount"></li>
      <li> Loan Rate: <input type="number" id="loan_rate" :value="loan_rate" @input='update_loan_rate'>%</li>
      <li> ISA rate per $10,000: <input type="number" id="income_share_rate_per_10k" :value="income_share_rate_per_10k" @input='update_ISA_rate_per_10k'>%</li>
      <li> ISA rate: <span class='em'>{{income_share_rate}}%</span> of my what I earn.</li>
      <li> ISA duration: <input type="number" id="duration_isa" :value="duration_isa" @input='update_duration_isa'> months</li>
      <li> Repayment cap: <input type="number" id="repayment_cap" :value="repayment_cap" @input='update_repayment_cap'></li>
      <li> Minimum expected starting salary<input type="number" id="income_low" :value="income_low" @input='update_income_low'></li>
      <li> Maximum expected starting salary: <input type="number" id="income_high" :value="income_high" @input='update_income_high'></li>
      <li> Average expected starting salary: <span class='em'>{{expected_income}}</span></li>
    </ul>
      <div id="sim_notes">
        <b>Notes:</b>
        <ul>
          <li>The below calculations assume that income will grow by 3% a year.</li>
          <li>The net cost of each funding amount equals the amount you receive to pay for school minus the total of what you'll have to pay back.</li>
          <li>The risk of each option is shown as the % of your <i>lowest </i> expected starting income that will go towards repayment. If you're paying too much of what you earn towards loans (e.g. 20% or more), you could be at risk of defaulting.</li>
        </ul>
</div>


  <!-- TODO Delete -->
  <!-- <div id="monthly_payment_comparison">
    <h2><i>Monthly Payments Comparison</i></h2>
    <br> <b>Loan:</b> {{labeled_cash_flows_loan}}
    <br><b> ISA: </b>{{labeled_cash_flows_isa}}
  </div> -->
</div>

  </div>
</template>

<script>
// @ is an alias to /src
import {mapState,mapMutations,mapGetters} from 'vuex';
import Vue from 'vue'
import VueC3 from 'vue-c3'

export default {
  name: 'Lesson4.1',
  components: {VueC3},
  data(){ //local data
    return {
      handler: new Vue()
    }
  },
  mounted () {
      // to init the graph call:
      const options = {
        data: {
          columns: [
            this.labeled_cash_flows_loan,
            this.labeled_cash_flows_isa
          ],
          types: {
                'Loan Cash Flows': 'scatter',
                'ISA Cash Flows': 'scatter' // ADD
              }},
          axis: {
            y:{
              tick: {
                format: function (d) { return "$" + d; }
              },
              padding: {
                top: 75,
                bottom:75
              }
            },
            x:{
              label: 'Months',
              position: 'outer-center'
            }
          }
        }

      //initialize chart
      this.handler.$emit('init', options)
      //resize chart
      this.handler.$emit('dispatch', (options) => options.resize({
            height: 285,
            width: 610
      }))
    },
  computed: {...mapState([
    'school','income_share_rate_per_10k', 'funding_amount','income', 'duration_isa','income_floor',
    'repayment_cap', 'major', 'school_avg_major_income', 'income_low','income_high', 'loan_rate'
  ]),
  ...mapGetters([
    'income_share_rate','income_share', 'repayment_cap_amt', 'expected_income',
    'cash_flows_loan', 'cash_flows_isa','npv_loan', 'npv_isa','starting_income_pct_loan',
    'starting_income_pct_isa', 'labeled_cash_flows_loan', 'labeled_cash_flows_isa'
  ])
},
methods:{
  update_chart(e){
    this.handler.$emit('dispatch', (options) => options.load({
        columns: [
        this.labeled_cash_flows_loan,
        this.labeled_cash_flows_isa
          ]
        }
    ))
  },
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
  }
 }
}
</script>
