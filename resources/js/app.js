require('./bootstrap');

// Import modules...
import { createApp, h } from 'vue';
import { App as InertiaApp, plugin as InertiaPlugin } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import Unicon from 'vue-unicons';
import { uniAt, uniLinkedin, uniInstagram, uniMapMarker, uniGithub } from 'vue-unicons/dist/icons';

const el = document.getElementById('app');

Unicon.add([uniAt, uniLinkedin, uniInstagram, uniMapMarker, uniGithub]);

createApp({
    render: () =>
        h(InertiaApp, {
            initialPage: JSON.parse(el.dataset.page),
            resolveComponent: (name) => require(`./Pages/${name}`).default,
        }),
})
    .mixin({ methods: { route } })
    .use(InertiaPlugin)
    .use(Unicon)
    .mount(el);

InertiaProgress.init({ color: '#4B5563' });
