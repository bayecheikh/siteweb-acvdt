<template>

    <div class="support-area pt-0 pb-90">
        <div class="bg-white">            
            <div class="row align-items-start d-flex">
                <div class="col-lg-6 col-md-6 col-sm-12 mr-0 pr-0">
                    <div class="custom-top-card pt-15 pb-15 pl-80 pr-5">
                        <div class="custom-bloc-chiffre d-flex justify-content-evenly border-green bg-green">
                            <span class="custom-chiffre">NOMBRE DE POSTE DE PÉAGE :</span> 
                            <span class="custom-chiffre text-green">11</span>
                        </div> 
                    </div>
                    <div class="custom-top-card pt-15 pb-15 pl-80 pr-5">
                        <ul class="list-group list-group-flush pl-48 scrollable-bloc">
                            <li class="list-group-item pl-0 pt-3 pb-3 font-weight-600 text-blue" v-for="(item,i) in this.secteurs" :key="i">
                                <button :class="'text-secteur '+ (isActivesecteur==item.id?'activesecteur':'')" @click="investissementBysecteur(item)">
                                        {{item.titre}}
                                </button>    
                            </li>
                        </ul>
                    </div>
                    
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 m-0 pt-15 pl-15 pb-30 d-flex flex-column align-items-center" style="background-color: #0060a8;background-repeat: no-repeat; background-size: cover; max-height: 640px;">

                    <button class="btn btn-success" type="button" disabled style="position: absolute; z-index: 100; top: 90%; left: 50%;" v-if="isloading">
                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Chargement des données encours...
                    </button>
                    <div id="chartdiv"></div>
                    <div class="my-2">
                        <span style="font-weight:600; font-size:18px; color: #fff; text-transform:capitalize; font-family:Arial, Helvetica, sans-serif;">Secteur : {{titlesecteur}} </span> 
                    </div>                   
                </div>
                
            </div>
        </div>              
    </div>

