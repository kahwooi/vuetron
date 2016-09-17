 <template>
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>
      <div class="container">
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li><a v-link="'home'">Home</a></li>
            <li><a v-link="'login'">Login</a></li>
            <li><a v-link="'signup'">Sign Up</a></li>
          </ul>
        </div>
      </div>    
    </nav>
    <div class="container">
      <router-view></router-view>
    </div>
  </template>