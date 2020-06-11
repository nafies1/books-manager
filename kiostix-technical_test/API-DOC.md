# Books API

API documentation for Master Books

## Books [/books{?title}{?author}{?category}]
### List Books [GET]

+ Parameters (Query Params)
    + title : "Learn English" (string) - optional
    + author : "Nafies" (string) - optional
    + category : "language" (string) - optional

+ Response 200 (application/json)

        {
            "data":[
                {
                    "id": 1,
                    "title": "Mantap jiwa",
                    "author": "Jerome",
                    "category": "novel"
                    "created_at": "7843731823",
                    "updated_at": "7843731823"
                },
                {
                    "id": 2,
                    "title": "Learn Coding",
                    "author": "Agus",
                    "category": "coding"
                    "created_at": "7843731823",
                    "updated_at": "7843731823"
                },
            ]
        }