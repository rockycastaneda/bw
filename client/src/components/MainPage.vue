<template>
    <div class="page-ui">
     <!-- <div   :style="{ backgroundImage: 'url(' + ' + require( $(bg) ) + ' + ')' }"> -->

       <!-- <div   :style="{ backgroundImage: 'url(' + 'http://127.0.0.1:3000/backgrounds/slide_three.jpg' + ')' }"> -->
       <div  class="layout-background" :style="{ backgroundImage: 'url(' + bg + ')' }">
        </div>
        <!-- <div>{{ $route.params.page }} </div>
        <div>{{ bg }} </div> -->
    <div class="page-container-1">
        <div class="headlineDiv">
          <marquee>
            {{ headline }}
          </marquee>
        </div>

        <div class="subheadDiv">
          <marquee>
            {{ subhead }}
          </marquee>
        </div>
    </div>
    <div></div>

    <div class="cta">
        <div class="ctamarquee">
        <marquee>
            {{ cta }}
        </marquee>
        </div>
    </div>

    </div>
</template>


<script>

/*
  Convert vue object
*/
global.getVueObject = obj => {
  return JSON.stringify( obj );
};

export default {

    data() {

        return {
          filteredPages: []
          ,
          bg:  '',
          headline: '',
          subhead: '',
          cta: ''
        }

    },

    props: ['contents'],
    name: 'MainPage',

    created() {
      var obj = getVueObject(this.$props.contents);
      console.log('obj',obj);
      this.filterPage(obj)
    },

    methods: {
      filterPage(obj) {
        //obj = getVueObject(obj);

        if (obj) {
          var arr = JSON.parse(obj);
          arr = arr.pages;
          console.log('arr',arr);
          this.filteredPages = arr.filter(pages => pages.slug.includes(  this.$route.params.page  ))
          console.log('this.filteredPages:', this.filteredPages);
          this.bg = 'http://127.0.0.1:3000/backgrounds/' + this.filteredPages[0].blocks[0].background;
          this.headline = this.filteredPages[0].blocks[0].headline;
          this.subhead = this.filteredPages[0].blocks[0].subhead;
          this.cta = this.filteredPages[0].blocks[0].cta;
          console.log('this.bg',this.bg);
        }
      }
    },

    watch: {
      '$route' (to, from) {
        // react to route changes...
        var obj = getVueObject(this.$props.contents);
        console.log('obj',obj);
        this.filterPage(obj)
      }
    }
};
</script>

<style scoped>
.image-container {
  column-count: 2;
  column-gap: 0;
}
img {
  max-width: 100%;
  padding: 5px;
}

.cta {
  width: 1180px;
  height: 179px;
  background-color: #ffffff;

  border-style: solid;
  border-color:rgb(255, 0, 153);
  margin-left: 1.8%;
  margin-right: 0px;
  margin-top: 20px;
  padding-top: 0px;
  height: 170px;
  display: flex;

}

.ctamarquee {
  width: 483px;
  height: 32px;
  font-family: HelveticaNeue;
  font-size: 24px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: -0.63px;
  color: #000000;

  border-style: solid;
  border-color: rgb(255, 0, 153);

  margin-left: 60px;
  margin-top: 40px;
  margin-bottom: 50px;
  padding-left: 0px;
  padding-right: 1px;
  padding-bottom: 50px;
  padding-top: 40px;





  flex: 0 0 55%;

}


.layout-background {
    background-size: cover;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -20000;
}

.page-ui  {
  border-style: solid;
  border-color: lime;
  margin-left: 5%;
  margin-right: 7%;
  margin-top: 50px;
  padding-top: 30px;
  height: 400px;

}

.page-container-1  {
  /* border-style: solid;
  border-color: lime; */
  margin-left: 1.8%;
  margin-right: 0px;
  margin-top: 0px;
  padding-top: 0px;
  height: 200px;
  display: flex;
  width:95%;
}


.headlineDiv {
  border-style: solid;
  border-color: rgb(255, 0, 153);

  margin-right: 50px;
  margin-top: 0px;
  margin-bottom: 50px;
  padding-left: 0px;
  padding-right: 1px;
  padding-bottom: 50px;


  width: 900px;
  font-family: HelveticaNeue;
  font-size: 84px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: -2.2px;
  color: #ffffff;

  flex: 0 0 55%;
}

.subheadDiv {

  flex: 1;
  border-style: solid;
  border-color: rgb(255, 0, 153);
  margin-left: 1.8%;
  margin-top: 5px;
  margin-bottom: 50px;

  padding-left: 1px;
  padding-right: 1px;
  padding-bottom: 50px;


  top: 110px;
  right: 10px;
  margin-left: 5%;
  margin-right: 8%;
  margin-top: -10;


  width: 360px;
  height: 127px;
  font-family: HelveticaNeue;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.86;
  letter-spacing: normal;
  color: #ffffff;
}

</style>
