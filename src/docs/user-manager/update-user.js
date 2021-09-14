module.exports = {
    patch: {
        tags: ["User"], // operation's tag.
        description: "Update user", // operation's desc.
        operationId: "updateUser", // unique operation id.
        requestBody: {
          description: "User data to update",
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
}