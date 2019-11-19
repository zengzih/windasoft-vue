import Vue from 'vue'
import Router from 'vue-router'
import home from '@/zjapp.vue'
// import loan from '@/views/loan/loan.vue'
// import credit from '@/views/credit/credit.vue'
// import mecenter from '@/views/mecenter/mecenter.vue'
// import loanMicro from '@/views/loan/loanMicro.vue'

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      component: home,
      children: [
        {
          path: '/',
          name: 'loan',
          component: home,
          children: [
            {path: '/', component: resolve => require(['@/views/loan/loan.vue'], resolve)},
            {path: 'loanmicro', component: resolve => require(['@/views/loan/loanMicro'], resolve)},
            {path: 'loanlarge', component: resolve => require(['@/views/loan/loanLarge'], resolve)},
            {path: 'loanloser', component: resolve => require(['@/views/loan/loanLoser'], resolve)},
            {path: 'datamust', component: resolve => require(['@/views/loan/dataMust'], resolve)},
            {path: 'submitapply', component: resolve => require(['@/views/loan/submitApply'], resolve)},
            {path: 'loanrecom', component: resolve => require(['@/views/loan/loanRecom'], resolve)},
            {path: 'loandes', component: resolve => require(['@/views/loan/loanDes'], resolve)},
            {path: 'loanmsg', component: resolve => require(['@/views/loan/loanMsg'], resolve)},
            {path: 'suremore', component: resolve => require(['@/views/loan/loanSureMore'], resolve)},
            {path: 'login', name: 'login', component: resolve => require(['@/views/user/login.vue'], resolve)},
            {
              path: 'loanDetail',
              name: 'loanDetail',
              component: resolve => require(['@/views/loan/loanDetail.vue'], resolve)
            },
            {path: 'loanList', name: 'loanList', component: resolve => require(['@/views/loan/loanList.vue'], resolve)},
            {
              path: 'loanProgress',
              name: 'loanProgress',
              component: resolve => require(['@/views/loan/loanProgress.vue'], resolve)
            },
            {
              path: 'repayment',
              name: 'repayment',
              component: resolve => require(['@/views/loan/repayment.vue'], resolve)
            }
          ]
        },
        {
          path: '/credit',
          component: home,
          children: [
            {path: '/', component: resolve => require(['@/views/credit/credit.vue'], resolve)},
            {path: 'userinfor', component: resolve => require(['@/views/credit/userInfor.vue'], resolve)},
            {path: 'userface', component: resolve => require(['@/views/credit/userFace.vue'], resolve)},
            {path: 'usercontact', component: resolve => require(['@/views/credit/userContact.vue'], resolve)},
            {path: 'userphoto', component: resolve => require(['@/views/credit/userPhoto.vue'], resolve)},
            {path: 'userwork', component: resolve => require(['@/views/credit/userWork.vue'], resolve)}
          ]
        },
        {
          path: '/mecenter',
          component: home,
          children: [
            {path: '/', component: resolve => require(['@/views/mecenter/mecenter.vue'], resolve)},
            {path: 'info', name: 'info', component: resolve => require(['@/views/user/info.vue'], resolve)},
            {
              path: 'userDetail',
              name: 'userDetail',
              component: resolve => require(['@/views/user/userDetail.vue'], resolve)
            },
            {
              path: 'personalData',
              name: 'personalData',
              component: resolve => require(['@/views/user/personalData.vue'], resolve)
            },
            {
              path: 'bankDetail',
              name: 'bankDetail',
              component: resolve => require(['@/views/user/bankDetail.vue'], resolve)
            },
            {
              path: 'phoneDetail',
              name: 'phoneDetail',
              component: resolve => require(['@/views/user/phoneDetail.vue'], resolve)
            },
            {
              path: 'editPassword',
              name: 'editPassword',
              component: resolve => require(['@/views/user/editPassword.vue'], resolve)
            },
            {
              path: 'about',
              name: 'about',
              component: resolve => require(['@/views/mecenter/about.vue'], resolve)
            }
          ]
        },
        {
          path: 'customer',
          component: home,
          children: [
            {path: '/', component: resolve => require(['@/views/user/customerInfo.vue'], resolve)},
          
          ]
        }
      ]
    }
  ]
})

// export default new Router({
//   // mode: 'history',
//   routes: [
//     {
//       path: '/',
//       name: 'loan',
//       component: home,
//       children: [
//         {path: 'loanmicro', component: resolve => require(['@/views/loan/loanMicro'], resolve)}
//       ]
//     },
//
//     {
//       path: '/credit',
//       name: 'credit',
//       component: credit
//     },
//     {
//       path: '/mecenter',
//       name: 'mecenter',
//       component: mecenter
//     }
//   ]
// })
