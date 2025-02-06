module.exports = {
    title: '微前端',
    description: '用于微前端技术的学习验证',
    port: 9001,
    themeConfig: {
        sidebar: {
            '/learn/': [
                {
                    title: '1 架构基础知识',
                    path: '/learn/1-architecture-basics/',
                    children: [
                        {
                            title: '1.1 前端架构的前世今生',
                            path: '/learn/1-architecture-basics/1-1-history-of-front-end-architecture/'
                        },
                        {
                            title: '1.2 软件设计原则与分层',
                            path: '/learn/1-architecture-basics/1-2-software-design-principle-and-layers/',
                        },
                        {
                            title: '1.3 架构设的质量-健壮性和稳定性',
                            path: '/learn/1-architecture-basics/1-3-quality-of-architecture-design/',
                        },
                        {
                            title: '1.4 架构前期准备',
                            path: '/learn/1-architecture-basics/1-4-preparation/',
                        },
                        {
                            title: '1.5 技术填补与崩溃预防',
                            path: '/learn/1-architecture-basics/1-5-techinical-filler-and-crash-prevention/',
                        },
                        {
                            title: '1.6 系统重构',
                            path: '/learn/1-architecture-basics/1-6-system-refactor/',
                        },
                    ]
                },
                {
                    title: '2 基础前期准备',
                    path: '/learn/2-basic-preparation/',
                    children: [
                        {
                            title: '2.1 微前端实现方式对比',
                            path: '/learn/2-basic-preparation/2-1-achivement-compare/'
                        },
                        {
                            title: '2.2 技术选型-确定技术栈',
                            path: '/learn/2-basic-preparation/2-2-determine-technology-stack/'
                        },
                        {
                            title: '2.3 绘制项目架构图',
                            path: '/learn/2-basic-preparation/2-3-draw-project-atrchitecture-diagram/'
                        }
                    ]
                },
                {
                    title: '3 应用开发',
                    path: '/learn/3-application-develop/',
                    children: [
                        {
                            title: '3.1 vue2 子应用',
                            path: '/learn/3-application-develop/3-1-vue2-sub-app/'
                        },
                        {
                            title: '3.2 vue3 子应用',
                            path: '/learn/3-application-develop/3-2-vue3-sub-app/'
                        },
                        {
                            title: '3.3 react15子应用',
                            path: '/learn/3-application-develop/3-3-react15-sub-app/'
                        },
                        {
                            title: '3.4 react16子应用',
                            path: '/learn/3-application-develop/3-4-react16-sub-app/'
                        },
                        {
                            title: '3.5 构建一个后端服务',
                            path: '/learn/3-application-develop/3-5-backend-server/'
                        },
                        {
                            title: '3.6 后端服务请求处理',
                            path: '/learn/3-application-develop/3-6-backend-request-handler/'
                        },
                        {
                            title: '3.7 子应用接入微前端-vue2',
                            path: '/learn/3-application-develop/3-7-vue2-imbed/'
                        },
                        {
                            title: '3.8 子应用接入微前端-vue3',
                            path: '/learn/3-application-develop/3-8-vue3-imbed/'
                        },
                        {
                            title: '3.9 子应用接入微前端-react15',
                            path: '/learn/3-application-develop/3-9-react15-imbed/'
                        },
                        {
                            title: '3.9 子应用接入微前端-react16',
                            path: '/learn/3-application-develop/3-10-react16-imbed/'
                        },
                    ]
                }

                //     {
                //     title: '1 架构基础知识',
                //     path: 'learn/1-architecture-basics/',
                //     sidebarDepth: 1,
                //     children: [
                //         // '1-1-history-of-front-end-architecture'
                //         {
                //             title: '1.1 前端架构的前世今生',
                //             path: '/learn/1-architecture-basics/1-1-history-of-front-end-architecture/',
                //             sidebarDepth: 2
                //         },
                //         {
                //             title: '1.2 软件设计原则与分层',
                //             path: 'learn/1-architecture-basics/1-architecture-basics/1-2-software-design-principle-and-layers/',
                //         },
                //         {
                //             title: '1.3 架构设的质量-健壮性和稳定性',
                //             path: 'learn/1-architecture-basics/1-architecture-basics/1-3-quality-of-architecture-design/',
                //         },
                //         {
                //             title: '1.4 架构前期准备',
                //             path: 'learn/1-architecture-basics/1-architecture-basics/1-4-preparation',
                //         },
                //         {
                //             title: '1.5 技术填补与崩溃预防',
                //             path: 'learn/1-architecture-basics/1-architecture-basics/1-5-techinical-filler-and-crash-prevention',
                //         },
                //         {
                //             title: '1.6 系统重构',
                //             path: 'learn/1-architecture-basics/1-architecture-basics/1-6-system-refactor',
                //         },

                //     ]
                // }

            ]
        }
    }
}