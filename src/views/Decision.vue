<template>
  <div class="flex-row">
    <div class="tree__component">
      <ul class="tree">
        <li>
          <Tree :list="list"/>
        </li>
      </ul>
    </div>
    <div class="list__component">
      <List :list="list"/>
    </div>
  </div>
</template>

<script>
  import List from "@/components/List";
  import Tree from "@/components/Tree";

  export default {
    name: "Decision",
    components: {
      List,
      Tree
    },
    props: ["list"],
  };
</script>
