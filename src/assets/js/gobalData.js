/* 全局参数 */

// 首页menu
export const indexMenu = [{
    icon:'iconicon-',
    name:'未巡场所',
    path:'/pages/place/main'
    },{
    icon:'iconlvzhou_fenzhichangsuo',
    name:'全部场所',
    path:'/pages/place/main'
    },{
    icon:'icontongji',
    name:'日报统计',
    path:'/pages/place/main'
}]


// 首页统计情况
export const cardList = [{
    flag:'间',
    name:'单位底数'
    },{
    flag:'间',
    name:'累计已排查数'
    },{
    flag:'间',
    name:'不合格场所数'
}]


// 场所页搜索下拉选择
export const placeSearchList = [{
    name:'全部状态',
    range:['全部状态', '需复查', '未巡查', '已完成'],
    selectedIndex:0
  },{
    name:'全部类型',
    range:['全部类型','三小场所', '工业建筑', '出租屋', '公共场所'],
    selectedIndex:0
  },{
    name:'全部批次',
    range:['全部批次', '重点批次', '普通批次'],
    selectedIndex:0
  }]
