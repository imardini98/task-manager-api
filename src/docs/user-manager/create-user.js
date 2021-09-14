module.exports = {
  post: {
    tags: ["User"], // operation's tag.
    description: "Create user", // operation's desc.
    operationId: "createUser", // unique operation id.
    requestBody: {
      description: "User data",
      required: true,
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/UserCreation",
          },
        },
      },
    }, // expected params.
    // expected responses
    responses: {
      // response code
      200: {
        description: "User data just created",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/UserRead",
            },
          },
        },
      },
    },
  },
};
