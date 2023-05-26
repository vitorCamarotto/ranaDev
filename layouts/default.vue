<template>
  <ul class="nav-list">
    <NuxtLink class="link" to="/">
      <li class="nav-item">
        Home
      </li>
    </NuxtLink>
    <NuxtLink class="link" to="/about">
      <li class="nav-item">
        About
      </li>
    </NuxtLink>
    <NuxtLink class="link" to="/resume">
      <li class="nav-item">
        Resume
      </li>
    </NuxtLink>
    <NuxtLink class="link" to="/contact">
      <li class="nav-item">
        Contact
      </li>
    </NuxtLink>
  </ul>
</template>

<script setup>

</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  background-color: black;
  color: white;
}

.link {
  text-decoration: none;
  color: white;
  font-size: 24px;
}
.nav-list {
  list-style-type: none; /* Remove default bullet points */
  padding: 0; /* Remove default padding */
  display: flex; /* Display items in a row */
  justify-content: space-around; /* Add some space between items */
  background-color: black; /* Dark background */
}

.nav-item {
  padding: 15px; /* Add some padding to each item */
  border: 3px solid white;
  border-radius: 10px;
}

.nav-item a:hover {
  color: #f90000; /* Change color on hover */
}

</style>