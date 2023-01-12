// Not currently being used

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

// @Returns resolved promise of post JSON
async function ReturnPost(){
    realpost = await getPost();
    console.log(realpost.status[0]);
    return realpost.status;
}