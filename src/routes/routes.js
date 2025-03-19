//  Desc: Routes configuration file
import config from '~/config';

// Layouts

// Pages
import Home from '~/pages/Home';

import Tuan2 from '~/pages/Tuan2';
import {
    Bai1 as B1_T2,
    Bai2 as B2_T2,
    Bai3 as B3_T2,
    Bai4 as B4_T2,
    Bai5 as B5_T2,
    Bai6 as B6_T2,
    Bai7 as B7_T2,
} from '~/pages/Tuan2';

import Tuan3 from '~/pages/Tuan3';
import { Bai1 as B1_T3, Bai2 as B2_T3 } from '~/pages/Tuan3';

import Tuan4 from '~/pages/Tuan4';

import Tuan5 from '~/pages/Tuan5';
import { Bai1 as B1_T5, Bai2 as B2_T5, Bai3 as B3_T5 } from '~/pages/Tuan5';

import Tuan6 from '~/pages/Tuan6';
import { Bai1 as B1_T6 } from '~/pages/Tuan6';

// Routes public
const publicRoutes = [
    // Trang home
    {
        path: config.routes.home,
        component: Home,
        layout: null,
    },

    // Tuần 2
    {
        path: config.routes.week2,
        component: Tuan2,
        week: 2,
    },
    {
        path: config.routes.t2ex1,
        component: B1_T2,
        week: 2,
    },
    {
        path: config.routes.t2ex2,
        component: B2_T2,
        week: 2,
    },
    {
        path: config.routes.t2ex3,
        component: B3_T2,
        week: 2,
    },
    {
        path: config.routes.t2ex4,
        component: B4_T2,
        week: 2,
    },
    {
        path: config.routes.t2ex5,
        component: B5_T2,
        week: 2,
    },
    {
        path: config.routes.t2ex6,
        component: B6_T2,
        week: 2,
    },
    {
        path: config.routes.t2ex7,
        component: B7_T2,
        week: 2,
    },

    // Tuần 3
    {
        path: config.routes.week3,
        component: Tuan3,
        week: 3,
    },

    {
        path: config.routes.t3ex1,
        component: B1_T3,
        week: 3,
    },

    {
        path: config.routes.t3ex2,
        component: B2_T3,
        week: 3,
    },

    // Tuần 4
    {
        path: config.routes.week4,
        component: Tuan4,
        layout: null,
    },

    // Tuần 5
    {
        path: config.routes.week5,
        component: Tuan5,
        week: 5,
    },
    {
        path: config.routes.t5ex1,
        component: B1_T5,
        week: 5,
    },
    {
        path: config.routes.t5ex2,
        component: B2_T5,
        week: 5,
    },
    {
        path: config.routes.t5ex3,
        component: B3_T5,
        week: 5,
    },

    // Tuần 6
    {
        path: config.routes.week6,
        component: Tuan6,
        week: 6,
    },
    {
        path: config.routes.t6ex1,
        component: B1_T6,
        week: 6,
    },
];

export { publicRoutes };
