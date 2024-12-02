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