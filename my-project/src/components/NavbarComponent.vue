<script setup>
import { Navbar, NavbarLogo, NavbarCollapse, NavbarLink } from 'flowbite-vue'
import { ButtonGroup, Button } from 'flowbite-vue'
</script>
<template>
    <Navbar solid>
      <template #logo>
        <NavbarLogo link="https://www.google.com/" alt="Flowbite logo" image-url="r.png">
          HAIDEK
        </NavbarLogo>
        <Button-group>
        <Button color="alternative">BAJU</Button>
        <Button color="alternative">CELANA</Button>
        <Button color="alternative">SEPATU</Button>
        <Button color="alternative">TOPI</Button>
      </Button-group>
      </template>
      <template #default="{isShowMenu}">
        <NavbarCollapse :isShowMenu="isShowMenu">
          <NavbarLink is-active>Home</NavbarLink>
          <NavbarLink>Services</NavbarLink>
          <NavbarLink>Pricing</NavbarLink>
          <NavbarLink>Contact</NavbarLink>
        </NavbarCollapse>
      </template>
    </Navbar>
</template>
