<template>
    <section class="main">
	<div class="container-fluid ">
		<div class="row no-wrap">
      	<DashData />
		<div class=" right_sidebar_content" v-if="getpagerequest == 1 && getcompanydata != null">
			<div class="tabs-stage">
            <div id="tab-3" class="expand_tabs">
			    	<router-link to="/dashboard/paymentoptions" class="btnBack site_btn btn_000"><i class="fas fa-arrow-left"></i>Back</router-link>
			      	<div class="tab_title">
				        <div class="h2">Themes For Company Profile Page</div>
				        <div class="h4">Select Themes</div>
			    	</div>

			    	<form id="" @submit.prevent="savetheme()"  class="theme_form company_items form_shadow">
			    		<div class="row">
                        <div class="col-12 col-sm-6 col-lg-4 col-xl-3 item_col " v-for="(theme,index) in getpagedata" :key="index">
			    			<div class="item_no">
			    				<h5>theme #<span class="count"> {{index+1}} </span></h5>
			    			</div>
                            
                            <div class="mobile_mockup ">
                                <div class="digital_profile_theme">
                                    <picture class="d-block" width="378" height="3081">
                                    <img rel="preload" :src="imgpath+'themes/'+theme.theme_image" width="378" height="3081" alt="Digital Company Profile" title="Digital Company Profile" class="img-responsive  "> </picture>
                                </div>
                                <picture class="d-block" width="408" height="772" >
                                    <img rel="preload" src="/src/landingassets/img/mobile_frame.webp"  width="408" height="772" alt="Digital Company Profile" title="Digital Company Profile" class="img-fit">
                                </picture>
                            </div>
                            <div class="theme-radio">
                                <label>
                                    <input type="radio" :value="theme.theme_id" v-model="selectedtheme" />
                                    <span>{{theme.theme_name}}</span>
                                </label>
                            </div>
                            

			    			<!-- <div class="item_div">
                                <div class="item_img">
			    					<img :src="imgpath+'themes/'+theme.theme_image" alt="theme" title="" class="img-fit">
			    				</div>
                                <div>
                                    <label>
                                        <input type="radio" :value="theme.theme_id" v-model="selectedtheme" />
                                        <span>{{theme.theme_name}}</span>
                                    </label>
                                </div>
			    			</div> -->
			    		</div>
			    		</div>

						<div class="form_btn_field">
							<button type="submit" class=" form_btn btn_200  ">Save Changes  <i v-if="isloading" class="fas fa-spinner fa-pulse"></i></button>
						</div>
			    	</form>

				</div>

            </div>
        </div>
        </div>
    </div>
    </section>
</template>

<script>
import axios from 'axios'
import DashData from './DashData'
export default {
    name:'FrontThemes',
    components:{
        DashData
    },
    data(){
        return{
            isloading:false,
            imgpath:this.$imgpath,
            selectedtheme:0
        }
    },

    components:{
        DashData
    },

    computed:{
        getcompanydata(){
            let data =  this.$store.getters.getcompanydata;
            this.selectedtheme = data.company[0].theme_id;
            // console.log(data);
            return data;
        },
        getuserdataemail(){
            return this.$store.getters.getuserdataemail;
        },
        getpageinfo(){
            return this.$store.getters.getsitetitle;
        },
        getcompanyid(){
            return this.$store.getters.getcompanyid;
        },
        getpagerequest(){
            return this.$store.getters.getthemespagerequest;
        },
        getpagedata(){
            return this.$store.getters.getthemesdata;
        },
        getuserid(){
            return this.$store.getters.getuserid;
        }
    },

    watch:{
        $route(){
            this.$store.dispatch('changetitle',{title:localStorage.getItem('sitetitle')});
        }
    },

    created(){
        if(this.getcompanyid == ''){
            this.$router.push('/dashboard/company');
        }
        this.$store.dispatch('changetitle',{title:localStorage.getItem('sitetitle')});
        if(this.getpagerequest == 0){
            this.$store.dispatch('setcompanydata',{id: this.getuserdataemail});
            this.$store.dispatch('setallsocialdata');
            this.$store.dispatch('setsocialdata',{id: this.getuserdataemail});
            this.$store.dispatch('setproductdata',{id: this.getuserdataemail });
            this.$store.dispatch('setservicedata',{id: this.getuserdataemail });
            this.$store.dispatch('setClientData',{id: this.getuserdataemail } );
            this.$store.dispatch('setportfolioData',{id: this.getuserdataemail });
            this.$store.dispatch('settestimonialData',{id: this.getuserdataemail } );
            this.$store.dispatch('setinquiryData',{id: this.getuserdataemail } );
            this.$store.dispatch('setpaymentoptions',{id:this.getuserdataemail});
            this.$store.dispatch('setthemesData');
        }
    },

    methods:{
        async savetheme(){
            this.isloading  = true;
            let fd = new FormData();
            fd.append('user_id',this.getuserdataemail);
            fd.append('theme_id',this.selectedtheme);

            await axios.post('theme/savecompanytheme',fd).then((result) => {
                this.$swal.fire('Theme Data', 'Theme Data Saved' , 'success');
                // this.$store.dispatch('setClientData',{id:this.getuserdataemail});
                this.isloading  = false;
            });
        }
    },

}
</script>
