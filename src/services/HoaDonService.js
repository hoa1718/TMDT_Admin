import axiosClient from "../axios"

class HoaDonService{
    static getHoaDon = (type)=> axiosClient.get(`HoaDon/${type}`)
    static timKiem = (data)=> axiosClient.get(`HoaDon/SearchHoaDon?${data}`)
    static chapNhan = (id) =>axiosClient.post(`HoaDon/ChapNhanDonHang/${id}`)
    static huyDon = (id) =>axiosClient.post(`HoaDon/HuyDonHang/${id}`)
} 

export default HoaDonService