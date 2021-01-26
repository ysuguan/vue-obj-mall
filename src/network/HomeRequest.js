import {baseRequest} from "./BaseRequest"

export function getMultiData(){
  const config = {
    url: '/home/multidata',
    type: 'get'
  };
  return baseRequest(config);
}

export function getHomeData(type){
  const config = {
    url: '/home/data',
    type: 'get',
    params: {
      type,
      page: 1
    }
  };
  return baseRequest(config);
}