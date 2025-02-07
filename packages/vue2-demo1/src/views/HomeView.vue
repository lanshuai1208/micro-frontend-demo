<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default Vue.extend({
  name: "HomeView",
  components: {
    HelloWorld,
  },
  props: {
    list: {
      type: Array as PropType<{ label: string; value: number }[]>,
      default: () => [],
    },
  },
  data() {
    return {
      navList: [
        {
          label: "推荐",
          value: 0,
        },
        {
          label: "热门车系",
          value: 1,
        },
        {
          label: "10万以下",
          value: 2,
        },
        {
          label: "10-20万",
          value: 3,
        },
        {
          label: "20-30万",
          value: 4,
        },
        {
          label: "30万以上",
          value: 5,
        },
      ] as { label: string; value: number }[],
      currentNav: 0,
    };
  },
  computed: {
    tabList(): { label: string; value: number }[] {
      return this.list.length ? this.list : this.navList;
    },
    // tabList: {
    //   get() {
    //     return this.list.length ? this.list : this.navList
    //   }
    // }
  },
});
</script>
