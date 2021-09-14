module.exports = {
    post: {
        tags: ["User"], // operation's tag.
        description: "Login user", // operation's desc.
        operationId: "loginUser", // unique operation id.
        requestBody: {
            description: "User credentials",
            required:true,
            content: {
                "application/json":{
                    schema:{
                        $ref:"#/components/schemas/UserLogin"
                    }
                }
                
            }
        }, // expected params.
        // expected responses
        responses: {
          // response code
          200: {
            description:'User data just created',
            content: {
                "application/json":{
                    schema:{
                        $ref:"#/components/schemas/UserRead"
                    }
                }
            }
            
          },
        },
      },
}