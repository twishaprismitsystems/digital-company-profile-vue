<template>
<div  v-if="getpagerequest == 1 && getfrontdata.company != null && getfrontdata.company != ''">
<link rel="icon" href="#" />
<!--	  fonts--> 
<!--	  offline font-->
<!-- <link rel=""  href="/src/homecaretheme/webfonts/fa-brands-400.woff" as="font">
<link rel=""  href="/src/homecaretheme/webfonts/fa-brands-400.woff" as="font" type="font/woff" crossorigin="anonymous">
<link rel=""  href="/src/homecaretheme/webfonts/fa-brands-400.woff2" as="font" type="font/woff2" crossorigin="anonymous">
<link rel=""  href="/src/homecaretheme/webfonts/fa-solid-900.woff" as="font" type="font/woff" crossorigin="anonymous">
<link rel=""  href="/src/homecaretheme/webfonts/fa-solid-900.woff2" as="font" type="font/woff2" crossorigin="anonymous"> -->

<!--	  theme-->
<link href="/src/homecaretheme/theme/media-query.css" rel="stylesheet" defer>
<link href="/src/homecaretheme/theme/icon.css" rel="stylesheet" defer>
<link href="/src/homecaretheme/theme/owl.carousel.min.css" rel="stylesheet" defer>

<!--	  style-->
<link href="/src/homecaretheme/style.css" rel="stylesheet" >

