<template>
  <aside>
    <li class="tree__element" >
      <span>
        <input type="checkbox" v-model="list.selected"/>
        {{ list.name }}
      </span>
      <ul v-if="list.children && list.children">
        <Tree
            v-for="(element, index) in list.children"
            :key="index"
            :list="element"
        />
      </ul>
    </li>
  </aside>
</template>

<script>
  export default {
    name: "Tree",
    props: ["list"]
  }
</script>