</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
    export default {
        computed: mapGetters({
            listcontenus: 'contenus/listcontenus',
        }),
        mounted: function() {
            //this.createdMap()
            this.getListsecteur()
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
                isloading:false,
                tablefinancementmaps:[],
                isActivesecteur:0,
                titlesecteur:'',
                siteUrl:process.env.siteUrl,
                secteurs: [],
                investissementBysecteurs:[],
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
            getInfoTooltip(e){
                let slugRegion = e

                this.engagement = 0
                this.mobilisation = 0
                this.execution = 0

                let tablefinancement = this.investissementBysecteurs?.filter(investissement => investissement.region[0].slug === slugRegion)
                 
                let montants = tablefinancement?.map((item)=>{
                //console.log('List Invest Region***********',item )
                    item.ligne_financements.map((item)=>{
                    //Engagement
                    let montantBienServicePrevus = parseInt(item.montantBienServicePrevus)
                    let montantInvestissementPrevus = parseInt(item.montantInvestissementPrevus)
                    this.engagement = this.engagement + montantBienServicePrevus + montantInvestissementPrevus

                    //Mobilisation
                    let montantBienServiceMobilises = parseInt(item.montantBienServiceMobilises)
                    let montantInvestissementMobilises = parseInt(item.montantInvestissementMobilises)
                    this.mobilisation = this.mobilisation + montantBienServiceMobilises + montantInvestissementMobilises

                    //Execution
                    let montantBienServiceExecutes = parseInt(item.montantBienServiceExecutes)
                    let montantInvestissementExecutes = parseInt(item.montantInvestissementExecutes)
                    this.execution = this.execution + montantBienServiceExecutes + montantInvestissementExecutes

                    })
                })
                console.log('Montant engagement : +++ ',this.engagement)
                
            },
            getInfo(e){
                let slugRegion = e.target.id
                this.title = e.target.id
                this.isHovering = true
                this.x = e.pageX;
                this.y = e.pageY;

                this.engagement = 0
                this.mobilisation = 0
                this.execution = 0

                let tablefinancement = this.investissementBysecteurs?.filter(investissement => investissement.region[0].slug === slugRegion)
                 
                let montants = tablefinancement?.map((item)=>{
                //console.log('List Invest Region***********',item )
                    item.ligne_financements.map((item)=>{
                    //Engagement
                    let montantBienServicePrevus = parseInt(item.montantBienServicePrevus)
                    let montantInvestissementPrevus = parseInt(item.montantInvestissementPrevus)
                    this.engagement = this.engagement + montantBienServicePrevus + montantInvestissementPrevus

                    //Mobilisation
                    let montantBienServiceMobilises = parseInt(item.montantBienServiceMobilises)
                    let montantInvestissementMobilises = parseInt(item.montantInvestissementMobilises)
                    this.mobilisation = this.mobilisation + montantBienServiceMobilises + montantInvestissementMobilises

                    //Execution
                    let montantBienServiceExecutes = parseInt(item.montantBienServiceExecutes)
                    let montantInvestissementExecutes = parseInt(item.montantInvestissementExecutes)
                    this.execution = this.execution + montantBienServiceExecutes + montantInvestissementExecutes

                    })
                })
                console.log('Montant engagement : +++ ',this.engagement)
                
            },
            getListsecteur(){
                
                this.progress=true
                this.$axios.$get('/allpostepeages')
                .then(async (response) => {
                    //this.$toast.success(response.message).goAway(2000)
                    console.log('Données secteurs Reçu ++++++: ', response)
                    this.secteurs = response.data
                   // Create chart instance
                   let {am4core, am4charts,am4maps,senegalHigh, am4themes_animated, am4themes_dark} = this.$am4core();
                    // Create map instance
                    let map = am4core.create("chartdiv", am4maps.MapChart);
                    
                    // Set map definition
                    map.geodata = senegalHigh;
                        
                    // Set projection
                    map.projection = new am4maps.projections.Miller();
                    
                    // Zoom control
                    map.zoomControl = new am4maps.ZoomControl();
                        
                    // The world
                    let polygonSeries = map.series.push(new am4maps.MapPolygonSeries());    
                    polygonSeries.useGeodata = true;
                    polygonSeries.calculateVisualCenter = true;

                    polygonSeries.data = tablefinancementmaps

                    //set the color
                    polygonSeries.heatRules.push({
                    "property": "fill",
                    "target": polygonSeries.mapPolygons.template,
                    "min": am4core.color("#ffffff"),
                    "max": am4core.color("#084f31"),
                    "logarithmic": true
                    });

                    //set legend
                    // Set up heat legend
                    let heatLegend = map.createChild(am4maps.HeatLegend);
                    heatLegend.series = polygonSeries;
                    heatLegend.align = "right";
                    heatLegend.height = am4core.percent(80);
                    heatLegend.orientation = "vertical";
                    heatLegend.valign = "top";
                    heatLegend.marginLeft = am4core.percent(4);
                    heatLegend.marginTop = am4core.percent(4);
                    heatLegend.valueAxis.renderer.opposite = true;
                    heatLegend.valueAxis.renderer.dx = - 25;
                    heatLegend.valueAxis.strictMinMax = false;
                    heatLegend.valueAxis.fontSize = 12;
                    heatLegend.valueAxis.logarithmic = true;
                    polygonSeries.mapPolygons.template.events.on("over", function(ev) {
                    if (!isNaN(ev.target.dataItem.value)) {
                        heatLegend.valueAxis.showTooltipAt(ev.target.dataItem.value)
                    }
                    else {
                        heatLegend.valueAxis.hideTooltip();
                    }
                    });

                    polygonSeries.mapPolygons.template.events.on("out", function(ev) {
                    heatLegend.valueAxis.hideTooltip();
                    });

                    // Configure series
                    let polygonTemplate = polygonSeries.mapPolygons.template;
                    polygonTemplate.tooltipText = "{name} : {value} ";
                    polygonTemplate.propertyFields.fill = "fill";
                    polygonTemplate.stroke = am4core.color("#084f31")
                    polygonTemplate.strokeWidth = 1;
                    polygonTemplate.hoverOnFocus = true;
                    polygonTemplate.nonScalingStroke = true;

                    // Create hover state and set alternative fill color
                    let hs = polygonTemplate.states.create("hover");
                    hs.properties.fill = am4core.color("#367B25");

                    //circles
                    /* let imageSeries = map.series.push(new am4maps.MapImageSeries());
                    let imageSeriesTemplate = imageSeries.mapImages.template;
                    let circle = imageSeriesTemplate.createChild(am4core.Circle);
                    circle.radius = 10;
                    circle.fill = am4core.color("#367B25");
                    circle.stroke = am4core.color("#FFFFFF");
                    circle.strokeWidth = 2;
                    circle.nonScaling = true;
                    circle.tooltipText = "{name}";
                    imageSeriesTemplate.propertyFields.latitude = "latitude";
                    imageSeriesTemplate.propertyFields.longitude = "longitude";
                    imageSeries.data = tablefinancementmaps

                    imageSeriesTemplate.events.on("hit", (ev)=>{
                    console.log(ev.target.dataItem.dataContext.name)
                    }) */

                    //label
                    let labelSeries = map.series.push(new am4maps.MapImageSeries());
                    let labelTemplate = labelSeries.mapImages.template.createChild(am4core.Label);
                    labelTemplate.horizontalCenter = "right";
                    labelTemplate.verticalCenter = "middle";
                    labelTemplate.fontSize = 12;
                    //labelTemplate.nonScaling = true;
                    labelTemplate.interactionsEnabled = false;

                    polygonSeries.events.on("inited", function () {
                    polygonSeries.mapPolygons.each(function (polygon) {
                        let label = labelSeries.mapImages.create();
                        let state = polygon.dataItem.dataContext.name;
                        label.latitude = polygon.visualLatitude;
                        label.longitude = polygon.visualLongitude;
                        label.children.getIndex(0).text = state;
                    });
                    });

                }).catch((error) => {
                    console.log('Code error ++++++: ', error?.response?.data?.message)
                }).finally(() => {
                    console.log('Requette envoyé ')
                });
            },
            investissementBysecteur(secteur){
                this.isloading =true
                this.isActivesecteur = secteur.id
                this.titlesecteur = secteur.libelle
                this.progress=true
                this.$axios.$get('/investissementBySecteur/'+secteur)
                .then(async (response) => {
                    //this.$toast.success(response.message).goAway(2000)
                    console.log('Données Investissement Reçu ++++++: ', response.data.data)
                    this.investissementBysecteurs = response.data.data
                    let tablefinancementmaps = []
                   await response.data.data.map((item)=>{
                        /* let regionId = item.region.length?.region[0].slug
                        let regionName = item.region.length?.region[0].nom_region */
                        //console.log('region données+++++++',item.region[0].slug)
                        let idRegion = item.region[0]?.slug
                        let slugRegion = item.region[0]?.slug
                        let nameRegion = item.region[0]?.nom_region
                        let latitude = item.region[0]?.latitude
                        let longitude = item.region[0]?.longitude

                        this.getInfoTooltip(idRegion)
                        
                        tablefinancementmaps.push({id:slugRegion,name:nameRegion,value:this.engagement,latitude:latitude,longitude:longitude})
                    })
                    // Create chart instance
                    let {am4core, am4charts,am4maps,senegalHigh, am4themes_animated, am4themes_dark} = this.$am4core();
                    // Create map instance
                    let map = am4core.create("chartdiv", am4maps.MapChart);
                    
                    // Set map definition
                    map.geodata = senegalHigh;
                        
                    // Set projection
                    map.projection = new am4maps.projections.Miller();
                    
                    // Zoom control
                    map.zoomControl = new am4maps.ZoomControl();
                        
                    // The world
                    let polygonSeries = map.series.push(new am4maps.MapPolygonSeries());    
                    polygonSeries.useGeodata = true;
                    polygonSeries.calculateVisualCenter = true;

                    polygonSeries.data = tablefinancementmaps

                    //set the color
                    polygonSeries.heatRules.push({
                    "property": "fill",
                    "target": polygonSeries.mapPolygons.template,
                    "min": am4core.color("#ffffff"),
                    "max": am4core.color("#084f31"),
                    "logarithmic": true
                    });

                    //set legend
                    // Set up heat legend
                    let heatLegend = map.createChild(am4maps.HeatLegend);
                    heatLegend.series = polygonSeries;
                    heatLegend.align = "right";
                    heatLegend.height = am4core.percent(80);
                    heatLegend.orientation = "vertical";
                    heatLegend.valign = "top";
                    heatLegend.marginLeft = am4core.percent(4);
                    heatLegend.marginTop = am4core.percent(4);
                    heatLegend.valueAxis.renderer.opposite = true;
                    heatLegend.valueAxis.renderer.dx = - 25;
                    heatLegend.valueAxis.strictMinMax = false;
                    heatLegend.valueAxis.fontSize = 12;
                    heatLegend.valueAxis.logarithmic = true;
                    polygonSeries.mapPolygons.template.events.on("over", function(ev) {
                    if (!isNaN(ev.target.dataItem.value)) {
                        heatLegend.valueAxis.showTooltipAt(ev.target.dataItem.value)
                    }
                    else {
                        heatLegend.valueAxis.hideTooltip();
                    }
                    });

                    polygonSeries.mapPolygons.template.events.on("out", function(ev) {
                    heatLegend.valueAxis.hideTooltip();
                    });

                    // Configure series
                    let polygonTemplate = polygonSeries.mapPolygons.template;
                    polygonTemplate.tooltipText = "{name} : {value} ";
                    polygonTemplate.propertyFields.fill = "fill";
                    polygonTemplate.stroke = am4core.color("#084f31")
                    polygonTemplate.strokeWidth = 1;
                    polygonTemplate.hoverOnFocus = true;
                    polygonTemplate.nonScalingStroke = true;

                    // Create hover state and set alternative fill color
                    let hs = polygonTemplate.states.create("hover");
                    hs.properties.fill = am4core.color("#367B25");

                    //circles
                    /* let imageSeries = map.series.push(new am4maps.MapImageSeries());
                    let imageSeriesTemplate = imageSeries.mapImages.template;
                    let circle = imageSeriesTemplate.createChild(am4core.Circle);
                    circle.radius = 10;
                    circle.fill = am4core.color("#367B25");
                    circle.stroke = am4core.color("#FFFFFF");
                    circle.strokeWidth = 2;
                    circle.nonScaling = true;
                    circle.tooltipText = "{name}";
                    imageSeriesTemplate.propertyFields.latitude = "latitude";
                    imageSeriesTemplate.propertyFields.longitude = "longitude";
                    imageSeries.data = tablefinancementmaps

                    imageSeriesTemplate.events.on("hit", (ev)=>{
                    console.log(ev.target.dataItem.dataContext.name)
                    }) */

                    //label
                    let labelSeries = map.series.push(new am4maps.MapImageSeries());
                    let labelTemplate = labelSeries.mapImages.template.createChild(am4core.Label);
                    labelTemplate.horizontalCenter = "right";
                    labelTemplate.verticalCenter = "middle";
                    labelTemplate.fontSize = 12;
                    //labelTemplate.nonScaling = true;
                    labelTemplate.interactionsEnabled = false;

                    polygonSeries.events.on("inited", function () {
                    polygonSeries.mapPolygons.each(function (polygon) {
                        let label = labelSeries.mapImages.create();
                        let state = polygon.dataItem.dataContext.name;
                        label.latitude = polygon.visualLatitude;
                        label.longitude = polygon.visualLongitude;
                        label.children.getIndex(0).text = state;
                    });
                    });

                }).catch((error) => {
                    console.log('Code error ++++++: ', error?.response?.data?.message)
                }).finally(() => {
                    console.log('Requette envoyé ')
                    this.isloading =false
                });
            },
            createdMap() {
                // Create chart instance
                let {am4core, am4charts,am4maps,senegalHigh, am4themes_animated, am4themes_dark} = this.$am4core();
                // Create map instance
                let map = am4core.create("chartdiv", am4maps.MapChart);
                
                // Set map definition
                map.geodata = senegalHigh;
                    
                // Set projection
                map.projection = new am4maps.projections.Miller();
                
                // Zoom control
                map.zoomControl = new am4maps.ZoomControl();
                    
                // The world
                let polygonSeries = map.series.push(new am4maps.MapPolygonSeries());    
                polygonSeries.useGeodata = true;
                polygonSeries.calculateVisualCenter = true;

                polygonSeries.data = this.tablefinancementmaps

                // Configure series
                let polygonTemplate = polygonSeries.mapPolygons.template;
                polygonTemplate.tooltipText = "{name} : {value} ";
                polygonTemplate.propertyFields.fill = "fill";
                polygonTemplate.stroke = am4core.color("#084f31")
                polygonTemplate.strokeWidth = 1;
                polygonTemplate.hoverOnFocus = true;
                polygonTemplate.nonScalingStroke = true;

                // Create hover state and set alternative fill color
                let hs = polygonTemplate.states.create("hover");
                hs.properties.fill = am4core.color("#367B25");

                
            }
        }
    };
</script>
<style scoped>
#chartdiv {
  width: 100%;
  height: 600px;
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
.descriptionsecteur {
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

  color: #2E495E;
  letter-spacing: 1px;
  font-size: 6em;
}
.green {
  color: #00C48D;
}

.subtitle {
  font-weight: 300;
  font-size: 1em;
  color: #2E495E;
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
color: #197d5c;
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
.text-secteur{
    font-size: 18px !important;
    color: #000000b5;
}
.activesecteur{
    color: #197d5c !important;
}
.scrollable-bloc{
    max-height: 100%;
    overflow:scroll !important;
    overflow-x: hidden !important;
}
.loading{

}
</style>
