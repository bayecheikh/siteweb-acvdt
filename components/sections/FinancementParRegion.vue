<template>
  <div>
    <div style="display: flex;">
    <spinner class="square-loader" :width="'647px'" :height="'750px'" :margin="'0px'"  v-if="!showContent" ></spinner>
    <spinner class="square-loader" :width="'900px'" :height="'750px'" :marginLeft="'010px'" :margin="'0px'" v-if="!showMap" ></spinner>
  </div>
    <div class="support-area pt-0 pb-0">
        <div class="bg-white">            
            <div class="row align-items-start d-flex">
             
                <div class="col-lg-6 col-md-6 col-sm-12 mr-0 pr-0">
                  <div v-if="showContent">
                    <div class="custom-top-card pt-15 pb-15 pl-115 pr-5">
                        <div class="custom-bloc-chiffre d-flex justify-content-evenly border-green bg-green">
                            <span class="custom-chiffre">NOMBRE DE POSTES DE PÉAGE :</span> 
                            <span class="custom-chiffre text-green">{{ this.peages.length }}</span>
                        </div> 
                    </div>
                    <div class="custom-top-card pt-15 pb-15 pl-115 pr-5">
                        <ul class="list-group list-group-flush pl-48 scrollable-bloc">
                            <li class="list-group-item pl-0 pt-3 pb-3 font-weight-600 text-blue" v-for="(item,i) in this.peages" :key="i">
                                <img src='route-a-peage.png' style='vertical-align:middle; margin-right: 6px; width:30px; height:30px;'>
                                <button :class="'text-peage '+ (isActivepeage==item.id?'activepeage':'')" @click="postepeageBypeage(item)">
                                        {{item.titre}}
                                </button>    
                            </li>
                        </ul>
                    </div>
                </div>
                </div>
               
                <div v-show="showMap" class="col-lg-6 col-md-6 col-sm-12">
                  <div v-if="isloading" class="d-flex justify-content-center align-items-center" style="height: 740px; background-color: #0060a8;">
                    <button class="btn btn-success" type="button" disabled>
                      <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                      Chargement des données en cours...
                    </button>
                  </div>
                  <div v-else class="m-0 pt-15 pl-15 pb-30 d-flex flex-column align-items-center" style="background-color: #0060a8;background-repeat: no-repeat; background-size: cover; height: 740px;">
                    <div id="chartdiv"></div>
                    <div class="my-2">
                      <span style="font-weight:600; font-size:18px; color: #fff; text-transform:capitalize; font-family:Arial, Helvetica, sans-serif;">{{titlepeage}} </span> 
                    </div>    
                  </div>
                </div>         
      
            </div>
        </div>
      
    </div>         
  </div> 

</template>

<script>
import Spinner from 'vue-spinner/src/SquareLoader.vue';
import { mapMutations, mapGetters } from 'vuex'
    export default {
      components: {
            Spinner,
        },
        computed: mapGetters({
            listcontenus: 'contenus/listcontenus',
        }),
        mounted: function() {
            //this.createdMap()
            this.getListpeage()
            //this.$store.dispatch('contenus/getList')
        },
        computed:{
            styles: function(){
                return {
                    'left':this.x+'px',
                    'top':this.y-70+'px'
                }
            }
        },
        data() {
            return {
                showContent: false,
                showMap: false,
                isloading:false,
                tablepostepeages:[],
                isActivepeage:0,
                titlepeage:'',
                siteUrl:process.env.siteUrl,
                peages: [],
                postepeageBypeages:[],
                dimensions: [],
                sources: [],
                missions: [],
                title: '',
                montantGlobal:0,
                engagement: 0,
                mobilisation: 0,
                execution: 0,
                id: '',
                isHovering:false,
                x:10,
                y:0
            }
        },

        methods: {

            getListpeage(){
                
                this.progress=true
                this.$axios.$get('/allpostepeages')
                .then(async (response) => {
                
                    //this.$toast.success(response.message).goAway(2000)
                    console.log('Données peages Reçu ++++++: ', response)
                    this.peages = response.data
                    this.showContent = true
                    this.showMap = true;
                   // Create chart instance
                  
                    // Create map instance

                  
                      let {am4core, am4charts,am4maps,senegalHigh, am4themes_animated, am4themes_dark} = this.$am4core();
                      let map = am4core.create("chartdiv", am4maps.MapChart);
                       
                    // Set map definition
                    map.geodata = senegalHigh;
                        
                        // Set projection
                        map.projection = new am4maps.projections.Miller();
                
                        // Desable Zoom control on click, on scroll
                        //map.zoomControl = new am4maps.ZoomControl();
                        map.seriesContainer.draggable = false;
                        map.seriesContainer.resizable = false;
                        map.seriesContainer.events.disableType("doublehit");
                        map.chartContainer.background.events.disableType("doublehit");
                        map.chartContainer.wheelable = false;
                        map.paddingBottom = 5;
                        //hide logo
                        if(map.logo) {
                        map.logo.disabled = true;
                        }
                            
                        // The world
                        let polygonSeries = map.series.push(new am4maps.MapPolygonSeries());    
                        polygonSeries.useGeodata = true;
                        polygonSeries.calculateVisualCenter = true;
    
                        // Configure series
                        var polygonTemplate = polygonSeries.mapPolygons.template;
                        polygonTemplate.tooltipText = "{name}";
                        polygonTemplate.fill = am4core.color("#fff");
                        polygonTemplate.stroke = am4core.color("#084f31")
                        polygonTemplate.strokeWidth = 1;
                        polygonTemplate.hoverOnFocus = true;
                        polygonTemplate.nonScalingStroke = true;
    
                        // Create hover state and set alternative fill color
                        var hs = polygonTemplate.states.create("hover");
                        hs.properties.fill = am4core.color("#367B25");
    
                        // Bind "fill" property to "fill" key in data
                        polygonTemplate.propertyFields.fill = "fill";
    
                        
    
                        // Create image series
                        var imageSeries = map.series.push(new am4maps.MapImageSeries());
                        
                        // Add data for the three cities
                        let tablepostepeages = []
                        let i = 0
                        await response.data.map((item)=>{
                          
                            let latitude = parseFloat(item?.latitude)
                            let longitude = parseFloat(item?.longitude)
                            let titre = item?.titre                      
                            tablepostepeages.push({"latitude":latitude,"longitude":longitude,"titre":titre,"showTooltip":i==3?"always":"hover"})
                            i++
                       
                        })
                        imageSeries.data = tablepostepeages
    
                        // Create a circle image in image series template so it gets replicated to all new images
                        var imageSeriesTemplate = imageSeries.mapImages.template;
                        var circle = imageSeriesTemplate.createChild(am4core.Circle);
                        circle.radius = 8;
                        circle.fill = am4core.color("#fff");
                        circle.stroke = am4core.color("#00B42D");
                        circle.strokeWidth = 4;
                        circle.nonScaling = true;
                        //circle.tooltipText = "{titre}\nLatitude : {latitude} , Longitude : {longitude}";
                      circle.tooltipHTML = "<img src='route-a-peage.png' class='tooltip' style='vertical-align:middle; margin-right: 6px; width:21px; height:21px;'><span style='font-size:14px; color:#000000;'><b>{titre}</b></span>";
                        circle.propertyFields.showTooltipOn = "showTooltip";
                        
    
                        // Set property fields
                        imageSeriesTemplate.propertyFields.latitude = "latitude";
                        imageSeriesTemplate.propertyFields.longitude = "longitude";

                   
                   

                }).catch((error) => {
                    console.log('Code error ++++++: ', error?.response?.data?.message)
                }).finally(() => {
                    console.log('Requette envoyé ')
                });
            },
            postepeageBypeage(peage){
                //this.isloading =true
                this.isActivepeage = peage.id
                this.titlepeage = peage.titre
            }
        }
    };
