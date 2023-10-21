<template>
  <header class="the-header">
    <a href="/" class="logo-title">
      <img src="../../../public/itchbadgepng.png" alt="the Logo" class="logo" />
      <h1>Itch</h1>
      <p class="subtext">Programming For Young Learners</p>
    </a>
    <div class="menu-container" @click="toggleMenu">
      <!-- <DarkToggle></DarkToggle> -->
      <div class="menu-icon"><HamburgerButton></HamburgerButton></div>
      <transition name="slide-fade">
        <div v-if="menuVisible" class="dropdown-menu">
          <router-link to="/About">About</router-link>
          <router-link to="/Learn">Learn</router-link>
          <router-link to="/Code">Code</router-link>
        </div>
      </transition>
    </div>
  </header>
</template>

<script>
import HamburgerButton from '../UI/HamburgerButton.vue';
// import DarkToggle from '../UI/DarkToggle.vue';
export default {
  components: {
    HamburgerButton,
    // DarkToggle,
  },
  name: 'TheHeader',
  data() {
    return {
      menuVisible: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/main.scss';
.the-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #fff;
}

.logo-title {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: $primary-color;
  font-family: Inika;
}
.subtext {
  font-size: 14px; /* Adjust the font size as needed */
  color: $secondary-color; /* Use your secondary color for subtext */
  margin-bottom: -4px;
  margin-left: 2px; /* Add some margin to separate it from the main text */
  font-family: Inika; /* Apply your desired font-family */
}

.logo {
  height: 70px;
  margin-right: 10px;
}
.menu-container {
  position: relative;
}

.menu-icon {
  font-size: 24px;
  padding: 7px;
  cursor: pointer;
  position: relative;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  right: 0;
  background: linear-gradient(
    to top right,
    lighten($primary-color, 50%),
    #e9e9ea
  );
  border: 1px solid $primary-color;
  box-shadow: 0 2px 8px lighten($primary-color, 50%);
  border-radius: 5px;
  color: $primary-color;
}

.dropdown-menu a {
  display: block;
  padding: 8px 12px;
  text-decoration: none;
  color: black;
}

.dropdown-menu a:hover,
a.router-link-active {
  color: $primary-color;
}
/* Animation styles */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.slide-fade-enter-from, .slide-fade-leave-to /* <- This is the alias for .slide-fade-leave-active in Vue 2.6+ */ {
  opacity: 0;
  transform: translateY(-10px);
}

.slide-fade-enter-to, .slide-fade-leave-from /* <- This is the alias for .slide-fade-leave in Vue 2.6+ */ {
  opacity: 1;
  transform: translateY(0);
}
</style>
