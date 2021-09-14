module.exports = {
    delete: {
        tags: ["Tasks"], // operation's tag.
        description: "Delete tasks", // operation's desc.
        operationId: "deleteTasks", // unique operation id.
        parameters: [{
            in:'path',
            name:'id',
            schema:{
                type:'string',
            },
            required:true,
            description:"Id of task to delete"
        }],
        // expected responses
        responses: {
          // response code
          200: {
            
          },
        },
      },
}