import Client from './instance';

export async function getRequest(params: object, URL: string) {
  const response = await Client.get(URL, params);
  return response;
}
export async function postRequest(params: object, URL: string) {
  const response = await Client.post(URL:string, params:Object);
  return response;
}
