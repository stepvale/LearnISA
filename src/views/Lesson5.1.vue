<template>
  <div class="Lesson5.1">
    <router-link to="/Lesson5.0">Back</router-link> |
    <router-link to="/Lesson5.2">Next</router-link>
    <h1>Major</h1>
    <div class ="textbody">

You said you're majoring in {{major}}. You can find the average income for {{major}} majors from {{school}} is by going to your school's website.
Please find that amount and enter it here: <input type="number" id="school_avg_major_income" :value="school_avg_major_income" @input='update_school_avg_major_income'>
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
    'repayment_cap', 'major', 'school_avg_major_income'
  ]),
  ...mapGetters([
    'income_share_rate','income_share', 'repayment_cap_amt'
  ])
},
methods:{
  update_school_avg_major_income(e){
    this.$store.commit('update_school_avg_major_income',e.target.value)
  }
 }
}
</script>
