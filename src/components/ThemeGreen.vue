<template>
<div v-if="getpagerequest == 1 && getfrontdata.company != null && getfrontdata.company != ''">
<link rel="icon" href="#" />
<!--	  fonts--> 

<!--	  offline font-->
<!-- <link rel="preload"  href="/src/profileassets/webfonts/fa-brands-400.woff" as="font">
<link rel="preload"  href="/src/profileassets/webfonts/fa-brands-400.woff" as="font" type="font/woff" crossorigin="anonymous">
<link rel="preload"  href="/src/profileassets/webfonts/fa-brands-400.woff2" as="font" type="font/woff2" crossorigin="anonymous">
<link rel="preload"  href="/src/profileassets/webfonts/fa-solid-900.woff" as="font" type="font/woff" crossorigin="anonymous">
<link rel="preload"  href="/src/profileassets/webfonts/fa-solid-900.woff2" as="font" type="font/woff2" crossorigin="anonymous"> -->

<!--	  theme-->
<link href="/src/profileassets/theme/media-query.css" rel="preload" as="style">
<link href="/src/profileassets/theme/icon.css" rel="preload" as="style">
<link href="/src/profileassets/theme/owl.carousel.min.css" rel="preload" as="style">
<!--	  style-->
<link href="/src/profileassets/css/style.css" rel="preload" as="style">
<!--	  theme-->
<link href="/src/profileassets/theme/media-query.css" rel="stylesheet" defer>
<link href="/src/profileassets/theme/icon.css" rel="stylesheet" defer>
<link href="/src/profileassets/theme/owl.carousel.min.css" rel="stylesheet" defer>
<!--	  style-->
<link href="/src/profileassets/css/style.css" rel="stylesheet" >


