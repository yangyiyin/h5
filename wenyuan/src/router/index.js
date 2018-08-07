import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const index = r => require.ensure([], () => r(require('@/page/index')), 'index');
// const manage = r => require.ensure([], () => r(require('@/page/manage')), 'manage');
// const error = r => require.ensure([], () => r(require('@/page/error')), 'error');
// const phone_contact = r => require.ensure([], () => r(require('@/page_biz/phone_contact')), 'phone_contact');


const routes = [
	{
		path: '/',
		component: index
	},
	// {
	// 	path: '/manage',
	// 	component: manage,
	// 	name: '',
	// 	children: [
	// 		{
	// 			path: '/index',
	// 			component: phone_contact,
	// 			meta: ['电话联系', '慈溪电联记录'],
	// 		},
	// 		{
	// 			path: '/error',
	// 			component: error,
	// 			meta: ['错误', '错误'],
	// 		}
    //
	// 	]
	// }
]

export default new Router({
	routes,
	strict: process.env.NODE_ENV !== 'production',
})
