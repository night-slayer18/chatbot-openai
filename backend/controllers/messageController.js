const messageController = async (req, res) => {
    const {messages} = req.body;
    const data = {
        model: 'gpt-3.5-turbo',
        messages:[
            {
                role:'system',
                content:'You are a very helpful assistant',
            }
        ]
    };
    
    try{
        const response = await fetch('https://api.openai.com/v1/chat/completions' ,{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
            },
            body: JSON.stringify({
                ...data,
                messages:[
                    ...data.messages,
                    ...messages,
                ]
                
                
            })
        }) 
        const resdata = await response.json();
        console.log(resdata)
        res.send(resdata);
    }
    catch (error){
        console.log(error , "Error");
    }
};

module.exports = messageController;