module.exports = {
    // method of operation
    get: {
      tags: ["Tasks"], // operation's tag.
      description: "Get tasks", // operation's desc.
      operationId: "getTasks", // unique operation id.
      parameters: [], // expected params.
      // expected responses
      responses: {
        // response code
        200: {
          description: "Tasks were obtained", // response desc.
          content: {
            // content-type
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ManyTaskRead", // Todo model
              },
            },
          },
        },
      },
    }
  };