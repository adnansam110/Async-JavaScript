const posts = [
    {
        title:'Post one',
        body:'This is post one'
    },
    {
        title:'Post two',
        body:'This is post two'
    }
];

function getPost(){
    setTimeout(() =>{
        let output ='';
        posts.forEach((post, index) =>{
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post){

    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            posts.push(post);
            
            const error = false;

            if(!error){
                resolve();
            }
            else{
                reject('Error: Something Went Wrong');
            }
        },2000);
    });

}

// ----- Async Await with Promises -----

// async function init()
// {
//     await createPost({title:'Post Three', body:'This is Post Three'});

//     getPost();
// }

// init();

// ------ Async Await with Fetch ----

async function fetchUsers()
{
    const res = await fetch
    ('https://jsonplaceholder.typicode.com/todos/1');

    const data = await res.json();

    console.log(data);
}

fetchUsers();