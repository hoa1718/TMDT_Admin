import axiosClient from "../axios"

class HangService{
    static getHang = ()=> axiosClient.get('/Hang')
} 

export default HangService