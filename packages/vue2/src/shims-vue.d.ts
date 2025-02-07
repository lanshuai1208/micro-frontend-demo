declare module "*.vue" {
  import Vue from "vue";
  const component: ReturnType<typeof Vue.extend>;
  export default component;
}