<div class="main">
  <div class="main-container">
    <div class="section  section-1" id="home">
      <div class="col-12 text-center">
        <div class="brand_image">
          <div class="brand-img"> <img :src="imgpath+companydata.company.company_id+'/logo/'+companydata.company.company_logo"  alt=" " title="" class="img-logo"> </div>
        </div>
        <h5 class="head-6">{{companydata.company.company_name}}</h5>
         <h5 class="link_title">“{{companydata.company.business_segment}}”</h5>
      </div>
    </div>
    <div class="section  section-2 text-center" >
      <div class="row no-wrap">
        <div class="col"> <a :href="'tel:'+companydata.company.company_contact" class="per_link"> <i class="fas icon-circle fa-phone-alt" ></i> <span class="link_title">Call</span> </a> </div>
        <div class="col"> <a target="_blank"  :href="'https://api.whatsapp.com/send?phone='+companydata.company.company_contact+'&text=hi'" class="per_link"> <i class="fab icon-circle fa-whatsapp"></i> <span class="link_title" > Whatsapp</span> </a> </div>
        <div class="col"> <a target="_blank" :href="'mailto:'+companydata.company.company_email+'?subject=Enquiry&body=hi'" class="per_link"> <i class="fas icon-circle fa-envelope" ></i> <span class="link_title">Mail Us</span> </a> </div>
        <div class="col"> <a target="_blank" href="https://msng.link/o/?Example=fm" class="per_link"> <i class="fab icon-circle fa-facebook-messenger"></i> <span  class="link_title">Website</span> </a> </div>
        <div class="col"> <a target="_blank" :href="'https://www.google.com/maps/search/?api=1&query='+ companydata.company.area +', '+ companydata.company.city +', '+ getfrontdata.company.state +', '+ getfrontdata.company.country +', '+ getfrontdata.company.post_code" class="per_link"> <i class="fas icon-circle fa-map-marker-alt" ></i> <span class="link_title">Location</span> </a> </div>
      </div>
    </div>
    <div class="section  section-3"> <a class="personal_info no_column border-top-0 pt-0" style="cursor: default;">
      <div class="per_link "> <i class="fas icon-circle fa-phone-alt "></i> </div>
      <div class="per_text">{{companydata.company.company_contact}}</div>
      </a> <a class="personal_info   no_column " style="cursor: default;">
      <div class="per_link"> <i class="fas icon-circle fa-envelope"></i> </div>
      <div class="per_text">{{companydata.company.company_email}}</div>
      </a>
      <div class="personal_info   no_column ">
        <div class="per_link"> <i class="fas icon-circle fa-envelope"></i> </div>
        <div class="per_text">{{timeformat(companydata.company.working_hours_from) }} -  {{ timeformat(companydata.company.working_hours_to) }} - Sunday Closed</div>
      </div>
      <a class="personal_info no_column pb-0" style="cursor: default;">
      <div class="per_link"> <i class="fas icon-circle fa-map-marker-alt "></i> </div>
      <div class="per_text">{{companydata.company.area +', '+ companydata.company.city +', '+ getfrontdata.company.state +', '+ getfrontdata.company.country +', '+ getfrontdata.company.post_code}}.</div>
      </a> </div>
    
    <!-- Share -->
    <div class="section  section-5 text-center" id="share">
      <form @submit.prevent="sharesitelink()" id="wtsp_share">
        <h4 @click="sharelink()" class="text-center heading">Share your Card</h4>
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Name" name="name" v-model="wpname" >
        </div>
        <div class="form-group">
          <input class="form-control" placeholder="Mobile" name="mobile" v-model="wpnumber" >
        </div>
        <div class="d-table mx-auto">
          <button type="submit" class="btn-primary whatsapp_share_btn"><i class="fab fa-whatsapp"></i>Share now</button>
        </div>
      </form>
    </div>

    <div class="row mt-4 mb-4">
      <div class="col-6"><a @click="savevcard()" class="span btn btn-primary w-100 "  download>SAVE CONTACT</a> </div>
      <div class="col-6">
        <div class="dropdown">
          
          <details class="dropdown_menu">
            <summary class="btn-outline-primary btn-primary">SHARE <i class="fas fa-caret-down" ></i></summary>
            <div class="dropdown_list">
                <a v-for="(social,index) in companydata.social" :key="index" :href="social.link" class="dropdown-item">
                  Share On <i :class="social.socialmedia_logo"></i>
                </a>
                
                <!-- <a class="dropdown-item" :href="'https://api.whatsapp.com/send?phone='+companydata.company.company_contact+'&text=hi'"  data-action="share/whatsapp/share">
                    <i class="fab fa-whatsapp "></i>Whatsapp</a>
                <a class="dropdown-item" href="https://facebook.com/sharer/sharer.php?u=#" >
                    <i class="fab fa-facebook-f"></i>Facebook</a>
                <a class="dropdown-item" href="https://twitter.com/share?url=#" >
                    <i class="fab fa-twitter"></i>Twitter</a>  -->
              </div>
          </details>

        </div>
      </div>
    </div>

    <div class="section  section-6" id="about">
      <h4 class="text-center heading">About Us</h4>
      <!-- <p v-if="companydata.company.established_in != ''"><strong> Since  {{ dateformat(companydata.company.established_in) }} </strong></p> -->
      <p>{{companydata.company.company_desc}}</p>
      <p class="gst-text"> GST: 29XXXXXXXXX1006</p>
    </div>

    <div class="section  section-7" id="product" v-if="companydata.product != null && companydata.product != ''" >
      <h4 class="text-center heading">Our Products</h4>
      <div class="row">

        <div class="col-6 text-center mb-3" v-for="(product,index) in companydata.product" :key="index">
          <div class="product-image"> <img :src="imgpath+companydata.company.company_id+'/product/'+product.product_image" class="img-fluid"> </div>
          <p class="para-1">{{product.product_name}}</p>
          <p class="para-2">Rs. {{new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(product.product_price)}} </p>
          <div class="open">
            <div class="btn-margin btn-group  mb-3">
              <button class="btn-small  btn-primary w-100 mr-1">Quick Enquiry</button>
              <a class="btn-small btn-outline-primary btn-primary w-100" href="#!" target="_blank">Shop Now</a> </div>
          </div>
        </div>

      </div>
    </div>


    <!-- <div class="section  section-8" id="document">
      <h4 class="text-center heading">Documents</h4>
      <div class="doc">
        <div class="fa-icon-text"> <i class="fas icon-circle  fa-file-alt "></i> Company Profile </div>
        <div class=" btn-group mt-3"> <a href="#!" class="btn-small  btn-primary w-100 mr-1" target="_blank">View</a> <a href="#!" class=" btn-small btn-outline-primary btn-primary w-100" target="_blank" download>Download</a> </div>
      </div>
      <div class="doc">
        <div class="fa-icon-text"> <i class="fas icon-circle fa-file-alt"></i> ISO Certificate </div>
        <div class=" btn-group mt-3"> <a href="#!" class="btn-small  btn-primary w-100 mr-1" target="_blank">View</a> <a href="#!" class=" btn-small btn-outline-primary btn-primary w-100" target="_blank" download>Download</a> </div>
      </div>
      <div class="doc">
        <div class="fa-icon-text"> <i class="fas icon-circle fa-file-alt"></i> GST Certificate </div>
        <div class=" btn-group mt-3"> <a href="#!" class="btn-small  btn-primary w-100 mr-1" target="_blank">View</a> <a href="#!" class=" btn-small btn-outline-primary btn-primary w-100" target="_blank" download>Download</a> </div>
      </div>
    </div> -->


    <div class="section  section-9" id="gallery" v-if="companydata.portfolio != null && companydata.portfolio != ''">
      <h4 class="text-center heading">Gallery</h4>
      <div class="row">
        <div class="col-6 col-md-6 pr-smm-1 mb-3" v-for="(image,index) in companydata.portfolio" :key="index">
          <div class="gallery-image "> <img :src="imgpath+companydata.company.company_id+'/portfolio/'+image.portfolio_image"> </div>
        </div>
      </div>
      <ul class="pagination">
        <li class="disabled"><a class="" href="#" aria-label="Go to first page">«</a> </li>
        <li class="disabled"><a class="" href="#" aria-label="Go to previous page">⟨</a> </li>
        <li class="active"><a class="undefined" href="#" aria-label="Go to page number 1">1</a> </li>
        <li class=""><a class="" href="#" aria-label="Go to page number 2">2</a> </li>
        <li class=""><a class="" href="#" aria-label="Go to next page">⟩</a> </li>
        <li class=""><a class="" href="#" aria-label="Go to last page">»</a> </li>
      </ul>
    </div>


    <div class="section  " id="services" v-if="companydata.service != null && companydata.service != ''">
      <h4 class="text-center heading">services</h4>
      <div class="row">
        <div class="col-6 col-md-6 pr-smm-1 mb-3" v-for="(service,index) in companydata.service" :key="index">
          <div class="gallery-image "> <img :src="imgpath+companydata.company.company_id+'/service/'+service.service_image"> </div>
          <p>{{service.service_name}}</p>
        </div>
      </div>
    </div>


    <!-- <div class="section  section-10" id="video">
      <h4 class="text-center heading">Videos</h4>
      <div class="row">
        <div class="col-6 col-md-6 pr-smm-1 mb-3">
          <video width="198" height="120" autoplay muted poster="assets/img/video-placeholder.jpg">
            <source src="#" type="videp/mp4">
          </video>
        </div>
        <div class="col-6 col-md-6 pr-smm-1 mb-3">
          <video width="198" height="120" autoplay muted poster="assets/img/video-placeholder.jpg">
            <source src="#" type="videp/mp4">
          </video>
        </div>
        <div class="col-6 col-md-6 pr-smm-1 mb-3">
          <video width="198" height="120" autoplay muted poster="assets/img/video-placeholder.jpg">
            <source src="#" type="videp/mp4">
          </video>
        </div>
        <div class="col-6 col-md-6 pr-smm-1 mb-3">
          <video width="198" height="120" autoplay muted poster="assets/img/video-placeholder.jpg">
            <source src="#" type="videp/mp4">
          </video>
        </div>
        <div class="col-6 col-md-6 pr-smm-1 mb-3">
          <video width="198" height="120" autoplay muted poster="assets/img/video-placeholder.jpg">
            <source src="#" type="videp/mp4">
          </video>
        </div>
        <div class="col-6 col-md-6 pr-smm-1 mb-3">
          <video width="198" height="120" autoplay muted poster="assets/img/video-placeholder.jpg">
            <source src="#" type="videp/mp4">
          </video>
        </div>
      </div>
    </div> -->

    <div class="section payment_detail_sec  section-11" id="payment" v-if="companydata.paymentinfo.account_holder_name != '' && companydata.paymentinfo.bank_name && getfrontdata.paymentinfo.bank_account_number && getfrontdata.paymentinfo.bank_ifsc_code && getfrontdata.paymentinfo.account_type">
      <h4 class="text-center heading">Payment Details</h4>
      <div class="row no-gutter mb-3"	> <i class="fas icon-circle  fa-user-circle "></i>
        <div class="payment_label"><strong>A/C Name:</strong> {{companydata.paymentinfo.account_holder_name}}</div>
      </div>
      <div class="row no-gutter mb-3"> <i class="fas icon-circle  fa-hashtag "></i>
        <div class="payment_label"><strong>A/C Number:</strong> {{companydata.paymentinfo.bank_account_number}}</div>
      </div> 
      <div class="row no-gutter mb-3"> <i class="fas icon-circle  fa-university "></i>
        <div class="payment_label"><strong>Bank Name:</strong> {{companydata.paymentinfo.bank_name}} </div>
      </div>
      <div class="row no-gutter mb-3"> <i class="fas icon-circle  fa-money-check "></i>
        <div class="payment_label"><strong>IFSC:</strong> {{companydata.paymentinfo.bank_ifsc_code}}</div>
      </div>
      <div class="row no-gutter mb-3">
        <div class="icon-circle"> <img class="" src="src/homecaretheme/img/gpay.svg"> </div>
        <div class="payment_label"><strong>Google Pay:</strong>{{companydata.paymentinfo.googlepay_number}}</div>
      </div>
      <div class="row no-gutter mb-3">
        <div class="icon-circle"> <img class="" src="src/homecaretheme/img/phonepe.svg"> </div>
        <div class="payment_label"><strong>PhonePe:</strong>{{companydata.paymentinfo.phonepay_number}}</div>
      </div>
      <div class="row no-gutter mb-3">
        <div class="icon-circle"> <img class="" src="src/homecaretheme/img/paytm.svg"> </div>
        <div class="payment_label border-0"><strong>Paytm:</strong> {{companydata.paymentinfo.paytm_number}}</div>
      </div>
    </div>

    <div class="section  section-13" id="location">
      <!-- <h4 class="text-center heading">Google Map</h4>
      <div class="row">
        <div class="col-md-12">
          <iframe src="https://maps.google.com/maps?q=41.8781136,-87.6297982&amp;z=15&amp;output=embed" width="100%" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0" style="border: 0px;"></iframe>
        </div>
      </div> -->
          <div style="width: 100%; height: 20rem">
          <div id="map" style="width: 100%; height: 20rem">
            <l-map :zoom="17" :center="[this.osmdata.lat,osmdata.lon ]" style="height: 400px; width:100%">
              <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
              <l-marker :lat-lng="getmarker(osmdata.lat,osmdata.lon)">
                <l-popup :content="osmdata.displayname"></l-popup>
              </l-marker>
            </l-map>
           </div>
          </div>

    </div>
    
    <div class="section  section-15" id="enquiry">
      <h4 class="text-center heading">Enquiry Form</h4>
      <form @submit.prevent="addinquiry">
        <div class="form-group">
          <input type="text" class="form-control" id="iname" ref="iname" name="iname" placeholder="Enter Your Name" required>
        </div>
        <div class="form-group">
          <input type="email" class="form-control" id="iemail" ref="iemail" name="iemail" placeholder="Enter Your Email " required>
        </div>
        <div class="form-group">
          <input type="number" class="form-control" id="iphone" ref="iphone" name="iphone" placeholder="Enter Your Mobile no." required>
        </div>
        <div class="form-group">
          <textarea class="form-control" placeholder="Enter Your Feedback" rows="5" name="imessage" ref="imessage" required></textarea>
        </div>
        <div class=" form-group d-table mx-auto">
          <button type="submit" class="btn-primary"><i class="fas fa-paper-plane"></i>Submit</button>
        </div>
      </form>
    </div>
