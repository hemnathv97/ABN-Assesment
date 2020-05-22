<template>
<div class="home">
    <v-app-bar
      color="teal darken-4"
      dark
    >
    <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
   <router-link :to="{name: 'Home'}" style="text-decoration: none">
    <v-btn text large>
<v-icon x-large> mdi-movie</v-icon>
      <v-toolbar-title class="mx-5 display-1 font-weight-bold">TV SHOWS</v-toolbar-title>
    </v-btn>
   </router-link>
      <v-spacer></v-spacer>
      <router-link :to="{name: 'Search'}" style="text-decoration: none">
      <v-btn icon >
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      </router-link>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary 
      class="teal white--text"
    >
      <v-list
        nav
        class="ma-3"
      >
        <v-list-item-group
          active-class="white--text text--accent-4"
        >
        <router-link :to="{name: 'Home'}" style="text-decoration: none">
          <v-list-item >
            <v-list-item-icon>
              <v-icon class="white--text">mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="white--text font-weight-bold">Home</v-list-item-title>
          </v-list-item>
        </router-link>
          <router-link :to="{name: 'Search'}" style="text-decoration: none">
          <v-list-item>
            <v-list-item-icon>
              <v-icon class="white--text">mdi-magnify</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="white--text font-weight-bold">Search</v-list-item-title>
          </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    </div>    
</template>

<script>
export default {
name:"AppHeader",
data(){
  return{
    drawer:false
  }
}    

}
</script>

<style scoped>
</style>