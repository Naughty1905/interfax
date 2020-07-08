<template>
  <div id="app">
    <nav>
      <router-link class="router" to="/">Task</router-link>
      <router-link class="router" to="/decision">Decision</router-link>
    </nav>
    <main>
      <router-view :list="list" @checkedList="checkedList"></router-view>
    </main>
  </div>
</template>

<script>
  export default {
    name: "App",
    data() {
      return {
        list: {
          name: "root",
          selected: true,
          children: [
            {
              name: "item1",
              selected: true,
              children: [
                {
                  name: "child1",
                  selected: true,
                  children: [],
                },
                {
                  name: "child2",
                  selected: true,
                  children: [],
                },
              ],
            },
            {
              name: "item2",
              selected: true,
              children: [
                {
                  name: "child1",
                  selected: true,
                  children: [],
                },
                {
                  name: "child2",
                  selected: true,
                  children: [],
                },
              ],
            },
          ],
        },
      };
    },
    methods: {
      checkedList(value) {
        this.list = value;
      },
    },
  };
</script>
