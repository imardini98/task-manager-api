module.exports = {
    components: {
      schemas: {
        id: {
            type: "string",
            description: "An id of an user or a task",
            example: "614105c8269604001676da2f"
        },
        "UserCreation": {
            type: "object",
            properties: {
                name:{
                    type:'string',
                    description:'User Name',
                    example: "Federico García"
                },
                email: {
                    type: 'string',
                    description: 'User email',
                    example: 'fed@gmail.com'
                },
                age: {
                    type: 'number',
                    description: 'User age',
                    example: 27
                },
                password: {
                    type: 'string',
                    description: 'User password: Min length is 8 and you cannout use the word password.',
                    example: "$ert123??"
                }
            }
        },
        "UserRead": {
            type: "object",
            properties: {
                id: {
                    type: "string",
                    description: "User ID",
                    example: "614105c8269604001676da2f"
                },
                name:{
                    type:'string',
                    description:'User Name',
                    example: "Federico García"
                },
                email: {
                    type: 'string',
                    description: 'User email',
                    example: 'fed@gmail.com'
                },
                age: {
                    type: 'number',
                    description: 'User age',
                    example: 27
                },
                tokens:{
                    type:'array',
                    items:{
                        type:'object',
                        properties:{
                            token:{
                                type:'string',
                                example:"asdasdasqiuwgiquwgeiqusdiu123121343uqhgwidqgidu12g3i12ugi"
                            }
                        }
                    }
                }
            }
        },
        "UserLogin": {
            type:'object',
            properties: {
                email: {
                    type: 'string',
                    description: 'User email provided in user creation'
                },
                password: {
                    type: 'string',
                    description: 'User password provided in user creation'
                }
            }
        },
        TaskCreate: {
            type:'object',
            properties: {
                completed: {
                    type:'boolean',
                    description: 'Task status. The task can be completed or not',
                    example: false
                },
                description: {
                    type:'string',
                    description: 'Description of the task',
                    example: "My first task"
                }
            }
        },
        TaskRead: {
            type:'object',
            properties: {
                id: {
                    type: "string",
                    description: "ID of task",
                    example: "614105c8269604001676da2f"
                },
                completed: {
                    type:'boolean',
                    description: 'Task status. The task can be completed or not',
                    example: false
                },
                description: {
                    type:'string',
                    description: 'Description of the task',
                    example: "My first task"
                }
            }
        },
        ManyTaskRead: {
            type:'array',
            items:{
                type:'object',
                properties: {
                    id: {
                        type: "string",
                        description: "ID of task",
                        example: "614105c8269604001676da2f"
                    },
                    completed: {
                        type:'boolean',
                        description: 'Task status. The task can be completed or not',
                        example: false
                    },
                    description: {
                        type:'string',
                        description: 'Description of the task',
                        example: "My first task"
                    }
                }
            }
            
        },
        Avatar: {
            type:'object',
            properties: {
                avatar: {
                    type: "string",
                    description: "avatar file",
                },
                
            }
        
            
        },
      },
    },
  };