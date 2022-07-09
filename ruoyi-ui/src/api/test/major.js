import request from '@/utils/request'
import { parseStrEmpty } from "@/utils/ruoyi";

//查询综测专业用户
export function TestUser(query) {
  return request({
    url: '/test/major',
    method: 'get',
    params: query
  })
}

// 查询用户详细
export function getTestUser(userId) {
  return request({
    url: '/test/major/' + parseStrEmpty(userId),
    method: 'get'
  })
}
