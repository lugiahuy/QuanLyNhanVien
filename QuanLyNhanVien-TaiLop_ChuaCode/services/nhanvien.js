function NhanVienService(){
    this.layDSNV = function(){
        var url = "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/nhanVien";
        return axios({
            method: 'GET',
            url: url
        }) 
    }
    this.themNhanVien = function(nhanVienMoi){
        var url = 'https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/nhanVien';
        return axios({
            method: "POST",
            url: url,
            data: nhanVienMoi
        })
    }
}