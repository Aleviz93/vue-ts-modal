<template>
  <div class="modal-window">
    <div class="m-header">
      <div class="title">
        {{ data.title }}
      </div>
      <div class="close">
        <img src="@/assets/icons/close.svg" alt="close" @click="closeModal()" />
      </div>
    </div>
    <div class="m-content">
      <div class="form">
        <div
          class="form-input"
          v-for="(column, index) in form"
          :key="index"
          :class="{
            half:
              column.reference === 'dateOfBirth' ||
              column.reference === 'dateOfDeath',
          }"
        >
          <ui-input :label="column.title" v-model="column.value" />
        </div>
      </div>
    </div>
    <div class="m-footer">
      <ui-button :title="'Open new modal'" :syze="'large'" @click="createModal()" />
    </div>
  </div>
</template>
<script lang="ts" src="./index.ts"></script>
<style lang="scss" src="./index.scss"></style>
