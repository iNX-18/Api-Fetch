function fetchdata(){
    const username = document.getElementById('username').value;
    const result = document.getElementById('result');
    result.innerHTML="";
    if (username){
        fetch(`https://api.github.com/users/${username}`)
            .then(response => response.json())
            .then(data=>{
                if(data.message && data.message === "Not Found"){
                    result.innerHTML= "<p> User not found ! </p>";
                }
                else{
                    const data1=`
                    <img src="${data.avatar_url}" alt="${data.login}" class="pfp" style="height: 100px; width:100px; border-radius: 50%;">
                    <p class="info" ><strong>Name:</strong> ${data.name}</p>
                    <p class="info" ><strong>Username:</strong> ${data.login}</p>
                    <p class="info" ><strong>Followers:</strong> ${data.followers}</p>
                    <p class="info" ><strong>Following:</strong> ${data.following}</p>
                    <p class="info" ><strong>Public Repositories:</strong> ${data.public_repos}</p>
                    <p class="info" ><strong>Profile URL:</strong> <a href="${data.html_url}" target="_blank">Click Here</a></p>`;
                    result.innerHTML= data1;
                }
            })
            .catch(error =>{
                console.error("Error",error);
                result.innerHTML="<p>Facing error while fetching data </p>"
            });
    }else{
        result.innerHTML="<p> Enter Username</p>"
    }
}