<div class="container-fluid p-0 " id="">
  <section id="profile" class="profile-section">
    <div class="container h-100 ">
      <div class="row profile-row">
        <div class=" col-12 text-center">
          <div class="store-logo"> <img :src="imgpath+companydata.company.company_id+'/logo/'+companydata.company.company_logo" width="62" height="49" alt="logo" title="logo-img"  class="img-responsive" /> </div>
        </div>
        <div class="col-12 text-center">
          <h1 class="store-name">{{companydata.company.company_name}}</h1>
          <h4 class="store-tagline">“{{companydata.company.business_segment}}”</h4>
        </div>
      </div>
    </div>
  </section>
  <div class="profile-body pt-30" id="top">
    <div class="container store-contact">
      <div class="row justify-content-center">
        <div class="col-lg-2 col-md-4 col-3 contact-link"> <a :href="'tel:'+companydata.company.company_contact" class="link-icon call-icon"> <i class="fas fa-phone-alt" ></i> </a>
          <p>Call</p>
        </div>
        <div class="col-lg-2 col-md-4 col-3 contact-link"> <a :href="'https://wa.me/+'+companydata.company.company_contact" class="link-icon whatsapp-icon" target="_blank" rel="noopener"> <i class="fab fa-whatsapp"></i> </a>
          <p>Whatsapp</p>
        </div>
        <div class="col-lg-2 col-md-4 col-3 contact-link"> <a :href="'https://www.google.com/maps/search/?api=1&query='+ companydata.company.area +', '+ companydata.company.city +', '+ getfrontdata.company.state +', '+ getfrontdata.company.country +', '+ getfrontdata.company.post_code" class="link-icon location-icon" target="_blank" rel="noopener"> <i class="fas fa-map-marker-alt" ></i> </a>
          <p>Location</p>
        </div>
        <div class="col-lg-2 col-md-4 col-3 contact-link"> <a :href="'mailto:'+companydata.company.company_email" class="link-icon mail-icon" > <i class="fas fa-envelope" ></i> </a>
          <p>Mail</p>
        </div>
        <div class="col-lg-2 col-md-4 col-3 contact-link">
          <div @click="sharelink()" class="link-icon share-icon"  id="share"> <i class="fas fa-share-square" ></i> </div>
          <p>save</p>
        </div>
        <div class="col-lg-2 col-md-4 col-3 contact-link"> <a @click="savevcard()" class="link-icon save-icon" download > <i class="fas fa-save" ></i> </a>
          <p>save</p>
        </div>
      </div>
    </div>
    <div class="container"> 
      <!--			whatsapp share-->
      <div class="whatsapp-share-form">
        <form @submit.prevent="sharesitelink()" action="https://api.whatsapp.com/send" id="wtsp_share" target="_blank">
          <!--				<label>+91</label>-->
          <input type="text" name="phone" required placeholder="WhatsApp Number with Country code "  v-model="wpnumber" value="+91">
          <button type="submit" class="wtsp_share_btn">Share <i class="fab fa-whatsapp"></i> </button>
        </form>
       
      </div>
      
      <!--			Follow us-->
      <div class="follow-us-block mt-30">
        <h3 class="text-center titleClr">Follow Us On</h3>
        <div class="social-links"> 
          <a v-for="(social,index) in companydata.social" :key="index" :href="social.link" :class="social.socialmedia_color"><i :class="social.socialmedia_logo"></i></a>
        </div>
      </div>
      
      <!--			about-->
      <div class="about-block " id="about-us">
        <div class="block-title mt-30 mb-30">
          <h3 class="">About</h3>
        </div>
        <div class="content-box">
          <p><strong>Since 2005</strong></p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
        </div>
      </div>

      <!-- Product -->
      <div class="product-block " id="products" v-if="companydata.product != null && companydata.product != ''">
        <div class="block-title mt-30 mb-30">
          <h3 class="">Product</h3>
        </div>
        <div class="row">
          <div class="owl-carousel owl-theme product-slider"> 
            <div class="item " v-for="(product,index) in companydata.product" :key="index">
              <div class="content-box product-box">
                <div class="product-img"> <img :data-src="imgpath+companydata.company.company_id+'/product/'+product.product_image" width="156" height="190" alt="product-img" title="product-img" class="lazyload "> </div>
                <div class="product-info">
                  <h4 class="product-title">{{product.product_name}}</h4>
                  <p class="product-description">{{product.product_desc}} </p>
                  <div class="product-action"> <span class="product-price">Rs. {{new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(product.product_price)}}</span> <a href="#" class="site_btn">Buy Now</a> </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!--			Services-->
      <div class="services-block " id="services" v-if="companydata.service != null && companydata.service != ''">
        <div class="block-title mt-30 mb-30">
          <h3 class="">Services</h3>
        </div>
        <div class="row">
          <div class="owl-carousel owl-theme services-slider"> 

            <div class="item " v-for="(service,index) in companydata.service" :key="index">
              <div class="content-box services-box">
                <div class="services-img"> <img :data-src="imgpath+companydata.company.company_id+'/service/'+service.service_image" width="298" height="199"  alt="services-img" title="services-img" class="lazyload img-fluid"> </div>
                <div class="services-info">
                  <h4 class="services-title titleClr">{{service.service_name}}</h4>
                  <p class="services-description">{{service.service_desc}}</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      <!-- Clients -->
      <div class="product-block " id="products" v-if="companydata.client != null && companydata.client != ''">
        <div class="block-title mt-30 mb-30">
          <h3 class="">Clients</h3>
        </div>
        <div class="row">
          <div class="owl-carousel owl-theme product-slider"> 
            <div class="item " v-for="(client,index) in companydata.client" :key="index">
              <div class="content-box product-box">
                <div class="product-img"> <img :data-src="imgpath+companydata.company.company_id+'/client/'+client.client_logo" width="156" height="190" alt="product-img" title="product-img" class="lazyload "> </div>
                <div class="product-info">
                  <h4 class="product-title">{{client.client_name}}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--		Gallery-->
      <div class="gallery-block " id="gallery" v-if="companydata.portfolio != null && companydata.portfolio != ''">
        <div class="block-title mt-30 mb-30">
          <h3 class="">Gallery</h3>
        </div>
        <div class="row">
          <div class="owl-carousel owl-theme gallery-slider"> 
            <div class="item " v-for="(image,index) in companydata.portfolio" :key="index">
              <div class="content-box gallery-box p-0"> <img :data-src="imgpath+companydata.company.company_id+'/portfolio/'+image.portfolio_image" width="335" height="335"  alt="gallery-img" title="gallery-img" class="lazyload img-fluid" > </div>
            </div>
          </div>
        </div>
      </div>
      
      <!--		payment-info-->
      <div class="payment-info-block" id="payment-info" v-if="companydata.paymentinfo != null && companydata.paymentinfo != ''">
        <div class="block-title mt-30 mb-30">
          <h3 class="">Payment Info</h3>
        </div>
        <div class="row"> 
			 <div class="col-lg-6 col-12 mx-auto p-0">
          <!--					google pay-->
          <div class="col-12 " v-if="companydata.paymentinfo.googlepay_number != ''">
            <div class="pay-detail"> <span class="app-name">Google Pay</span>
              <div class="link-icon google-icon"> <img data-src="/src/profileassets/img/google-pay.png" width="35" height="30" alt="Digital Profile" title="Digital Profile" class="lazyload"/> </div>
              <div class="pay-info">
                <dl>
                  <dt>No.:&nbsp;</dt>
                  <dd> {{companydata.paymentinfo.googlepay_number}}</dd>
                  <dt>UPI.:</dt>
                  <dd>google@sbi</dd>
                </dl>
              </div>
            </div>
          </div>
          <!--					phone-pe-->
          <div class="col-12" v-if="companydata.paymentinfo.phonepay_number != ''">
            <div class="pay-detail"> <span class="app-name">Phone Pe</span>
              <div class="link-icon google-icon"> <img data-src="/src/profileassets/img/phone-pe.png" width="30" height="30" alt="Digital Profile" title="Digital Profile"  class="lazyload "/> </div>
              <div class="pay-info">
                <dl>
                  <dt>No.:&nbsp;</dt>
                  <dd>{{companydata.paymentinfo.phonepay_number}}</dd>
                  <dt>UPI.:</dt>
                  <dd>phonepe@okicici</dd>
                </dl>
              </div>
            </div>
          </div>
          <!--					Paytm-->
          <div class="  col-12" v-if="companydata.paymentinfo.paytm_number != ''">
            <div class="pay-detail"> <span class="app-name">Paytm</span>
              <div class="link-icon google-icon"> <img data-src="/src/profileassets/img/paytm.png" width="35" height="12" alt="Digital Profile" title="Digital Profile"  class="lazyload "/> </div>
              <div class="pay-info">
                <dl>
                  <dt>No.:&nbsp;</dt>
                  <dd>{{companydata.paymentinfo.paytm_number}}</dd>
                </dl>
              </div>
            </div>
          </div>

           <!-- QR Code -->
          <div class="col-12" v-if="companydata.paymentinfo.qrcode != null && companydata.paymentinfo.qrcode != ''">
            <div class="pay-detail"> <span class="app-name">Qr Code</span>
              <div class="link-icon google-icon"> <img rel="preload" data-src="/src/frontassets/img/qrcode.png" width="35" height="12" alt="Digital Profile" title="Digital Profile" class="lazyload "/> </div>
              <div class="pay-info">
                <dl>
                  <dt>Qr Code .:&nbsp;</dt>
                  <dd> <img rel="preload" :src="imgpath+companydata.company.company_id+'/qrcode/'+companydata.paymentinfo.qrcode" alt="Qr code" width="150" height="150" /> </dd>
                </dl>
              </div>
            </div>
          </div>
			
          </div>
			
          <!--					bank info-->
			 <div class="col-lg-6 col-12 p-0">
          <div class="col-12">
            <div class="content-box bank-info">
              <h3>Bank Account Details</h3>
              <dl>
                <dt>Name:</dt>
                <dd>{{companydata.paymentinfo.account_holder_name}}</dd>
                <dt>Bank Name:</dt>
                <dd>{{companydata.paymentinfo.bank_name}}</dd>
                <dt>Account Number:</dt>
                <dd>{{companydata.paymentinfo.bank_account_number}}</dd>
                <dt>IFSC Code:</dt>
                <dd>{{companydata.paymentinfo.bank_ifsc_code}}</dd>
                <dt>Account Type:</dt>
                <dd>{{companydata.paymentinfo.account_type}}</dd>
              </dl>
            </div>
          </div>
          </div>
        </div>
      </div>
      
      <!--		feedback	-->
      <div class="feedback-block " id="feedback">
        <div class="block-title mt-30 mb-30">
          <h3 class="">Feedback</h3>
        </div>
        <!--				comments-->
		  <div class="row" v-if="companydata.testimonial != null">
		  	<div class="col-md-6 col-12">
        <div class="comments">
          
          <div class="comment-item" v-for="(testimonialdata,index) in companydata.testimonial" :key="index">
            <h5 class="user-name primary">{{testimonialdata.client_name}}</h5>
            <div class="ratings">
              <div class="rat-stars"> 
                <span v-for="(ratting,index) in parseInt(testimonialdata.ratting)" :key="index" class="rating-star" ><i class="fas fa-star" ></i></span>
              </div>
              <span class="comment-date">{{ datedayformat(testimonialdata.created_on) }}</span> </div>
            <p class="comment-text"> {{testimonialdata.comment}} </p>
          </div>

        </div>
		 </div>
		  <div class="col-md-6 col-12">
		  
        <div class="content-box feedback-box">
          <h3 class="text-center">Give Your Feedback</h3>
          <form @submit.prevent="addtestimonial" id="feedback-form" class="form">
            <p class="star-ratings">
              <star-rating :rtl="true" :show-rating="false" :glow="10" :star-size="30" v-model="boundRating"></star-rating>
            </p>
            <input type="text"  id="name" ref="name" name="name" placeholder="Enter Your Name" required>
            <input type="email" id="email" ref="email" name="email" placeholder="Enter Your Email" required>
            <textarea ref="comment" placeholder="Enter Your Feedback" rows="5" required> </textarea>
            <button type="submit" class="submit-btn">Give Feedback</button>
          </form>
        </div>

      	</div>
      </div>
      </div>
      
      <!--			enquiry-->
      <div class="enquiry-block " id="enquiry">
        <div class="block-title mt-30 mb-30">
          <h3 class="">Enquiry Form</h3>
        </div>
		   <div class="row mb-30">
		  	<div class="col-md-6 col-12">
        <div class="content-box enquiry-box">
          <h3 class="text-center">Give Your Feedback</h3>
          <form @submit.prevent="addinquiry" id="enquiry-form" class="form">
            <input type="text" id="iname" ref="iname" name="iname" placeholder="Enter Your Name" required>
            <input type="number" id="iphone" ref="iphone" name="iphone" placeholder="Enter Your Mobile no." required>
            <input type="Email" id="iemail" ref="iemail" name="iemail" placeholder="Enter Your Email " required>
            <textarea placeholder="Enter Your Feedback" rows="5" name="imessage" ref="imessage" required> </textarea>
            <button type="submit" class="submit-btn">Send</button>
          </form>
        </div>
		   </div>
		  <div class="col-md-6 col-12">
		<div class="direction-block" id=" direction">
        <div class="content-box direction-box p-0 h-100">
          <l-map :zoom="17" :center="[osmdata.lat,osmdata.lon ]" style="height: 400px; width:100%">
            <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
            <l-marker :lat-lng="getmarker(osmdata.lat,osmdata.lon)">
              <l-popup :content="osmdata.displayname"></l-popup>
            </l-marker>
          </l-map>
        </div>
      </div>
		  </div>
      </div>
		  
      </div>
      
      <!--			 Direction-->
     	  

    </div>
