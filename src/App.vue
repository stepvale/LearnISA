<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">1.Welcome</router-link>
      <!-- <router-link to="/Lesson1.0">_•_</router-link> -->
      <router-link to="/Lesson1.1">_•_</router-link>
      <router-link to="/Lesson1.2">_•_</router-link>
      <router-link to="/Lesson1.3">_•_</router-link>
      <router-link to="/Lesson1.4">_•_</router-link>>
      <router-link to="/Lesson2.0">2.What</router-link>
      <router-link to="/Lesson2.1">_•_</router-link>
      <router-link to="/Lesson2.2">_•_</router-link>>
      <router-link to="/Lesson3.0">3.Legit</router-link>
      <router-link to="/Lesson3.1">_•_</router-link>>
      <router-link to="/Lesson4.0">4.How</router-link>
      <router-link to="/Lesson4.1">_•_</router-link>
      <router-link to="/Lesson4.2">_•_</router-link>
      <router-link to="/Lesson4.3">_•_</router-link>
      <router-link to="/Lesson4.4">_•_</router-link>>
      <router-link to="/Lesson5.0">5.Worth</router-link>
      <router-link to="/Lesson5.1">_•_</router-link>
      <router-link to="/Lesson5.2">_•_</router-link>>
      <router-link to="/Lesson6.0">6.Compare</router-link>>
      <router-link to="/Lesson7.0">7.Quiz</router-link>
      <router-link to="/Lesson7.1">_•_</router-link>>
      <router-link to="/Lesson8.0">8.Share</router-link>>
      <span id='about'><router-link to="/about">9.About</router-link> </span>
      <!-- <router-link to="{{back}}">Back</router-link> |
      <router-link to="{{next}}">Next</router-link> | -->
    </div>


    <!-- <div><NavBar/></div> -->

    <router-view/>
  </div>
</template>

<script>
// import NavBar from '@/components/NavBar.vue'

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ol {
  list-style-position: inside;
}
</style>
