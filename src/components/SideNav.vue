<template>
  <div class="sidebar-fixed position-fixed">
    <router-link to="/" class="logo-wrapper waves-effect">
        <img src="http://www.softtrain.co.kr/resources/front/img/common/logo.png" class="img-fluid" alt="">
    </router-link>
    <div class="list-group list-group-flush">
        <router-link to="/dashboard" tag="li" class="list-group-item  waves-effect">
            <i class="fa fa-pie-chart mr-3"></i>Dashboard</router-link>
        <router-link to="/account" class="list-group-item list-group-item-action waves-effect">
            <i class="fa fa-user mr-3"></i>Account</router-link>
        <router-link to="/board" tag="li" class="list-group-item list-group-item-action waves-effect">
            <i class="fa fa-table mr-3"></i>Board</router-link>
    </div>
  </div>
</template>


