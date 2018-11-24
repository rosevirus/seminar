<template>
    <nav class="navbar fixed-top navbar-expand-lg navbar-light white scrolling-navbar">
      <div class="container-fluid">
          <!-- Brand -->
          <router-link to="/" class="navbar-brand waves-effect">
              <strong class="blue-text">SoftTrain Admin</strong>
          </router-link>
          <!-- Collapse -->
          <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button> -->

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <router-link to="/dashboard" tag="li" class="nav-item">
                  <a class="nav-link waves-effect" href="#">Dashboard</a>
                </router-link>
              </ul>
              <ul class="navbar-nav nav-flex-icons">
                  <li class="nav-item">
                    닉네임
                  </li>
              </ul>
          </div>
      </div>
    </nav>
</template>

<script>
export default {
  created() {},
  data() { return{} },
  methods: {
  }
}
</script>