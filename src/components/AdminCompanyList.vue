<template>
    <section class="main">
	<div class="container-fluid ">
		<div class="row no-wrap">

      	<AdminDash />

		<div class=" right_sidebar_content">
			<div class="tabs-stage">
                <div class="expand_tabs" v-if="getpagereq == 1 ">

			        <div class="tab_title">
				        <div class="h2">Company List</div>
				        <div class="h4">All Company List</div>
			    	</div>

                <router-link to="/admindashboard/addcompany" target="_blank" type="button" class="btnBack site_btn btn_000 btncol"><i class="fas fa-plus"></i>Add Company</router-link>
                <div class="form_shadow">
                   <div class="row">
                    <div class="col-12">
                        <div class="table-responsive">
                            <table class="table tablecontent ">
                                <thead>
                                <tr>
                                    <th>Company Name</th>
                                    <th>ESTD.</th>
                                    <th>Company Email</th>
                                    <th>Company Contact</th>
                                    <th>Edit</th>
                                    <th>Active/Inactive</th>
                                </tr>
                                </thead>
                                <tbody>

                                <tr v-for="(company,index) in getcomapnydata" :key="index">
                                    <td> {{company.company_name}} </td>
                                    <td> {{companydate(company.established_in)}} </td>
                                    <td> {{company.company_email}} </td>
                                    <td> {{company.company_contact}} </td>
                                    <td>
                                        <a class="" @click="editcompany(company.company_id)"><i class="fa fa-edit fa-lg"></i></a>
                                        <!-- <a class="ml-2" @click="deletecompany(company.company_id)"><i class="fa fa-trash ml-4 fa-lg"></i></a> -->
                                    </td>
                                    <td>
                                        <label class="label">
                                            <div class="toggle">
                                            <input class="toggle-state" type="checkbox" name="check" :value="company.status" :checked="checkchecked(company.status)" @change="changestatus(company.company_id,company.status)" />
                                            <div class="indicator"></div>
                                            </div>
                                        </label>
                                        <!-- <label class="switch ml-4">
                                            <input id="companystatus" type="checkbox" :value="company.status" :checked="checkchecked(company.status)" @change="changestatus(company.company_id,company.status)">
                                            <span class="slider"></span>
                                        </label> -->
                                    </td>
                                </tr>

                                </tbody>
                            </table>
                        </div>

                            <nav aria-label="Page navigation example" v-if="getcomapnydata != ''">
                                <ul class="pagination pagination-lg justify-content-center">
                                    
                                    <li class="page-item navcontent" v-if="pagenumber != 1">
                                    <a class="page-link" @click="changepage(pagenumber-1)">Previous</a>
                                    </li>

                                    <li v-for="(page,index) in totalpages" :key="index" :class="checknavclass(page,pagenumber)"><a class="page-link" @click="changepage(page)"> {{page}} </a></li>
                                    
                                    <li class="page-item navcontent"  v-if="pagenumber != totalpages">
                                    <a class="page-link" @click="changepage(pagenumber+1)">Next</a>
                                    </li>
                                </ul>
                            </nav>

                            
                        </div>
    </div> 

                    <div class="form_btn_field">
				        <router-link to="/admindashboard/socailmediaadd"  class=" btnNext form_btn btn_100 mt-5 btncol">Next</router-link>
			        </div>

                </div>

                
                
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
import dayjs from 'dayjs'
import Crypto from 'crypto-js';

export default {
    name:'AdminCompanyList',
    components:{
        AdminDash
    },

    data(){
        return{
            totaldata:0,
            perpage:2,
            totalpages:0,
            pagenumber:1
        }
    },
    
    created(){
        this.$store.dispatch('changetitle',{title:localStorage.getItem('sitetitle')});
        if(this.getpagereq == 0){
            this.$store.dispatch('setallcompanydata');
            this.$store.dispatch('setsocialcolordata');
            this.$store.dispatch('setallsocialdata');
            this.$store.dispatch('setpagesdata');
            this.$store.dispatch('setuserreviewdata',{data:'all'});
        }
    },
    
    computed:{
        getpagereq(){
            return this.$store.getters.getallcompanyreq;
        },
        getpagedata(){
            let data = this.$store.getters.getallcompanydata;
            if(data.length != 0){
                this.totaldata = data.length;
                this.totalpages = Math.ceil(data.length / this.perpage);
            }
            return data;
        },
        getcomapnydata(){
            let data = this.getpagedata;
            return this.$store.getters.getcompanylist(this.pagenumber);
        }
    },

    methods:{

        companydate(date){
            return dayjs(date).format('DD - MMM - YYYY');
        },

        checkchecked(status){
            if(status == 1){
                return 'true';
            }
            else{
                return '';
            }
        },

        changestatus(cid,status){
        if(status == 0){
            status  = 1;
        }
        else{
            status  = 0;
        }
        
        let fd = new FormData();
        fd.append('company_id',cid);
        fd.append('status',status);

        axios.post('company/updatecompanystatus',fd).then((result) => {
            this.$store.dispatch('setallcompanydata');
        });
        
        },

        checknavclass(index,page){
        if(index == page){
          return 'page-item navcontent active';
        }
        else{
          return 'page-item navcontent';
        }
      },

       changepage(page){
        this.pagenumber = page;
      },

        editcompany(cid){
            axios.get('user/getcompanyuser/'+cid).then((result)=>{
                let userdata = result.data.companydata;
                // localStorage.setItem('userid',userdata.user_id);
                // this.$store.dispatch('setuserid',{userid:userdata.user_id});
                
                // this.$session.start()
                // this.$session.clear()
                // this.$session.set('userdataemail', userdata.email_id);
                // sessionStorage.setItem('userdataemail', userdata.email_id);
                // localStorage.setItem('userdataemail', encemail);

                var encemail = Crypto.AES.encrypt(userdata.email_id, "DIGITALCOMPANYPROFILE").toString();
                localStorage.setItem('userdataemail',encemail);
                this.$store.dispatch('setuserdataemail',{userdataemail:userdata.email_id});
            
            });
            if(window.location.hostname == 'localhost'){
                window.open("http://localhost:8080/"+"dashboard/company", "_blank");
                                              
            }
            else{
                window.open(window.location.protocol+"//"+window.location.hostname+"/dashboard/company", "_blank");
            }
            
        },

        deletecompany(cid){

        }
    }

}
</script>
