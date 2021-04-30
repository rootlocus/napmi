require('./bootstrap');

// Import modules...
import { createApp, h } from 'vue';
import { App as InertiaApp, plugin as InertiaPlugin } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import Unicon from 'vue-unicons';
import { uniAt, uniLinkedin, uniInstagram, uniMapMarker, uniGithub, uniAngleDoubleDown } from 'vue-unicons/dist/icons';
import VueSmoothScroll from 'vue3-smooth-scroll'

const el = document.getElementById('app');

Unicon.add([uniAt, uniLinkedin, uniInstagram, uniMapMarker, uniGithub, uniAngleDoubleDown]);

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
    .use(VueSmoothScroll)
    .mount(el);

InertiaProgress.init({ color: '#4B5563' });
