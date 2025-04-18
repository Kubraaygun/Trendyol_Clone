import Client from './instance';

export async function getRequest(params: object, URL: string) {
  const response = await Client.get(URL, params);
  return response;
}
export async function postRequest(params: object, URL: string) {
  console.log('params', params);
  console.log('URL', URL);
  const response = await Client.post(URL, params);
  console.log('response', response);
  return response;
}
