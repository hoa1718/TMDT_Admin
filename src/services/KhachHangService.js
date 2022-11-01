import axiosClient from "../axios"

class KhachHangService{
    static getKhachHang = ()=> axiosClient.get('/KhachHang')
    static UpdateKhachHang = (id, data)=> axiosClient.post(`/KhachHang/${id}`, data, {
    })
} 

export default KhachHangService