<template>
    <v-container fluid>
      <v-alert border="left" close-text ="Cerrar Alerta" color="success" dark dismissible
        v-if="this.$route.params.message"
      >{{this.$route.params.message}}</v-alert>
      <v-row no-gutters>
        <v-col sm="4" class="pa-3" v-for="(book, index) in books" :key="index">
                  
          <v-card
            class="pa-1"
            max-width="344"
                    
          >          
            <v-img
              :src='book.imgStatus'
              height="200px"
              contain
              
            ><v-col>
                              <v-btn color="success" >{{book.bookStatus}}</v-btn>
                          </v-col>
            </v-img>

            <v-card-title class="headline">
              {{book.title.substring(0,25)+ '...'}}
            </v-card-title>

            <v-card-subtitle>
              {{book.author}}
            </v-card-subtitle>

            <v-card-actions>
              <v-btn
                color="orange lighten-2"
                text
                :to="{name:'ViewBook', params:{id: books[index]._id}}"
              >
                Explore
              </v-btn>

              <v-spacer></v-spacer>

              <v-btn
                icon
                @click="show = !show"
              >
                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>

                <v-card-text class="py-0">
                  {{book.isbn}}
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
      </v-col>
      </v-row>
    </v-container>
</template>
  

<script>
  

  export default {
    name: 'home',

    components: {           
    },
    data: () => ({
      show: false,
      books:[]
    }),
    async created(){
      await this.bookList()
    },
    methods:{
      async bookList(){
        await this.axios.get('/book')
          .then(res=>{
            // console.log(res.data);
            this.books = res.data;
            // console.log(this.books);
          })
          .catch(e=>{
            console.log(e.response);
          })
      }
    }
  }
</script>
