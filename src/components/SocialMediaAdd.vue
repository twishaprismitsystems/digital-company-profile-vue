<template>
   <section class="main">
	<div class="container-fluid ">
		<div class="row no-wrap">

      	<AdminDash />

		<div class=" right_sidebar_content"  v-if="getpagereq == 1 && getsocialcolorreq == 1">
			<div class="tabs-stage">

                <div class="expand_tabs">

                <router-link to="/admindashboard/companylist" type="button" class="btnBack site_btn btn_000 btncol"><i class="fas fa-arrow-left"></i>Back</router-link>

                    <div class="tab_title">
				        <div class="h2">Add Social Media Data</div>
				        <div class="h4">Upload Social Media For Company</div>
			    	</div>

                    <router-link to="/admindashboard/addsocialcolors" type="button" class="btnBack site_btn btn_000 btncol"><i class="fas fa-plus"></i>Add Social Media Color Class</router-link>

			    	<form id="" @submit.prevent="savesocial()"  class="social_form company_items form_shadow">
			    		<div class="row" id="divdata">
			    		
                        <div class="col-12 col-sm-6 col-lg-4 col-xl-3 item_col " v-for="(social,index) in getpagedata" :key="index">
			    			<div class="item_no">
			    				<h5>social #<span class="count"> {{index+1}} </span></h5> <a @click="deletesocial(social.socialmedia_id)" type="button" class="dismiss-btn fas fa-trash-alt"></a>
			    			</div>
			    			<div class="item_div">
			    				<div class="text-center">
			    					<i :class="oldsocial[index].socialmedia_logo+' fab-lg'"></i>
			    				</div>
			    				<div class="">
			    					<input type="text" name="social-name" v-model="oldsocial[index].socialmedia_name" class="item-input" placeholder="Enter social Name">
			    					<input type="text" name="social-icon" v-model="oldsocial[index].socialmedia_logo" class="item-input" placeholder="Enter social Logo Class">
                                    <select class="mt-3" name="social-icon-color" v-model="oldsocial[index].socialmedia_color">
                                        <option v-for="(socialcolor,index) in getsocialcolordata" :key="index" :value="socialcolor.socialmedia_color_id">{{socialcolor.socialmedia_color_name}}</option>
                                    </select>
                                </div>	
			    			</div>
			    		</div>

                        <div class="col-12 col-sm-6 col-lg-4 col-xl-3 item_col " v-for="(nsocial,nindex) in newsocial" :key="nindex+'new'">
			    			<div class="item_no">
			    				<h5>Add New social <span class="count"> {{nindex+1}} </span></h5> <a @click="deletbox(nindex)" type="button" class="dismiss-btn fas fa-trash-alt"></a>
			    			</div>
			    			<div class="item_div">
			    				<div class="text-center">
			    					<i :class="nsocial.socialmedia_logo+' fa-lg'"></i>
			    				</div>
			    				<div>
			    					<input type="text" name="social-name" v-model="nsocial.socialmedia_name" class="item-input" placeholder="Enter social Name">
			    					<input type="text" name="social-icon" v-model="nsocial.socialmedia_logo" class="item-input" placeholder="Enter social Logo Class">
                                    <select class="mt-3" name="social-icon-color" v-model="nsocial.socialmedia_color">
                                        <option v-for="(socialcolor,index) in getsocialcolordata" :key="index" :value="socialcolor.socialmedia_color_id">{{socialcolor.socialmedia_color_name}}</option>
                                    </select>
                                </div>	
			    			</div>
			    		</div>
			    		
			    		</div>
			    		<a @click="adddiv" type="button" class=" site_btn add-more-btn">Add More</a>

						<div class="form_btn_field">
							<button type="submit" class=" form_btn btn_200  "> Save Changes <i v-if="isloading" class="fas fa-spinner fa-pulse"></i> </button>
							<router-link to="/admindashboard/pages"  class=" btnNext form_btn btn_100 mt-5 btncol">Next</router-link>
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
import AdminDash from './AdminDash'
export default {
    name:'SocialMediaAdd',
    data(){
        return{
            oldsocial:[],
            newsocial:[],
            imgpath:this.$imgpath,
            isloading:false,
        }
    },
    components:{
        AdminDash
    },
    created(){
        this.$store.dispatch('changetitle',{title:localStorage.getItem('sitetitle')});
        if(this.getcompanypagereq == 0){
            this.$store.dispatch('setpagesdata');
            this.$store.dispatch('setsocialcolordata');
            this.$store.dispatch('setallcompanydata');
            this.$store.dispatch('setallsocialdata');
            this.$store.dispatch('setuserreviewdata',{data:'all'});
        }
    },

    computed:{

        getsocialcolordata(){
            let data =  this.$store.getters.getsocialcolors;
            return data;
        },
        
        getsocialcolorreq(){
            return this.$store.getters.getsocialcolorsreq;
        },
        
        getcompanypagereq(){
            return this.$store.getters.getallcompanyreq;
        },
        
        getpagereq(){
            return this.$store.getters.getallsocialreq;
        },

        getpagedata(){
            let data =  this.$store.getters.getallsocialdata;
            this.oldsocial = [];
            if(data.length != 0){
            data.forEach( element => {
                this.oldsocial.push(element);
            });
                this.oldsocial = [ ...new Set(this.oldsocial) ];
            }
            // console.log(this.oldsocial);
            return data;
        }
    },


    methods:{
        deletbox(index){
            this.newsocial.splice(index, 1);
        },

        adddiv(){
            this.newsocial.push({
                socialmedia_logo:'',
                socialmedia_name:'',
                socialmedia_color:'',
            });
        },

        deletesocial(sid){
            this.$swal.fire({
                title: 'Are you sure you want to delete?',
                icon:"question",
                confirmButtonColor:"#126e83",
                cancelButtonColor:"#b50303",
                showCancelButton: true,
                confirmButtonText: 'Confirm',
                showLoaderOnConfirm: true,
                allowOutsideClick: () => !Swal.isLoading()
            })
            .then((result) => {
            if (result.isConfirmed) {
                axios.get('company/deletesocial/'+sid).then((res)=>{
                    this.$store.dispatch('setallsocialdata');
                }).catch(()=>{});
            }
            })
        },


        async savesocial(){
            this.isloading  = true;
            this.oldsocial = [ ...new Set(this.oldsocial) ];
            
            let fd = new FormData();
            fd.append('isupdate',true);
            fd.append('social_data',JSON.stringify(this.oldsocial));
            
            if(this.oldsocial != null && this.oldsocial != ''){
                await axios.post('company/createsocial',fd).then((result) => {
                });
            }

            if(this.newsocial != null && this.newsocial != ''){
                this.newsocial = [ ...new Set(this.newsocial) ];
                let fd1 = new FormData();
                fd1.append('isupdate',false);
                fd1.append('social_data',JSON.stringify(this.newsocial));
                
                await axios.post('company/createsocial',fd1).then((result) => {
                    this.$store.dispatch('setallsocialdata');
                    this.newsocial = [];
                    this.newimages = [];
                    this.$swal.fire('Data Saved', result.data.message, 'success');
                    this.isloading  = false;
                });
            }
            else{
                this.$swal.fire('Data Updated', 'Social Data Updated' , 'success');
                this.isloading  = false;
            }
        }
    }
    
}
</script>

<style scoped>
    .btncol{
        color: white;
    }
</style>