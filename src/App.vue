<template>
  <div id="app">
    <div id="nav">
      <ul>
      <li v-b-tooltip.hover title="5 lessons"><router-link to="/">1.Welcome</router-link> </li>
      <!-- <li><router-link to="/Lesson1.1">•</router-link></li> -->
      <!-- <li><router-link to="/Lesson1.2">•</router-link></li> -->
      <!-- <li><router-link to="/Lesson1.3">•</router-link></li> -->
      <!-- <li><router-link to="/Lesson1.4">•</router-link></li> -->
      <li v-b-tooltip.hover title="3 lessons"><router-link to="/Lesson2.0">2.What</router-link></li>
      <!-- <li><router-link to="/Lesson2.1">•</router-link></li> -->
      <!-- <li><router-link to="/Lesson2.2">•</router-link></li> -->
      <li v-b-tooltip.hover title="2 lessons"><router-link to="/Lesson3.0">3.Are they Legit?</router-link></li>
      <!-- <li><router-link to="/Lesson3.1">•</router-link></li> -->
      <li v-b-tooltip.hover title="5 lessons"><router-link to="/Lesson4.0">4.How they Work</router-link></li>
      <!-- <li><router-link to="/Lesson4.1">•</router-link></li> -->
      <!-- <li><router-link to="/Lesson4.2">•</router-link></li>
      <li><router-link to="/Lesson4.3">•</router-link></li>
      <li><router-link to="/Lesson4.4">•</router-link></li> -->
      <li v-b-tooltip.hover title="3 lessons"><router-link to="/Lesson5.0">5.My Worth</router-link></li>
      <!-- <li><router-link to="/Lesson5.1">•</router-link></li>
      <li><router-link to="/Lesson5.2">•</router-link></li> -->
      <li v-b-tooltip.hover title="1 lesson"><router-link to="/Lesson6.0">6.Compare</router-link></li>
      <li v-b-tooltip.hover title="2 lessons"><router-link to="/Lesson7.0">7.Quiz</router-link></li>
      <!-- <li><router-link to="/Lesson7.1">•</router-link></li> -->
      <li v-b-tooltip.hover title="1 lesson"><router-link to="/Lesson8.0">8.Share</router-link></li>
      <li v-b-tooltip.hover title="1 lesson"><span id='about'><router-link to="/about">9.About</router-link> </span></li>
    </ul>
    </div>

    <!-- <div><NavBar/></div> -->
    <router-view/>
  </div>
</template>
