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



createPost({title:'Post Three', body:'This is Post Three'})
.then(getPost)
.catch(err => console.log(err));

// -------Prmoise.all-------

const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 2000, 'Good Bye')
});

const promise4 = fetch('https://jsonplaceholder.typicode.com/todos/1')
                .then(response=>response.json());

Promise.all([promise1, promise2, promise3,promise4])
.then(values=>console.log(values));