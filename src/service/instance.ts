import axios from 'axios';
import {BASE_URL} from './urls';

const Client = axios.create();
Client.defaults.baseURL = BASE_URL;

export default Client;
