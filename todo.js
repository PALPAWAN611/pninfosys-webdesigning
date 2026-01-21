const usernametextField = document.getElementById("username")
const addUserBtn = document.getElementById("adduser")
const data2 =document.getElementById("body")

let userArray = []
let edit_id =null

addUserBtn.onclick = () => { //1
    const name = usernametextField.value
    // alert(name)
    //update
    if(edit_id != null){
        userArray.splice(edit_id,1,{uname:name})
        edit_id=null

    }else{
      userArray.push({ uname: name })
    }
    
    saveData(userArray)
    usernametextField.value =""
    addUserBtn.innerText ="Add user"
}
// console.log(userArray)

function saveData(userArray) { //2
    let strdata = JSON.stringify(userArray)
    //   console.log(strdata)
    localStorage.setItem("username", strdata)
    displayData()
}

//get data localstore
const d = localStorage.getItem("username")
// console.log(d)  //3
if (d != null) {
    userArray = JSON.parse(d)
}

// console.log(userArray)

function displayData()
{
    let data1 =''
    userArray.forEach((item,index)=>{
        // console.log(item)
        data1 += `<tr>
          <td> ${index +1 } </td>
          <td> ${item.uname } </td>
          <td> 
            <i class ="btn text-success fa fa-edit mx-2" onclick='editInfo(${index})'></i>
            <i class ="btn text-danger fa fa-trash  mx-2" onclick='deleteInfo(${index})'></i>
          </td>
        </tr>`

    })
    // console.log(data1)
    data2.innerHTML = data1
}

displayData()


function deleteInfo(id){
//   alert(id)
 userArray.splice(id,1)
 saveData(userArray)
}

function editInfo(id){
    // alert(id)
    edit_id =id
    usernametextField.value =userArray[id].uname
    addUserBtn.innerText ="Update User"
}