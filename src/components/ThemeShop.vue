<template>
<div v-if="getpagerequest == 1 && getfrontdata.company != null && getfrontdata.company != ''">
<link rel="icon" href="#" />
<!--	  fonts--> 

<!--	  offline font-->
<!-- <link rel="preload"  href="/src/shopassets/webfonts/fa-brands-400.woff" as="font">
<link rel="preload"  href="/src/shopassets/webfonts/fa-brands-400.woff" as="font" type="font/woff" crossorigin="anonymous">
<link rel="preload"  href="/src/shopassets/webfonts/fa-brands-400.woff2" as="font" type="font/woff2" crossorigin="anonymous">
<link rel="preload"  href="/src/shopassets/webfonts/fa-solid-900.woff" as="font" type="font/woff" crossorigin="anonymous">
<link rel="preload"  href="/src/shopassets/webfonts/fa-solid-900.woff2" as="font" type="font/woff2" crossorigin="anonymous"> -->

<!--	  theme-->
<link href="/src/shopassets/theme/media-query.css" rel="stylesheet" defer>
<link href="/src/shopassets/theme/icon.css" rel="stylesheet" defer>
<link href="/src/shopassets/theme/owl.carousel.min.css" rel="stylesheet" defer>

<!--	  style-->
<link href="/src/shopassets/css/style.css" rel="stylesheet" >

<script v-html="jsonlddata"  type="application/ld+json"></script>

<!--

	<div class="container-fluid">-->
<!--		<div class="container" id="snap-js">-->

		
		<!--		section 1-->
		<section class="section section-1 text-center "  id="profile" data-panel="profile">
			<div class="col-12 profile_logo_col mb-5">
				<img :src="imgpath+companydata.company.company_id+'/logo/'+companydata.company.company_logo" alt="" title="" class=" profile_logo"> 
			</div>
			<div class="col-12 profile_name_col">
				<h1 class="profile_name">{{companydata.company.company_name}}</h1>
				<h6 class="slogan">“{{companydata.company.business_segment}}”</h6>
			</div>
			<div class="col-12 contact_info_col">
				<a :href="'tel:'+companydata.company.company_contact" class="contact-link">
					<span class="link-icon call-icon"><i class="fas fa-phone-alt" ></i></span>
				</a>
				<a :href="'mailto:'+companydata.company.company_email" class="contact-link">
					<span class="link-icon mail-icon"><i class="fas fa-envelope" ></i></span>
				</a>
				<a :href="'https://www.google.com/maps/search/?api=1&query='+ companydata.company.area +', '+ companydata.company.city +', '+ getfrontdata.company.state +', '+ getfrontdata.company.country +', '+ getfrontdata.company.post_code" class="contact-link" target="_blank" rel="noopener">
					<span class="link-icon location-icon"><i class="fas fa-map-marker-alt" ></i> </span>
				</a>
				 <a :href="'https://wa.me/+'+companydata.company.company_contact"  class="contact-link" target="_blank" rel="noopener">
				 	<span class="link-icon"><i class="fab fa-whatsapp"></i> </span>
          		</a>
				<a :href="'https://wa.me/+'+companydata.company.company_contact"   class="contact-link" id="share">
				 	<span class="link-icon"> <i class="fas fa-paper-plane" ></i> </span>
				</a>
			</div>
			<a href="#about-us" class="down_arrow bounce "><i class="fas fa-chevron-down" ></i></a>
			
		</section>
