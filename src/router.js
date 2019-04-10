const routers = [
    {
        path: '/',
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/play',
        component: (resolve) => require(['./views/play.vue'], resolve)
    },
    {
        path: '/play_series',
        component: (resolve) => require(['./views/play_series.vue'], resolve)
    },
    {
        path: '/audio',
        component: (resolve) => require(['./views/audio.vue'], resolve)
    },
    {
        path: '/playflv',
        component: (resolve) => require(['./views/play_flv.vue'], resolve)
    },
];
export default routers;