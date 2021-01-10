import { OrderPayLoad } from './types';
import axios from "axios" ;

const API_URL = 'http://localhost:8081' ;
const mapboxToken = process.env.REACT_APP_ACCESS_TOKEN_MAPBOX;

export function fetchProducts(){

    return axios(`${API_URL}/products`) ;

}

export function fetchLocalMapBox( local : string ){
    return axios( `https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${ mapboxToken }` ) ;

}

export function saveOrder( payload: OrderPayLoad ){
    return axios.post(`${API_URL}/orders`, payload) ;
}