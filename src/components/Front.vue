<template>

  <div v-if="getpagerequest == 1 && getfrontdata.company != null && getfrontdata.company != ''">

    <script v-html="jsonlddata"  type="application/ld+json"></script>

    <div v-if="getfrontdata.company.theme_id == 1">
      <ThemeRed :data="getfrontdata" />
    </div>

    <div v-if="getfrontdata.company.theme_id == 2">
      <ThemeDynamic :data="getfrontdata" />
    </div>

    <div v-if="getfrontdata.company.theme_id == 3">
      <ThemeShop :data="getfrontdata" />
    </div>
    
    <div v-if="getfrontdata.company.theme_id == 9">
      <ThemeGreen :data="getfrontdata" />
    </div>

  </div>
</template>

<script>
import axios from 'axios'
import StarRating from 'vue-star-rating'
import L from 'leaflet';
import { LMap, LTileLayer, LMarker,LPopup } from 'vue2-leaflet';
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime';
import ThemeRed from './ThemeRed.vue'
import ThemeDynamic from './ThemeDynamic.vue'
import ThemeShop from './ThemeShop.vue'
import ThemeGreen from './ThemeGreen.vue'

export default {
    name:'Front',
    data(){
        return{
            companyslug:this.$route.params.companyslug,
            boundRating:0,
            msg:'',
            msgshow:false,
            imsg:'',
            imsgshow:false,
            isloading:true,
            options:[
                {id:1,text:'one'},
                {id:2,text:'two'},
                {id:3,text:'three'},
            ],
            daysofweek:[],
            getdata:[],
            companyurl:window.location.href,
            imgpath:this.$imgpath,
            osmdata:{
              lat:'',
              lng:'',
              displayname:''
            },
            // Map Data  
            url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',      
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            marker: null,
            ismapdata:0,

            jsonlddata:{
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "",
              image: "",
              "@id": "",
              url: "",
              telephone: "",
              priceRange: "",
              address: {
                "@type": "PostalAddress",
                streetAddress: "",
                addressLocality: "",
                postalCode: "",
                addressCountry: ""
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: '',
                longitude: ''
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [],
                opens: "",
                closes: ""
              },
              sameAs: [] 
            },
        }
    },
    components:{
        StarRating,
        LMap,
        LTileLayer,
        LMarker,
        LPopup,
        ThemeRed,
        ThemeDynamic,
        ThemeShop,
        ThemeGreen
    },

    computed:{
        getfrontdata(){
            let data = this.$store.getters.getcompanyfront;
            if(data.length != 0 ){
                if(data.company.length == 0 ){
                  this.$router.push({name:'custompage', params: {pageslug:this.$route.params.companyslug} });
                }
                else{
                  this.osmdata.lat = data.company.map_lat;
                  this.osmdata.lon = data.company.map_lng;
                  this.osmdata.displayname = data.company.area +', '+ data.company.city +', '+ data.company.state +', '+ data.company.country +', '+ data.company.post_code;
                  this.ismapdata = 1;

                  if(data.company.working_hours_day == 'mtf'){
                    this.daysofweek = ['Monday','Tuesday','Wednesday','Thursday','Friday'];
                  }
                  else if(data.company.working_hours_day == 'mts'){
                    this.daysofweek = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
                  }
                  else{
                    this.daysofweek = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
                  }

                  let schema = document.createElement('script')
                  schema.setAttribute('type', 'application/ld+json')

                  this.jsonlddata.name = data.company.company_name;
                  this.jsonlddata.image = this.$imgpath + data.company.company_id + '/banner/' + data.company.company_banner;
                  this.jsonlddata.url = window.location.href;
                  this.jsonlddata.telephone = data.company.company_contact;
                  this.jsonlddata.priceRange = "$$";
                  this.jsonlddata.address.streetAddress = data.company.area;
                  this.jsonlddata.address.addressLocality = data.company.city;
                  this.jsonlddata.address.postalCode = data.company.post_code;
                  this.jsonlddata.address.addressCountry = data.company.country;
                  this.jsonlddata.geo.latitude =  data.company.map_lat;
                  this.jsonlddata.geo.longitude = data.company.map_lng;
                  this.jsonlddata.openingHoursSpecification.dayOfWeek = this.daysofweek;
                  this.jsonlddata.openingHoursSpecification.opens = data.company.working_hours_from;
                  this.jsonlddata.openingHoursSpecification.closes = data.company.working_hours_to;
                  data.social.forEach( social => {
                    this.jsonlddata.sameAs.push(social.link);
                  });
                  document.getElementById("favicon").href = this.$imgpath + data.company.company_id + '/logo/' + data.company.company_logo;
                }
            }
            return data;
        },

        getpagerequest(){
          let req =  this.$store.getters.getcompanyfrontreq;
          if(req == 1){
            
            // let carousel = document.createElement('script')
            // carousel.setAttribute('src', '/src/profileassets/theme/owl.carousel.min.js')
            // document.body.appendChild(carousel);

            // let custom = document.createElement('script')
            // custom.setAttribute('src', '/src/profileassets/js/custom.js')
            // document.body.appendChild(custom);

            // let lazysizes = document.createElement('script')
            // lazysizes.setAttribute('src', '/src/profileassets/theme/lazysizes.min.js')
            // document.body.appendChild(lazysizes);

            // let vcard = document.createElement('script')
            // vcard.setAttribute('src', '/src/profileassets/js/vcard.js')
            // document.body.appendChild(vcard);

          }
          return req;
        }
    },

    created(){
        this.$store.dispatch('changetitle',{ title: localStorage.getItem('sitetitle') });
        this.$store.dispatch('setcompanyfront',{slug: this.companyslug });
        document.title = this.companyslug;
    },

    methods:{

      savevcard(){
        var companycard = vCard.create(vCard.Version.FOUR)
        companycard.add(vCard.Entry.NAME, this.getfrontdata.company.company_name+";;;")
        companycard.add(vCard.Entry.FORMATTEDNAME, this.getfrontdata.company.company_name)
        companycard.add(vCard.Entry.TITLE, this.getfrontdata.company.business_segment)
        companycard.add(vCard.Entry.PHONE, this.getfrontdata.company.company_contact, vCard.Type.CELL)
        companycard.add(vCard.Entry.EMAIL, this.getfrontdata.company.company_email, vCard.Type.WORK)
        companycard.add(vCard.Entry.EMAIL, this.getfrontdata.company.company_email, vCard.Type.HOME)
        companycard.add(vCard.Entry.ADDRESS, ";;"+this.getfrontdata.company.address, vCard.Type.HOME)
        companycard.add(vCard.Entry.URL, window.location.href)

        var link = vCard.export(companycard, this.getfrontdata.company.company_name , true)
        document.body.appendChild(link)
      },

      workingdays(days){
        if(days == 'mtf'){
          return 'Monday To Friday';
        }
        else if(days == 'mts'){
          return 'Monday To Saturday';
        }
        else{
          return 'All Days';
        }
      },

      getmarker(lat,lng){
        return L.latLng([lat,lng])
      },

      datedayformat(date){
        dayjs.extend(relativeTime);
        return dayjs(date).fromNow();
      },

      dateformat(date){
       return dayjs(date).format('YYYY');
      },

    timeformat(time) {
      time = time.toString().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
      if (time.length > 1) { // If time format correct
        time = time.slice (1);  // Remove full string match value
        time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
        time[0] = +time[0] % 12 || 12; // Adjust hours
      }
      return time.join (''); // return adjusted time or original string
    },


      sharelink(){
        if (navigator.share) {
            navigator.share({
                title: this.getfrontdata.company.company_name,
                text: 'Take a look at this Site!',
                url: window.location.href,
              })
              .then(() => {})
              .catch((error) => console.log('Error sharing', error));
          } else {
            console.log('Share not supported on this browser, do it the old way.');
          }
        },

        addtestimonial(){
            let fd = new FormData();
            fd.append('client_name',this.$refs.name.value);
            fd.append('email_address',this.$refs.email.value);
            fd.append('ratting',this.boundRating);
            fd.append('comment',this.$refs.comment.value);
            fd.append('company_id',this.getfrontdata.company.company_id);
            fd.append('isupdate',false);

            axios.post('testimonial/createtestimonial',fd).then((result)=>{
              
              this.$swal.fire('FeedBack Submitted Succesfull','' , 'success');
              this.boundRating = 0;
              this.$refs.name.value = '';
              this.$refs.email.value = '';
              this.$refs.comment.value = '';

            });
        },

        addinquiry(){
            let fd = new FormData();
            fd.append('client_name',this.$refs.iname.value);
            fd.append('email_address',this.$refs.iemail.value);
            fd.append('phone_number',this.$refs.iphone.value);
            fd.append('message',this.$refs.imessage.value);
            fd.append('user_id',0);
            fd.append('company_id',this.getfrontdata.company.company_id);
            fd.append('isupdate',false);

            axios.post('inquiry/createinquiry',fd).then((result)=>{
                this.$swal.fire('Inquiry Submitted Succesfull','' , 'success');
                this.$refs.iname.value = '';
                this.$refs.iemail.value = '';
                this.$refs.iphone.value = '';
                this.$refs.imessage.value = '';
            });
        },

    }
}
</script>