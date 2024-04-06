https://discord.gg/WZMtUNfm

GET /driveway
    The user will send an address or coordinates. Response should return all listings within
    the surrounding area

    REQUEST BODY
    {
        lat: float
        long: float
        radius?: float in miles. Default is 2 miles
        address: string
    }

    RESPONSE BODY
    GET /driveway
    {
        [
            address: string
            name: 
            rating:
            numRatings:
            description:
            rate/price:
            long:
            lat:
            listingID:
        ]
    }

POST /signup
    The user will send sign up information. Create a new user in the database and return a token

    REQUEST BODY
    {
        username: string
        password: string
        email: string
    }

    RESPONSE BODY 
    {
        token: jwt string token
        username: string
        userID: number
    }


POST /login
    The user will send login information. Return a token if successful.
    
    REQUEST BODY
    {
        username: string
        password: string
    }

     RESPONSE BODY 
    {
        token: jwt string token
        username: string
        userID: number
    }
