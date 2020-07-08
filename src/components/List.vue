<template>
  <aside>
    <span
        v-if="list.selected"
        class="list__element"
    >
        {{ list.name }}
      <button
          class="btn__delete"
          @click="list.selected = !list.selected"
      >x
      </button>
      </span>
    <List
        v-for="(element, index) in list.children"
        :key="index"
        :list="element"
    />
  </aside>
</template>

<script>
  export default {
    name: "List",
    props: ["list"],
  }
</script>
