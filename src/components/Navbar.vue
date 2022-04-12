<template>
  <div>
    <div class="navbar bg-red-700 py-4 px-10">
      <div class="navbar-start px-5">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><router-link class="btn btn-ghost" to="/">Beranda</router-link></li>
            <li><router-link to="/pelaporan" class="btn btn-ghost">Pelaporan</router-link></li>
            <li><router-link to="/forum" class="btn btn-ghost">Forum</router-link></li>
            <li><router-link to="/tentang" class="btn btn-ghost">Tentang</router-link></li>
          </ul>
        </div>
        <a class="w-16 rounded-ful"><img src="../assets/Group_51.png" alt="" /></a>
        <a class="btn btn-ghost normal-case text-xl text-white">LASPOM</a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0 text-white">
          <li><router-link class="btn btn-ghost" to="/">Beranda</router-link></li>
          <li><router-link to="/pelaporan" class="btn btn-ghost">Pelaporan</router-link></li>
          <li><router-link to="/forum" class="btn btn-ghost">Forum</router-link></li>
          <li><router-link to="/tentang" class="btn btn-ghost">Tentang</router-link></li>
        </ul>
      </div>
      <div class="navbar-end flex space-x-2">
        <router-link to="/login" class="btn btn-small bg-primary-content text-black border-transparent">Masuk</router-link>
        <router-link to="/register" class="btn btn-small bg-primary-content text-black border-transparent">Register</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
