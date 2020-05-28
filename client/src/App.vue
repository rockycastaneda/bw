<template>
    <div>




            <!-- <div   :style="{ backgroundImage: 'url(' + require('@/assets/logo.png') + ')' }"> -->

            <AppHeader v-bind:contents="contents"></AppHeader>
            <MainPage v-bind:contents="contents"></MainPage>


            </div>

            <!-- <div class="ui container">
              <router-view>

              </router-view>
            </div> -->
    </div>

</template>

<script>
import AppHeader from './components/AppHeader'
import MainPage from './components/MainPage'
import json from '../content.json'


export default {
    name: 'App',
    data() { return { contents: json } },
    components: {
        AppHeader, MainPage
    }
};
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

body {
  margin-top:0px;
}
</style>
