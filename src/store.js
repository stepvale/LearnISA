import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      magic_number: 88,
      parent_student: "student",
      school:'Purdue',
      funding_amount:30000,
      loan_rate: 8,
      major:'computer science',
      income_share_rate_per_10k: 3,
      duration_isa:120, //isa duration
      duration_loan:120, //assumes 10 year loan
      income_floor:20000,
      repayment_cap:2.5,
      myemail_username: "svalenta",
      myemail_domain:"gatech.edu",
      income: 50000,
      school_avg_major_income: 70000,
      income_low:60000,
      income_high:80000,
      discount_rate:4,
      income_growth_rate: 3
  },
  getters:{
    income_share_rate: state => {return Math.round(state.funding_amount*state.income_share_rate_per_10k/10000*100)/100},
    income_share: (state,getters) => {return state.income*getters.income_share_rate/100},
    repayment_cap_amt: state => {return state.repayment_cap * state.funding_amount},
    expected_income: state => {return (state.income_low/2+state.income_high/2)},
    cash_flows_loan: state => {
      var num_months = state.duration_loan;
      var loan_bal = state.funding_amount;
      var cash_flows_loan_array = [];
      while (num_months >0){
        var principal_pmt = state.funding_amount/state.duration_loan;
        var interest_pmt= loan_bal*(state.loan_rate/1200); // divide by 1200 to convert annual % to get monthly interest rate
        var total_pmt = Math.round(principal_pmt + interest_pmt);
        cash_flows_loan_array.push(total_pmt);
        num_months--;
        loan_bal-=principal_pmt;
      }
      return cash_flows_loan_array
    },
    cash_flows_isa: (state,getters) =>{
      var num_months = state.duration_isa;
      var current_income = getters.expected_income;
      var cash_flows_isa_array = [];
      var cap = state.repayment_cap*state.funding_amount;
      var cum_pmts = 0;
      var isa_pmt = 0;
      while(num_months> 0){
        isa_pmt = Math.round(current_income/12 *getters.income_share_rate/100);
        if (isa_pmt < cap - cum_pmts){
        cash_flows_isa_array.push(isa_pmt);
      }
      else if (cum_pmts >=cap){
        cash_flows_isa_array.push(0);
      }
      else {
          cash_flows_isa_array.push(cap - cum_pmts);
      }
        cum_pmts += isa_pmt;
        current_income = current_income*(1+state.income_growth_rate/1200);
        num_months--;
      }
      return cash_flows_isa_array
    },
    labeled_cash_flows_loan:(state,getters) =>{
      let labeled_array_loan = getters.cash_flows_loan.slice(0);
      labeled_array_loan.unshift("Loan Cash Flows");
      return labeled_array_loan;
      // return labeled_array;
    },
    labeled_cash_flows_isa:(state,getters) =>{
      let labeled_array_isa = getters.cash_flows_isa.slice(0);
      labeled_array_isa.unshift("ISA Cash Flows");
      return labeled_array_isa;
      // return labeled_array;
    },
    npv_loan: (state,getters) => {
      return Math.round(-1*(getters.cash_flows_loan.reduce(
        (accumulator, currentValue, index) =>
      accumulator + currentValue / Math.pow(state.discount_rate/1200+1, index+1),
      -state.funding_amount // divide by 1200 to convert annual % to get monthly interest rate
      )));
    },
    npv_isa: (state,getters) => {
      return Math.round(-1*(getters.cash_flows_isa.reduce(
        (accumulator, currentValue, index) =>
      accumulator + currentValue / Math.pow(state.discount_rate/1200+1, index+1),
      -state.funding_amount // divide by 1200 to convert annual % to get monthly interest rate
      )));
    },
    starting_income_pct_loan: (state,getters) => {
      let first_period_pmt = getters.cash_flows_loan[0];
      console.log(first_period_pmt);
      let starting_monthly_income= getters.expected_income/12;
      // return 1000/first_period_pmt;
      return Math.round(first_period_pmt/starting_monthly_income*100*100)/100;
     },
    starting_income_pct_isa: (state,getters) => {return getters.income_share_rate}
  },
  mutations: {
      update_funding_amount(state, funding_amount){
        state.funding_amount = funding_amount
      } ,
      update_loan_rate(state, loan_rate){
        state.loan_rate = loan_rate
      } ,
      update_ISA_rate_per_10k(state, income_share_rate_per_10k){
        state.income_share_rate_per_10k = income_share_rate_per_10k
      } ,
      update_duration_isa(state, duration_isa){
        state.duration_isa = duration_isa
      } ,
      update_income_floor(state, income_floor){
        state.income_floor = income_floor
      },
      update_repayment_cap(state, repayment_cap){
        state.repayment_cap = repayment_cap
      },
      update_school_avg_major_income(state, school_avg_major_income){
        state.school_avg_major_income = school_avg_major_income
      },
      update_income_low(state, income_low){
        state.income_low = income_low
      },
      update_income_high(state, income_high){
        state.income_high = income_high
      },
      incrementBy(state,payload){
        state.magic_number += payload.amount
      },
      decrement(state){
        state.magic_number--
      }
  },
  actions: {

  }
})
