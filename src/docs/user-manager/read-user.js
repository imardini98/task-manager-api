module.exports = {
    get: {
        tags: ["User"], // operation's tag.
        description: "Get User", // operation's desc.
        operationId: "getUser", // unique operation id.
        parameters: [{
            in:'path',
            name:'id',
            schema:{
                type:'string',
            },
            required:true,
            description:"Id of user to retrieve"
        }],
        responses: {
          // response code
          200: {
            description: "User data retrieved", // response desc.
          content: {
            // content-type
            "application/json": {
              schema: {
                $ref: "#/components/schemas/UserRead", // Todo model
              },
            },
          },
          },
        },
      },
}