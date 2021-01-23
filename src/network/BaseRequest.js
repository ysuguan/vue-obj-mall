import Vue from 'vue';
import axios from 'axios';

export function baseRequest(config){
  const baseConfig = {
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  }
  const instance = axios.create(baseConfig);
  return instance(config);
}