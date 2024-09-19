// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
const getUsersPosts = () => {
    return fetch("https://jsonplaceholder.typicode.com/users");
}

getUsersPosts()
.then((response)=> response.json())
.then((data)=> { 
    const name = data.map(newUsers =>{ 
        return newUsers.name
    })
    console.log(name)
})
