<template>
  <div class="Lesson7.0">
    <router-link to="/Lesson6.0">Back</router-link> |
    <router-link to="/Lesson7.1">Next</router-link>
    <h1>Quiz</h1>
    <div class ="textbody">
      <div id="question_1">
        1. An ISA is <i>always</i> cheaper than a loan:
        <div>
        <label for="q1.1">True</label>
        <input type="radio" id= 'q1.1' name="question_1" value= "true_incorrect" >
      </div>
      <div>
      <label for="q1.2">False</label>
        <input type="radio" id= 'q1.2' name="question_1" value= "false_correct" >
      </div>
      </div>

      <div id="question_2">
        <p>2. The amount I borrow will change my repayment cap in the following way:</p>
        <div>
        <label for="q2.1">A. My repayment cap is based on the income share rate</label>
        <input type="radio" id= "q2.1" name="question_2" value= "q2.1_incorrect">
      </div>
      <div>
      <label for="q2.2">B. My repayment cap is always a constant ratio of the amount I borrow (e.g. 2.5X)</label>
        <input type="radio" id= "q2.2" name="question_2" value= "q2.2_correct" >
      </div>
      <div>
      <label for="q2.3">C. My repayment cap will go down if I borrow more</label>
        <input type="radio" id= "q2.3" name="question_2" value= "q2.3_incorrect" >
      </div>
      </div>

      <div id="question_3">
        <p>3. One thing that will have a big impact on how much I pay is:</p>
      <div>
        <input type="text" value="Write your answer here">
      </div>
      </div>
</div>

  </div>
</template>