<!--	end	section 1-->
<!--		section 2-->
		<section class="section section-2 text-center "  id="about-us" data-panel="about-us">
			
			<h2 class="heading">About us</h2>
			<p v-if="companydata.company.established_in != ''"><strong> Since  {{ dateformat(companydata.company.established_in) }} </strong></p>
			<p>{{companydata.company.company_desc}}</p>
			<div class="follow_us mt-5">
				<h4>Follow Us</h4>
				<div class="social-links">
					<a v-for="(social,index) in companydata.social" :key="index" :href="social.link" :class="social.socialmedia_color"><i :class="social.socialmedia_logo"></i></a>
					<!-- <a href="#!" class=" social-link fb-icon"><i class="fab fa-facebook-f"></i></a>
					<a href="#!" class=" social-link twt-icon"><i class="fab fa-twitter"></i></a>
					<a href="#!" class=" social-link insta-icon"><i class="fab fa-instagram"></i></a>
					<a href="#!" class=" social-link in-icon"><i class="fab fa-linkedin-in"></i></a>
					<a href="#!" class=" social-link yt-icon"><i class="fab fa-youtube"></i></a>
					<a href="#!" class=" social-link tele-icon"><i class="fab fa-telegram-plane"></i></a> -->
				</div>
			</div>
		</section>
<!--	end	section 2-->
<!--		section 3-->

		<section class="section section-3 text-center "  id="gallery" data-panel="gallery" v-if="companydata.portfolio != null && companydata.portfolio != ''">
			<h2 class="heading">Gallery</h2>
			<div class="owl-carousel owl-theme owl-gallery">
				<div class="item" v-for="(image,index) in companydata.portfolio" :key="index">
					<img :src="imgpath+companydata.company.company_id+'/portfolio/'+image.portfolio_image" alt="" title="" class="img-responsive">
				</div>
			</div>
		</section>
<!--	end	section 3-->
<!--		section 4-->

		<section class="section section-4 "  id="products" data-panel="products" v-if="companydata.product != null && companydata.product != ''">
			
			<h2 class="heading">Products</h2>
			<div class="row products_row">

				<div class="col-xl-4 col-lg-6 col-12 product-col" v-for="(product,index) in companydata.product" :key="index">
					<div class="product-div">
						<div class="pr-thumbnail">
							<img :src="imgpath+companydata.company.company_id+'/product/'+product.product_image" alt="" title="" class="img-fit">
						</div>
						<div class="pr_disc">
							<h5 class="pr_title">{{product.product_name}}</h5>
							<p>{{product.product_desc}}</p><br>
							<a href="#" class=" price-btn" ><span class="amount">₹ {{new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(product.product_price)}} </span>|<span>Buy Now</span></a>
						</div>
					</div>
				</div>
				
			</div>
		</section>
<!--	end	section 4-->
<!--		section 5-->

		<section class="section section-5 text-center "  id="services" data-panel="services" v-if="companydata.service != null && companydata.service != ''">
			<h2 class="heading">Services</h2>
			<div class="owl-carousel owl-theme owl-services">
				<div class="item" v-for="(service,index) in companydata.service" :key="index">
					<div class="services_div">
						<div class="services_img"><img :src="imgpath+companydata.company.company_id+'/service/'+service.service_image" alt="" title="" class="img-fluid"></div>
						<div class="services_content">
							<h4 class="s-title">{{service.service_name}}</h4>
							<p class="s_disc">{{service.service_desc}}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
