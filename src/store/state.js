export const state = {
    creditDatas:{}, //保存信用中心数据
    creditStatus: {
        userInfo:false,
        userFace:false,
        userContact:false,
        userPhoto:false,
        userWork:false
    },
    loanDetail: { // 贷款的信息
        money: 0
    },
    loanIcons: {
        small:false,
        large:false,
        loser:false
    },
    userInfo: {
        id: '9527'
    },
    tempDesCont:'',   //借款描述暂存
    tempApplyOpt:''   //借款申请选择暂存
}
