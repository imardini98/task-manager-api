
module.exports = {
    post: {
        tags: ["Tasks"], // operation's tag.
        description: "Create tasks", // operation's desc.
        operationId: "createTasks", // unique operation id.
        requestBody: {
            description: "Task information",
            required:true,
            content: {
                "application/json":{
                    schema:{
                        $ref:"#/components/schemas/TaskCreate"
                    }
                }
                
            }
        }, // expected params.
        // expected responses
        responses: {
          // response code
          200: {
            
          },
        },
      },
}