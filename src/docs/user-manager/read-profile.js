module.exports = {
    get: {
        tags: ["User"], // operation's tag.
        description: "Read profile", // operation's desc.
        operationId: "readProfile", // unique operation id.
        responses: {
          // response code
          200: {
            description:'Profile user data',
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