<ul class="bottom-nav fixed-bottom">
  <a href="#back" class="site-link back_to_top"> <i class="far fa-arrow-alt-circle-up" ></i> <span>Back to top</span> </a>
  <a href="#about-us" class="site-link scroll-to"> <i class="far fa-user-circle" ></i> <span>About-us</span> </a>
  <a href="#products" v-if="companydata.portfolio != null && companydata.portfolio != ''" class="site-link scroll-to"> <i class="fas fa-shopping-basket" ></i> <span>Products</span> </a>
  <a href="#gallery"  v-if="companydata.service != null && companydata.service != ''" class="site-link scroll-to"> <i class="far fa-images" ></i> <span>Gallery</span> </a>
  <a href="#feedback" class="site-link scroll-to"> <i class="far fa-comment-dots"></i> <span>Feedback</span> </a>
</ul>
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


export default {
    name:"ThemeGreen",
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
            wpnumber:'',
        }
    },
    components:{
        StarRating,
        LMap,
        LTileLayer,
        LMarker,
        LPopup,
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

                  document.getElementById("favicon").href = this.$imgpath + data.company.company_id + '/logo/' + data.company.company_logo;
                }
            }
            return data;
        },

        getpagerequest(){
          let req =  this.$store.getters.getcompanyfrontreq;
          if(req == 1){
            
            let jquery = document.createElement('script')
            jquery.setAttribute('src', '/src/profileassets/theme/jquery.min.js')
            document.body.appendChild(jquery);

            let carousel = document.createElement('script')
            carousel.setAttribute('src', '/src/profileassets/theme/owl.carousel.min.js')
            document.body.appendChild(carousel);

            let lazysizes = document.createElement('script')
            lazysizes.setAttribute('src', '/src/profileassets/theme/lazysizes.min.js')
            document.body.appendChild(lazysizes);
            
            let custom = document.createElement('script')
            custom.setAttribute('src', '/src/profileassets/js/custom.js')
            document.body.appendChild(custom);

            let vcard = document.createElement('script')
            vcard.setAttribute('src', '/src/profileassets/js/vcard.js')
            document.body.appendChild(vcard);

          }
          return req;
        }
    },

    created(){
        this.$store.dispatch('changetitle',{ title: localStorage.getItem('sitetitle') });
        this.$store.dispatch('setcompanyfront',{slug: this.companyslug });
        document.title = this.companyslug;
        this.companydata = this.data;
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

      websitelink(){
        return window.location.protocol+"//"+window.location.hostname+"/"+window.location.pathname;
      },

      sharesitelink(){
        window.open('https://api.whatsapp.com/send/?phone='+this.wpnumber+'&text='+window.location.protocol+"//"+window.location.hostname+window.location.pathname,'_blank');
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
    },
}
</script>
