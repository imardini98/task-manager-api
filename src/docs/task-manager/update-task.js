module.exports = {
    patch: {
        tags: ["Tasks"], // operation's tag.
        description: "Update tasks", // operation's desc.
        operationId: "updateTasks", // unique operation id.
        parameters: [{
            in:'path',
            name:'id',
            schema:{
                type:'string',
            },
            required:true,
            description:"Id of task to update"
        }],
        requestBody: {
            description: "Task information to update",
            required:false,
            content: {
                "application/json":{
                    schema:{
                        $ref:"#/components/schemas/Task"
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