<!--	end	section 5-->
<!--		section 6-->
		<section class="section section-6 text-center "  id="paymentInfo" data-panel="paymentInfo" v-if="companydata.paymentinfo != null && companydata.paymentinfo != ''">
			<h2 class="heading">Payment Info</h2>
			<div class="w-100">
			<div class="row">
				<div class="col-xl-4 col-lg-6 col-12" v-if="companydata.paymentinfo.googlepay_number != ''">
          <div class="pay-detail">
            <div class="pay-icon google-icon"> 
              <img data-src="/src/shopassets/img/google-pay.png" width="35" height="30" alt="Digital Profile" title="Digital Profile" class=" lazyloaded" src="/src/shopassets/img/google-pay.png">
          </div>

            <div class="pay-info">
            <dl>
              <dt>No.:&nbsp;</dt>
              <dd>{{companydata.paymentinfo.googlepay_number}} </dd>
              <dt>UPI.:</dt>
              <dd>google@sbi</dd>
            </dl>
            </div>
          </div>
			  </div>
				
				<div class="col-xl-4 col-lg-6 col-12" v-if="companydata.paymentinfo.phonepay_number != ''">
				<div class="pay-detail">
				  <div class="pay-icon google-icon"> 
					  <img data-src="/src/shopassets/img/phone-pe.png" width="35" height="30" alt="Digital Profile" title="Digital Profile" class=" lazyloaded" src="/src/shopassets/img/phone-pe.png">
				 </div>

				  <div class="pay-info">
					<dl>
					  <dt>No.:&nbsp;</dt>
					  <dd>{{companydata.paymentinfo.phonepay_number}}</dd>
					  <dt>UPI.:</dt>
					  <dd>google@sbi</dd>
					</dl>
				  </div>
				</div>
			  	</div>
				
				<div class="col-xl-4 col-lg-6 col-12" v-if="companydata.paymentinfo.paytm_number != ''">
				<div class="pay-detail">
				  <div class="pay-icon google-icon"> 
					  <img data-src="/src/shopassets/img/paytm.png" width="35" height="30" alt="Digital Profile" title="Digital Profile" class=" lazyloaded" src="/src/shopassets/img/paytm.png">
				 </div>

				  <div class="pay-info">
					<dl>
					  <dt>No.:&nbsp;</dt>
					  <dd>{{companydata.paymentinfo.paytm_number}}</dd>
					  <dt>UPI.:</dt>
					  <dd>google@sbi</dd>
					</dl>
				  </div>
				</div>
			  	</div>
				
				<div class="col-12" v-if="companydata.paymentinfo.account_holder_name != '' && companydata.paymentinfo.bank_name && getfrontdata.paymentinfo.bank_account_number && getfrontdata.paymentinfo.bank_ifsc_code && getfrontdata.paymentinfo.account_type">
					<div class="bank-detail">
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
		</section>
<!--	end	section 6-->
<!--		section 7-->
		<section class="section section7 text-center "  id="testimonial" data-panel="testimonial" v-if="companydata.testimonial != null">
			<h2 class="heading">Our Customer's Say</h2>
			<div class="w-100">
				<div class="comments owl-carousel owl-theme"> 
          <div class=" item comment-item" v-for="(testimonialdata,index) in companydata.testimonial" :key="index">
            <div class="user-avtar "><img src="/src/shopassets/img/user-avtar.png" alt="" title=""></div>
            <h5 class="user-name ">{{testimonialdata.client_name}}</h5>
            <div class="ratings">
              <div class="rat-stars"> <span v-for="(ratting,index) in parseInt(testimonialdata.ratting)" :key="index" class="rating-star" ><i class="fas fa-star" ></i></span>  </div>
              <span class="comment-date"> {{ datedayformat(testimonialdata.created_on) }}</span>
            </div>
					  <p class="comment-text"> {{testimonialdata.comment}} </p>
				  </div>
        </div>
				
			</div>
		</section>
<!--	end	section 7-->
<!--		section 8-->

		<section class="section section-8 text-center "  id="feedback" data-panel="feedback">
			<h2 class="heading">Give Your Feedback</h2>

				<form @submit.prevent="addtestimonial" id="feedback-form" class="form">
            <p class="star-ratings">
              <star-rating :show-rating="false" :glow="5" :star-size="30" v-model="boundRating"></star-rating>
            </p>
            <input type="text" id="name" ref="name" name="name" placeholder="Enter Your Name" required="">
            <input type="email" id="email" ref="email" name="email" placeholder="Enter Your Email" required>
            <textarea name="comment" ref="comment" placeholder="Enter Your Feedback" rows="5" required> </textarea>
            <button type="submit" class="submit-btn">Give Feedback</button>
          </form>
			
		</section>
<!--	end	section 8-->
<!--		section 9-->
		<section class="section section-9 text-center "  id="get_in_touch" data-panel="get_in_touch">
			<h2 class="heading">Get in touch</h2>
			<form @submit.prevent="addinquiry" id="contact-form" class="form" action="" method="post" enctype="text/plain">
            <input type="text" id="iname" ref="iname" name="iname" placeholder="Enter Your Name" required>
            <input type="number" id="iphone" ref="iphone" name="iphone" placeholder="Enter Your Mobile no." required="">
            <input type="Email" id="iemail" ref="iemail" name="iemail" placeholder="Enter Your Email " required="">
            <textarea placeholder="Enter Your Feedback" rows="5" name="imessage" ref="imessage" required> </textarea>
            <button type="submit" class="submit-btn">Send</button>
          </form>
		</section>
