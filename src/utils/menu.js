// 导出配置路由silider值
const menuList = [
    {
        name: '工单管理',
        types: 'user',
        children: [
            {name: '统计报表', path: '/page1'},
            {name: '工单信息', path: '/page2'},
        ]
    },
    {
        name: '设置',
        types: 'laptop',
        children: [
            {name: 'option5', path: '/opation1'},
            {name: 'option6', path: '/opation1'},
            {name: 'option7', path: '/opation1'}
        ]
    },
    {
        name: '信息',
        types: 'notification',
        children: [
            {name: 'option9', path: '/opation1'},
            {name: 'option10', path: '/opation1'},
            {name: 'option11', path: '/opation1'},
            {name: 'option12', path: '/opation1'}
        ]
    }
];

export default menuList;