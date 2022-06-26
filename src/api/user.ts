import axios from 'axios';
import type { RouteRecordNormalized } from 'vue-router';
import { UserState } from '@/store/modules/user/types';

export interface LoginData {
  id: string;
  username: string;
  password: string;
}

export interface LoginRes {
  id: string;
  token: string;
  roles: string;
}

export interface LogoutRes {
  id?: string;
  roles?: string;
}

export function login(data: LoginData) {
  return axios.post<LoginRes>('/api/user/login', data);
}

export function logout(data: LogoutRes) {
  return axios.post<LoginRes>('/api/user/logout', data);
}

export function getUserInfo() {
  return axios.post<UserState>('/api/user/info');
}

export function getMenuList() {
  return axios.post<RouteRecordNormalized[]>('/api/user/menu');
}
