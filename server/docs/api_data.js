define({ "api": [
  {
    "type": "post",
    "url": "/post",
    "title": "create",
    "name": "CreatePost",
    "group": "Post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "-",
            "description": "<p>contain message and resource id.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/post/index.js",
    "groupTitle": "Post",
    "sampleRequest": [
      {
        "url": "https://127.0.0.1/post"
      }
    ]
  },
  {
    "type": "get",
    "url": "/post",
    "title": "all",
    "name": "GetAllPost",
    "group": "Post",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "-",
            "description": "<p>contain items from resource.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/post/index.js",
    "groupTitle": "Post",
    "sampleRequest": [
      {
        "url": "https://127.0.0.1/post"
      }
    ]
  },
  {
    "type": "get",
    "url": "/post/:id",
    "title": "get",
    "name": "GetPostById",
    "group": "Post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "-",
            "description": "<p>resource.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/post/index.js",
    "groupTitle": "Post",
    "sampleRequest": [
      {
        "url": "https://127.0.0.1/post/:id"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/post/:id",
    "title": "delete",
    "name": "RemovePostById",
    "group": "Post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "-",
            "description": "<p>contain message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/post/index.js",
    "groupTitle": "Post",
    "sampleRequest": [
      {
        "url": "https://127.0.0.1/post/:id"
      }
    ]
  },
  {
    "type": "put",
    "url": "/post/:id",
    "title": "update",
    "name": "UpdatePostById",
    "group": "Post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "-",
            "description": "<p>contain message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/post/index.js",
    "groupTitle": "Post",
    "sampleRequest": [
      {
        "url": "https://127.0.0.1/post/:id"
      }
    ]
  },
  {
    "type": "post",
    "url": "/post",
    "title": "create",
    "name": "CreateUserToken",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "-",
            "description": "<p>set header x-auth with generated token.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/users/index.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "https://127.0.0.1/post"
      }
    ]
  },
  {
    "type": "get",
    "url": "/me",
    "title": "get",
    "name": "GetUser",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "-",
            "description": "<p>get current user.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/users/index.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "https://127.0.0.1/me"
      }
    ]
  },
  {
    "type": "post",
    "url": "/login",
    "title": "",
    "name": "LoginUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "-",
            "description": "<p>set header x-auth with generated token.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/users/index.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "https://127.0.0.1/login"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/me/token",
    "title": "logout",
    "name": "LogoutUser",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "-",
            "description": "<p>status 200.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/users/index.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "https://127.0.0.1/me/token"
      }
    ]
  }
] });
