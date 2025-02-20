//  Desc: Routes configuration file
import config from '~/config';

// Layouts

// Pages
import Bai1 from '~/pages/Bai1';
import Bai2 from '~/pages/Bai2';

// Routes public
const publicRoutes = [
    {
        path: config.routes.bai1,
        component: Bai1,
    },
    {
        path: config.routes.bai2,
        component: Bai2,
    },
    
];

// Routes private
const privateRoutes = [];

export { publicRoutes, privateRoutes };