</script>
<style scoped>
#chartdiv {

  width: 100%;
  height: 600px;
}
.tooltip {
  width: 200px;
}
path {
  fill: #ffffff;
  cursor: pointer;
  -webkit-transition: all 150ms;
  -moz-transition: all 150ms;
  -o-transition: all 150ms;
  transition: all 150ms;
}
path:hover {
  opacity: 0.85;
}
.lan {
  fill-opacity: 1;
  stroke: rgb(0, 0, 0);
  stroke-opacity: 1;
  stroke-miterlimit:22.926;
  stroke-width: 0.5;
}
.descriptionpeage {
  position: absolute;
  font-size: 20px;
  text-align: center;
  z-index: 5;
  color: #ffffff;
  top: 0;
}
.description {
  pointer-events: none;
  position: absolute;
  font-size: 14px;
  text-align: left;
  background: rgba(0, 0, 0, 0.555);
  padding: 30px;
  padding-top: 10px;
  z-index: 5;
  height: 130px;
  line-height: 30px;
  margin: 0 auto;
  color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 0 0 1px #eee;
  -moz-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}
.description.active {
  display: block;
}
.description:after {
  content: "";
  position: absolute;
  left: 50%;
  top: 100%;
  width: 0;
  height: 0;
  margin-left: -10px;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid white;
}
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 400;

  color: #08b708;
  letter-spacing: 1px;
  font-size: 6em;
}

.green {
  color: #08b708;
}

.subtitle {
  font-weight: 300;
  font-size: 1em;
  color: #08b708;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
.custom-text-btn{
    font-size: 14px !important;
}
.custom-card-box {
  border: solid 2px #99A9B4;
  padding: 27px;
  max-height: 100%;
}
.border-right {
  border-right: 1px;
}
.box{
    width: 100%;
}
.custom-bg-grey{
  background-color: #F2F2F2;
}
.custom-section{
    background-color: #EEF3FB;
}
.bg-white{
    background-color: #fff;
}
.bg-grey{
    background-color: #EEF3FB;
}
.text-green{
color: #08b708;
}
.border-green{
border: solid 1px #00B42D;
}
.bg-green{
background-color: #00b42d12;
}
.custom-chiffre {
font-weight: 600;
font-size: 20px;
}
.custom-bloc-chiffre {
padding: 6px;
padding-left: 0px;
margin-top: 0px;
margin-right: 16px;
color: #000000b5;

}
.custom-top-card{
  box-shadow: -3px 1px 11px -9px;
  margin-bottom: 10px;
}
.titleRegion{
    font-weight: 600;
}
.text-peage{
    font-size: 18px !important;
    color: #000000b5;
}
.activepeage{
    color: #08b708 !important;
}
.scrollable-bloc{
    max-height: 100%;
    overflow:scroll !important;
    overflow-x: hidden !important;
}
.loading{

}
.pl-115{
    padding-left: 115px !important;
}
.square-loader {
  height: 100%;
  width: 100%;
  animation: blink 1s infinite;
  
}

@keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>
