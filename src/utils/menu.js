// 导出配置路由silider值
const menuList = [
    {
        name: '工单管理',
        types: 'user',
        children: [
            {name: '商品查询', path: '/page1'},
            {name: '工单信息', path: '/workInfo'},
        ]
    },
    {
        name: 'Vue使用',
        types: 'laptop',
        children: [
            {name: '练习', path: '/exercise'},
            {name: '数据', path: '/dataProps'},
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