document.getElementById('getText').addEventListener('click', getText);
document.getElementById('getUsers').addEventListener('click', getUsers);
document.getElementById('getPosts').addEventListener('click', getPosts);
document.getElementById('addPost').addEventListener('submit', addPost);

function getText()
    {
        fetch('sample.txt')
        .then(response => response.text())
        .then(result=> 
            {
                document.getElementById('output').innerHTML = `<h3 class="lead mb-4">${result}</h3>`;
            })
        .catch(err=>console.log(err));
    }
function getUsers()
{
    fetch('user.json')
    .then(response=> response.json())
    .then(result=> 
    {
        let output = `<h2 class="mb-4">Users</h2>`;
        result.forEach(user=>{
            output += `
                <ul class="list-group mb-3">
                    <li class="list-group-item">ID: ${user.id}</li>
                    <li class="list-group-item">Name: ${user.name}</li>
                    <li class="list-group-item">Email: ${user.email}</li>
                </ul>
            `
        });
        document.getElementById('output').innerHTML = output;
    });
}

function getPosts()
{
    fetch('http://jsonplaceholder.typicode.com/posts')
    .then(response=> response.json())
    .then(result=> 
    {
        let output = `<h2 class="mb-4">Posts</h2>`;
        result.forEach(post=>{
            output += `
                <div class="card card-body mb-4">
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                </div>
            `
        });
        document.getElementById('output').innerHTML = output;
    });
}

function addPost(e)
{
    e.preventDefault();
    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;

    fetch('http://jsonplaceholder.typicode.com/posts', {
        method:'POST',
        headers:{
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json'
        },
        body:JSON.stringify({title:title, body:body})
    })
    .then(response=> response.json())
    .then(result=> console.log(result));
}
