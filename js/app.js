function playerSuccess(response){
    // console.log(response);
    let stuff = response.data.data;
    console.log(stuff);
    for (let post of stuff){
    // console.log(post);
    document.body.insertAdjacentHTML(`beforeend`, `<h2>${post.first_name} ${post.last_name}</h2>`);
    document.body.insertAdjacentHTML(`beforeend`, `<p>${post.team.city}</p>`);
    }
}

function playerFailure(error){
    console.log(error);
}

function getPlayer(){
    alert("Your API is coming soon!");
    axios.request({
        url : "https://www.balldontlie.io/api/v1/players",
    }).then(playerSuccess).catch(playerFailure);
}


document.getElementById(`mainButton`).addEventListener(`click`, getPlayer)