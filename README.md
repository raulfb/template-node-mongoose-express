
## Description
Api with Node js, express and mongoDB

##### Routing         : Express
##### ORM Database    : Mongoose

## Install modules

```
npm install
```

### start app
```
npm start
```

### Curls CRUD

#### Create User

```
curl -X POST 'http://127.0.0.1:3000/v1/users' -H  "accept: application/json" -H  "Content-Type: application/json" -d '{"name":"John","lastName":"Smith","nationality":"Spanish"}'

```

#### Delete User

```
curl -X DELETE -H  "accept: application/json" -H  "Content-Type: application/json" http://127.0.0.1:3000/v1/users/625676ea253e9e84694dd563


```

#### Get All Users
```
curl -X GET -H  "accept: application/json" -H  "Content-Type: application/json" http://127.0.0.1:3000/v1/users/
```

#### Get User by Id
```
curl -X GET -H  "accept: application/json" -H  "Content-Type: application/json" http://127.0.0.1:3000/v1/users/6256776800784141973dc217
```

#### Update User by Id
```
curl -s -X PUT -H "accept: application/json" -H "Content-Type: application/json"  -d '{"name":"Pepe"}' http://127.0.0.1:3000/v1/users/6256776800784141973dc217
```
