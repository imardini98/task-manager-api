module.exports = {
    post: {
        tags: ["User"], // operation's tag.
        description: "Upload Avatar", // operation's desc.
        operationId: "uploadAvatar", // unique operation id.
        requestBody: {
          description: "Avatar image",
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Avatar",
              },
            },
          },
        }, // expected params.
        // expected responses
        responses: {
          // response code
          200: {
           
          },
        },
      },
}