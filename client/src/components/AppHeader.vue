<template>
    <div class="layout-ui">
      <div class="logodiv">
      <img src="../assets/abc_logo.svg" class="logo img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt="">
      </div>

      <div class="menudiv">
        <div class="menu" v-for="(page, idx) in contents.pages" :key="idx">
          <router-link :to=" '/page/' + page.slug" class="active item" >
          {{ page.title }}
          </router-link>
        </div>
      </div>

        <div class="buttonTopRight">


                <input class="button" type="button" value="Contact Us" style="float: right;">



        </div>
    </div>
</template>


<script>
export default {
    name: "AppHeader",
    props: ['contents']
}
</script>

<style scoped>
.layout-ui {
  border-style: solid;
  border-color: lime;
  margin-left: 5%;
  margin-right: 7%;
  margin-top: -10;
}

.logodiv {
  border-style: solid;
  border-color: rgb(255, 0, 153);
  margin-left: 1.8%;
  margin-top: 10px;
  width: 98px;
  padding-left: 1px;
  padding-right: 1px;
}

.logo {

  display:block;
  margin:auto;

}


.menu {

  display:block;
  margin:auto;
  font-family: HelveticaNeue;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;

}

a {
  color: white;
  text-decoration: none;
}

a:hover {
  color: #ffc004;
  text-decoration: none;
}

.menudiv {
  border-style: solid;
  border-color: rgb(255, 0, 153);
  margin-left: 1.5%;
  margin-top: 3px;
  margin-bottom: 30px;
  width: 93px;
  padding-left: 10px;
  padding-right: 1px;
  padding-bottom: 3px;

  line-height: 1.86;
  letter-spacing: normal;
  color: #ffffff;

  height: 78px;
}

.buttonTopRight {
    position: absolute;
  top: 10px;
  right: 10px;
  margin-left: 5%;
  margin-right: 8%;
  margin-top: -10;
}

.button {
   background-color: Transparent;
    background-repeat:no-repeat;
    cursor:pointer;
    overflow: hidden;
    outline:none;
    width: 139px;
    height: 42px;
  margin-top: 8%;

  font-family: HelveticaNeue;
  font-size: 15px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
}

.Rectangle {
  width: 139px;
  height: 42px;
  border: solid 1px #ffffff;
}

.horizontal {
    display: flex;
    flex-direction: row;
}
</style>
