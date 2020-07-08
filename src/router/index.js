import Vue from 'vue';
import VueRouter from 'vue-router';
import Decision from "@/views/Decision";
import Task from "@/views/Task";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Task',
    component: Task
  },
  {
    path: '/decision',
    name: 'Decision',
    component: Decision
  },
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
