<template>
  <div id="button" :class="[syze, color, { disabled: disabled }]">
    <span> {{ title }} <slot /> </span>
  </div>
</template>
<script lang="ts" src="./index.ts"></script>
<style lang="scss" src="./index.scss"></style>
