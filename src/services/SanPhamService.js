import axiosClient from "../axios"

class SanPhamService{
    static getSanPham = ()=> axiosClient.get('/SanPham')
    static getChiTiet = (id)=> axiosClient.get(`/SanPham/${id}`)
    static search = (search)=> axiosClient.get(`/SanPham/search/${search}`)
    static UpdateSanPham = (id, data)=> axiosClient.post(`/SanPham/${id}`, data, {
    })
    static CreateSanPham = (data)=> axiosClient.post(`/SanPham`, data)
}

export default SanPhamService