<!-- 
    <div class="section footer text-center">
      <p class="mb-0"><span>Made with <i class="fas fa-heart" style="color: red"></i> by </span> <a href="#" target="_blank"> <img src="/src/homecaretheme/img/home-care-logo.png" width="120px"> </a> </p>
    </div> -->

    <div class="section  section-16 text-center">
      <div class="owl-carousel owl-theme navs_slider">
        <div class="item"> <a href="#home"> <i class="fas icon-circle  fa-home "></i> <span class="link_title">Home</span> </a> </div>
        <div class="item"> <a href="#about"> <i class="fas icon-circle  fa-info "></i> <span class="link_title">About Us</span> </a> </div>
        <div class="item" v-if="companydata.product != null && companydata.product != ''"> <a href="#product"> <i class="fas icon-circle  fa-box-open "></i> <span class="link_title">Products</span> </a> </div>
        <!-- <div class="item" > <a href="#document"> <i class="fas icon-circle  fa-file-alt "></i> <span class="link_title">Documents</span> </a> </div> -->
        <div class="item" v-if="companydata.portfolio != null && companydata.portfolio != ''"> <a href="#gallery"> <i class="fas icon-circle  fa-images "></i> <span class="link_title">Gallery</span> </a> </div>
        <div class="item" v-if="companydata.service != null && companydata.service != ''"> <a href="#services"> <i class="fas icon-circle  fa-cog "></i> <span class="link_title">Services</span> </a> </div>
        <!-- <div class="item"> <a href="#video"> <i class="fab icon-circle  fa-youtube "></i> <span class="link_title">Video</span> </a> </div> -->
        <div class="item" v-if="companydata.paymentinfo.account_holder_name != '' && companydata.paymentinfo.bank_name && getfrontdata.paymentinfo.bank_account_number && getfrontdata.paymentinfo.bank_ifsc_code && getfrontdata.paymentinfo.account_type"> <a href="#payment"> <i class="fas icon-circle  fa-credit-card "></i> <span class="link_title">Payment</span> </a> </div>
        <div class="item"> <a href="#location"> <i class="fas icon-circle  fa-map-marker-alt "></i> <span class="link_title">location</span> </a> </div>
        <div class="item"> <a href="#enquiry"> <i class="far icon-circle  fa-question-circle "></i> <span class="link_title">Enquiry</span> </a> </div>
      </div>
    </div>
  </div>
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
// import carousel from 'vue-owl-carousel'
const color = 'green'
const theme = {
  color: 'red'
}
export default {
    name:"ThemeDynamic",
    data(){ 
        return{
            companydata:[],
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
            wpname:'',
            wpnumber:'',

            colorvar:'126e83'

        }
    },

    components:{
        StarRating,
        LMap,
        LTileLayer,
        LMarker,
        LPopup,
        // carousel
    },

    created(){
        this.$store.dispatch('changetitle',{ title: localStorage.getItem('sitetitle') });
        this.$store.dispatch('setcompanyfront',{slug: this.companyslug });
        document.title = this.companyslug;
        this.companydata = this.data;
    },

    props:{
        data:{

        }
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

                  // console.log(parseFloat(this.osmdata.lat)+0.1);
                  // console.log(this.osmdata.lon);

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

                 
                  document.getElementById("favicon").href = this.$imgpath + data.company.company_id + '/logo/' + data.company.company_logo;
                }
            }
            return data;
        },

        getpagerequest(){
          let req =  this.$store.getters.getcompanyfrontreq;
          if(req == 1){
            
            // let jquery = document.createElement('script')
            // jquery.setAttribute('src', '/src/homecaretheme/theme/jquery.min.js')
            // document.body.appendChild(jquery);
            
            let carousel = document.createElement('script')
            carousel.setAttribute('src', '/src/homecaretheme/theme/owl.carousel.min.js')
            document.body.appendChild(carousel);

            let custom = document.createElement('script')
            custom.setAttribute('src', '/src/homecaretheme/js/custom.js')
            document.body.appendChild(custom);

            // let lazysizes = document.createElement('script')
            // lazysizes.setAttribute('src', '/src/homecaretheme/theme/lazysizes.min.js')
            // document.body.appendChild(lazysizes);

            // let vcard = document.createElement('script')
            // vcard.setAttribute('src', '/src/redassets/js/vcard.js')
            // document.body.appendChild(vcard);

          }
          return req;
        }
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

    sharesitelink(){
        window.open('https://api.whatsapp.com/send/?phone='+this.wpnumber+'&text='+window.location.protocol+"//"+window.location.hostname+window.location.pathname,'_blank');
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
