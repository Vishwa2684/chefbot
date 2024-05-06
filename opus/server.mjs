import express from 'express'
import cors from 'cors'
import pkg from 'body-parser';
import Anthropic from "@anthropic-ai/sdk";
import dotenv from 'dotenv';

dotenv.config()
const anthropic = new Anthropic({
  apiKey: process.env.API_KEY_ANTHROPIC
});

const app=express()

app.use(pkg.json())

app.use(cors({origin:process.env.FRONTEND,credentials:true}))


app.post('/api/anthropic',async (req,res)=>{
    try{
        /*Format of msgs should in POST request should be
            {
                "messages":[{
                "role": "user",
                "content": [
                            {
                            "type": "text",
                            "text": "I'm bulking, suggest me some recipe with high calories"
                            }
                        ]               
            }]
            }
        */

        console.log(`request made to /api/anthropic`)
        let msgs = req.body.messages
        const msg = await anthropic.messages.create({
              model: "claude-3-opus-20240229",
              max_tokens: 1024,
              temperature: 0.1,
              system: "Your task is to generate personalized recipe ideas based on the user's input of available ingredients and dietary preferences. Use this information to suggest a variety of creative and delicious recipes that can be made using the given ingredients while accommodating the user's dietary needs, if any are mentioned. For each recipe, provide a brief description, a list of required ingredients, and a simple set of instructions. Ensure that the recipes are easy to follow, nutritious, and can be prepared with minimal additional ingredients or equipment.",
              messages:msgs
            });
            return res.status(200).json({msg})
    }catch(error){
        console.log(error.message)
        return res.json({"error":error.message})
    }
})


    app.post('/api/test',(req,res)=>{
        return res.json({message:'This is a test'})
    })

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 
app.listen(process.env.BACKPORT,()=>{
    console.log(`server is running`)
})

