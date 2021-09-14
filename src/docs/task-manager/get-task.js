module.exports = {
    get: {
        tags: ["Tasks"], // operation's tag.
        description: "Get task", // operation's desc.
        operationId: "getTask", // unique operation id.
        parameters: [{
            in:'path',
            name:'id',
            schema:{
                type:'string',
            },
            required:true,
            description:"Id of task to retrieve"
        }],
        responses: {
          // response code
          200: {
            description: "Tasks were obtained", // response desc.
          content: {
            // content-type
            "application/json": {
              schema: {
                $ref: "#/components/schemas/TaskRead", // Todo model
              },
            },
          },
          },
        },
      },
}