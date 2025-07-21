const express = require('express');
const app = express()
app.use(express.json())
const port = 4060

const ques = []

app.post('/post_Ques',(req,res)=>{
    const new_post = {
        id : ques.length+1,
        question : req.body.question,
        answer : req.body.answer
}

ques.push(new_post);
console.log(ques);
res.status(200).json({
    msg : "Post Created"
})
})

app.get('/getAllQues',(req,res)=>{
    res.status(200).json(ques)
})

app.get('/getPost/:id',(req,res)=>{
    const id = req.params.id;

    for(let i=0;i<ques.length;i++){
        const post = ques[i];
        if(post.id==id){
            return res.status(200).json(post);
        }
    }
    res.status(400).json({
        msg : "Id not found"
    })
})

app.put('/editQues/:id',(req,res)=>{
    const id = req.params.id;

    for(let i=0;i<ques.length;i++){
        const post = ques[i];
        if(post.id==id){
            post.question = req.body.question,
            post.answer = req.body.answer

            console.log("Updated post:" , post)
            return res.status(200).json({
                msg : "Post update successfully"
            })
        }
    }
    res.status(400).json({
        msg : "No Post found"
    })

})

app.delete('/delete_Ques/:id',(req,res)=>{
    const id = parseInt(req.params.id);

    for(let i=0;i<ques.length;i++){
        if(ques[i].id === id){
            ques.splice(i,1);
            return res.status(200).json({
                msg : "Post deleted successfully"
            });
        }
    }

    res.status(400).json({
        msg : "Post not Found"
    })
})

app.get('/search/:keyword',(req,res)=>{
    const keyword = req.params.keyword.toLowerCase();

    const result = ques.filter(post =>
        post.question.toLowerCase().includes(keyword)
    );
    res.status(200).json(result);
})

app.listen(port,()=>{
    console.log("server running...")
})