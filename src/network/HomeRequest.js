import {baseRequest} from "./BaseRequest"

export function getMultiData(){
  const config = {
    url: '/home/multidata',
    type: 'get'
  };
  return baseRequest(config);
}