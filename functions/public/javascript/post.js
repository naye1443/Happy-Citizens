
// @Return Promise with Post values
function getPost(){
    // Options for post request
    const options = {
        method: 'POST',
        headers: {
            'content-Type': 'application/json'
        },
        body: JSON.stringify({GetPost: 'Get Post'})
    };
    return fetch('citizenDashboard', options).then((response) => response.json())
    .then((post1) => {
        return post1;
    });
}

async function PrintPost(){
    realpost = await getPost();
    console.log(realpost.status);
}