import axiosClient from "../axios"

class PhimService{
    static getPhim = ()=> axiosClient.get('/Phim')
} 

export default PhimService