<template>
  <div id="Lesson1.3">
    <div class="back-next-buttons">
    <router-link to="/Lesson1.2">Back</router-link> |
    <router-link to="/Lesson1.4">Next</router-link>
  </div>
    <h1>1.3 About You</h1>
    <div class ="textbody">
      <p>OK. Let's get to know each other.</p>
I am a <select>
  <option value = "student">student</option>
  <option value = "parent">parent of a student</option>
</select>
   at <select>
     <option value = "purdue">Purdue</option>
     <option value = "thinkful">Thinkful</option>
     <option value = "lambda school">Lambda School</option>
     <option value = "other">Other</option>
   </select> My major is <select>
     <option value = "computer science">Computer Science</option>
     <option value = "english">English</option>
     <option value = "other">Other</option>
   </select>.
<br>
<br>
</div>

  </div>
</template>
