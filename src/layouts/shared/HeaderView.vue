<template>
    <v-app-bar app dark flat class="black white--text">         
        <v-row >
            <v-col cols="11" class="text-none px-2">
                <v-img  max-width="200" contain src="../../assets/LogoNoFondo800px.png" alt="BookXchange"></v-img>
            </v-col>
        </v-row>    
        
        <!-- <UserLogged/> -->

        <template v-slot:extension>
            <v-menu
                top
                :close-on-content-click="closeOnContentClick"
                v-if="mobileView"
                >
                <template v-slot:activator="{ on, attrs }">
                    <v-app-bar-nav-icon                    
                    v-bind="attrs"
                    v-on="on">
                    </v-app-bar-nav-icon>
                </template>

                <v-list>
                    <v-list-item
                    v-for="(option, index) in options" 
                    :key="index" v-text="option.title" 
                    :to="option.route"
                    >                    
                    </v-list-item>
                    <v-list-item>
                        <v-btn @click="signOff" text>salir <v-icon>mdi-logout</v-icon></v-btn>
                    </v-list-item>
                </v-list>
            </v-menu>           
            <v-tabs 
            color="indigo" 
            model="optionSelected align-with-title"
            v-if="!mobileView">
                <v-tab v-for="(option, index) in options" :key="index" v-text="option.title" :to="option.route">
                </v-tab>
                <v-spacer></v-spacer>
                <v-tab>Buscar  <v-icon small>fas fa-search</v-icon></v-tab>  
                <v-tab><v-btn @click="signOff" text>salir <v-icon>mdi-logout</v-icon></v-btn>   </v-tab>
            </v-tabs>
        </template>                
        
    </v-app-bar>
        
</template>

<script>
//import UserLogged from '../userLogged/UserLogged.vue'
import { mapActions } from 'vuex'

export default {
    name: 'HeaderView',
    closeOnContentClick: true,
    components:{
        //UserLogged,
    },
    data(){
        return{
            optionSelecte:0,
            mobileView: true,
            showNav: false,
            options:[
                {
                    icon: 'mdi-account',
                    title: 'Inicio',
                    route: '/home'
                },
                {
                    icon: 'user-tag',
                    title: 'Agregar Libro',
                    route: 'add-book'
                },
                {
                    icon: 'user-tag',
                    title: 'Mis libros',
                    route: 'my-book'
                },
                {
                    icon: 'user-tag',
                    title: 'Mi Perfil',
                    route: 'perfil'
                }
            ],
        }
    },
    methods:{
        ...mapActions(['signOff']),
        handleView() {
            this.mobileView = window.innerWidth <= 790;           
        }
    },
    created() {
        this.handleView();
        window.addEventListener('resize', this.handleView);
    }

}
</script>

<style>
.menu{
    text-align: right;
}

</style>