import fetch from '@/config/fetch'

/**
 * 登陆
 */

export const login = data => fetch('/waibao/admin/login', data, 'POST');

