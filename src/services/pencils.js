import axios from 'axios';

const baseUrl = '/api/pencils';

const getAll = async () => {
  const request = axios.get(baseUrl);
  const response = await request;
  return response.data;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll };
