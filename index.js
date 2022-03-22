
document.querySelector('#signup-form .actions ul li:last-child a').onclick = function(){
 this.append
    
    //Tổ chức DOM es6 tiếp tục để lấy input từ user

    var arrThongTin = document.querySelectorAll('#signup-form input', '#signup-form select');

    let thongTin ={};
    for (let input of arrThongTin){
        let id = input.id;
        let value = input.value;
        thongTin = {...thongTin, [id]:value}
    }

let contentHTML = '';
for (let key in thongTin){
   contentHTML += `
   <tr>
      <td> ${key} </td>
      <td> ${thongTin[key]} </td>
   </tr>
   `
}
document.querySelector('#tblThongTin').innerHTML = contentHTML;
}


