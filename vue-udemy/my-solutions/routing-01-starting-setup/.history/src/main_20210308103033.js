import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/teams', component: TeamsList }, // our-domain.com/teams => TeamsList
    { path: '/users', component: UsersList },
    { path: '/teams/:teamId' }
  ],
  linkActiveClass: 'active' // overwrites the default link-active class with active
});

const app = createApp(App);

app.use(router);

app.mount('#app');
