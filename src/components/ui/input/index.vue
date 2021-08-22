<template>
  <div class="input-wrapper" :class="syze">
    <div class="label" v-if="label">
      {{ label }}
    </div>
    <div
      class="input-border"
      :class="{ error: error ? error.value : false, password: type === 'password' }"
    >
      <input
        class="input"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        v-if="!showHiddenText"
        @input="(e) => $emit('update:modelValue', e.target.value)"
      />
      <div class="hidden-text" v-if="showHiddenText">
        {{ modelValue }}
      </div>
      <div class="show-text-icon" @click="toggleHiddenText()">
        <img src="@/assets/icons/eye.svg" alt="logo" v-if="showHiddenText" />
        <img src="@/assets/icons/open-eye.svg" alt="logo" v-if="!showHiddenText" />
      </div>
    </div>
    <div class="error-description" v-if="error && error.value">
      {{ error.text }}
    </div>
  </div>
</template>
<script lang="ts" src="./index.ts"></script>
<style lang="scss" src="./index.scss"></style>