<!--	end	section 9-->
		<section class="section section-5 text-center"  id="map" data-panel="map" v-if="ismapdata == 1">
			<h2 class="heading"> Our Loaction</h2>
			<!-- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.0950042404274!2d72.81244681533383!3d21.18838458768473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e7b1ab86513%3A0x6ccd19116ed098b5!2sPrism%20I.T.%20Systems%20-%20Web%20Development%20%7C%20App%20Development%20%7C%20Web%20Designing!5e0!3m2!1sen!2sin!4v1630985196578!5m2!1sen!2sin" width="" height="" style="border:0;" allowfullscreen="" loading="lazy"></iframe> -->
      <l-map :zoom="17" :center="[osmdata.lat,osmdata.lon ]" style="height: 400px; width:100%">
        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
        <l-marker :lat-lng="getmarker(osmdata.lat,osmdata.lon)">
          <l-popup :content="osmdata.displayname"></l-popup>
        </l-marker>
      </l-map>
    </section>
		
    
    <ul class="bottom-nav  menu fixed-bottom" id="scrollspy-nav">
		  <li class="active"><a href="#profile" data-panel="profile" class="site-link back_to_top " > <i class="fas fa-home" ></i> <span>Home</span> </a></li>
		  <li><a href="#about-us" data-panel="about-us" class="site-link "> <i class="far fa-user-circle" ></i> <span>About-us</span> </a></li>
		  <li v-if="companydata.portfolio != null && companydata.portfolio != ''" class="site-link scroll-to"><a href="#gallery" data-panel="gallery" class="site-link "> <i class="far fa-images" ></i> <span>Gallery</span> </a></li>
		  <li v-if="companydata.service != null && companydata.service != ''"><a href="#services" data-panel="services" class="site-link "> <i class="fas fa-cog" ></i> <span>Services</span> </a></li>
		  <li><a href="#feedback" data-panel="feedback" class="site-link "> <i class="far fa-comment-dots" ></i><span>Feedback</span> </a></li>
		</ul>
	
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
    name:"ThemeShop",
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
            
            // let jquery = document.createElement('script')
            // jquery.setAttribute('src', 'https://cdn.jsdelivr.net/npm/jquery@3.3.1/dist/jquery.js')
            // document.body.appendChild(jquery);

            let scrollspy = document.createElement('script')
            scrollspy.setAttribute('src', '/src/shopassets/js/scrollspy.js')
            document.body.appendChild(scrollspy);

            document.addEventListener("DOMContentLoaded", function() {
            var defaultOptions = {
                container: document.body,
                panelSelector: '> section',
                directionThreshold: 50,
                delay: 0,
                duration: 300,
                easing: function(t) { return t },
            };
            new PanelSnap(defaultOptions); 
            });
            
            let carousel = document.createElement('script')
            carousel.setAttribute('src', '/src/shopassets/theme/owl.carousel.min.js')
            document.body.appendChild(carousel);

            let custom = document.createElement('script')
            custom.setAttribute('src', '/src/shopassets/js/custom.js')
            document.body.appendChild(custom);

            let lazysizes = document.createElement('script')
            lazysizes.setAttribute('src', '/src/shopassets/theme/lazysizes.min.js')
            document.body.appendChild(lazysizes);

            // let vcard = document.createElement('script')
            // vcard.setAttribute('src', '/src/redassets/js/vcard.js')
            // document.body.appendChild(vcard);

          }
          return req;
        }
    },

    created(){
        this.$store.dispatch('changetitle',{ title: localStorage.getItem('sitetitle') });
        this.$store.dispatch('setcompanyfront',{slug: this.companyslug });
        document.title = this.companyslug;
        this.companydata = this.data;
        // console.log(this.companydata);
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
    },

}
</script>


<style>
:root {
    --primaryClr: 15, 159, 123;
    --textClr: #93959d;
}
</style>