<<<<<<< HEAD
# Todo Application

Given an `app.js` file and an empty database file `todoApplication.db`.

Create a table with the name `todo` with the following columns,

**Todo Table**

| Column   | Type    |
| -------- | ------- |
| id       | INTEGER |
| todo     | TEXT    |
| priority | TEXT    |
| status   | TEXT    |

and write APIs to perform operations on the table `todo`,

<MultiLineNote>
  
  - Replace the spaces in URL with `%20`.
  - Possible values for `priority` are `HIGH`, `MEDIUM`, and `LOW`.
  - Possible values for `status` are `TO DO`, `IN PROGRESS`, and `DONE`.
</MultiLineNote>

### API 1

#### Path: `/todos/`

#### Method: `GET`

- **Scenario 1**

  - **Sample API**
    ```
    /todos/?status=TO%20DO
    ```
  - **Description**:

    Returns a list of all todos whose status is 'TO DO'

  - **Response**

    ```
    [
      {
        id: 1,
        todo: "Watch Movie",
        priority: "LOW",
        status: "TO DO"
      },
      ...
    ]
    ```

- **Scenario 2**

  - **Sample API**
    ```
    /todos/?priority=HIGH
    ```
  - **Description**:

    Returns a list of all todos whose priority is 'HIGH'

  - **Response**

    ```
    [
      {
        id: 2,
        todo: "Learn Node JS",
        priority: "HIGH",
        status: "IN PROGRESS"
      },
      ...
    ]
    ```

- **Scenario 3**

  - **Sample API**
    ```
    /todos/?priority=HIGH&status=IN%20PROGRESS
    ```
  - **Description**:

    Returns a list of all todos whose priority is 'HIGH' and status is 'IN PROGRESS'

  - **Response**

    ```
    [
      {
        id: 2,
        todo: "Learn Node JS",
        priority: "HIGH",
        status: "IN PROGRESS"
      },
      ...
    ]
    ```

- **Scenario 4**

  - **Sample API**
    ```
    /todos/?search_q=Play
    ```
  - **Description**:

    Returns a list of all todos whose todo contains 'Play' text

  - **Response**

    ```
    [
      {
        id: 4,
        todo: "Play volleyball",
        priority: "MEDIUM",
        status: "DONE"
      },
      ...
    ]
    ```

### API 2

#### Path: `/todos/:todoId/`
=======
<<<<<<< HEAD
# Player Match Scores

Given two files `app.js` and a database file `cricketMatchDetails.db` consisting of three tables `player_details`, `match_details` and `player_match_score`.

Write APIs to perform operations on the tables `player_details`, `match_details` and `player_match_score` containing the following columns,

**Player Details Table**

| Column    | Type    |
| ---------- | ------- |
| player_id   | INTEGER |
| player_name | TEXT    |

**Match Details Table**

| Column    | Type    |
| ---------- | ------- |
| match_id   | INTEGER |
| match | TEXT    |
|year|INTEGER|

**Player Match Score Table**

| Column    | Type    |
| ---------- | ------- |
| player_match_id   | INTEGER |
| player_id | INTEGER    |
|match_id|INTEGER|
|score|INTEGER|
|fours | INTEGER |
|sixes | INTEGER |

### API 1

#### Path: `/players/`

#### Method: `GET`

#### Description:

Returns a list of all the players in the player table

#### Response

```
[
  { 
    playerId: 1,
    playerName: "Ram"
  },

  ...
]
```

### API 2

#### Path: `/players/:playerId/`
>>>>>>> 3f9cc10c364a0fb326817244fddbf8ddc4389aba

#### Method: `GET`

#### Description:

<<<<<<< HEAD
Returns a specific todo based on the todo ID
=======
Returns a specific player based on the player ID
>>>>>>> 3f9cc10c364a0fb326817244fddbf8ddc4389aba

#### Response

```
<<<<<<< HEAD
{
  id: 2,
  todo: "Learn JavaScript",
  priority: "HIGH",
  status: "DONE"
=======
{ 
  playerId: 2,
  playerName: "Joseph"
>>>>>>> 3f9cc10c364a0fb326817244fddbf8ddc4389aba
}
```

### API 3

<<<<<<< HEAD
#### Path: `/todos/`

#### Method: `POST`

#### Description:

Create a todo in the todo table,
=======
#### Path: `/players/:playerId/`

#### Method: `PUT`

#### Description:

Updates the details of a specific player based on the player ID
>>>>>>> 3f9cc10c364a0fb326817244fddbf8ddc4389aba

#### Request

```
{
<<<<<<< HEAD
  "id": 10,
  "todo": "Finalize event theme",
  "priority": "LOW",
  "status": "TO DO"
=======
  "playerName": "Raju"
>>>>>>> 3f9cc10c364a0fb326817244fddbf8ddc4389aba
}
```

#### Response

```
<<<<<<< HEAD
Todo Successfully Added
```

### API 4

#### Path: `/todos/:todoId/`

#### Method: `PUT`

#### Description:

Updates the details of a specific todo based on the todo ID

- **Scenario 1**

  - **Request**
    ```
    {
      "status": "DONE"
    }
    ```
  - **Response**

    ```
    Status Updated
    ```

- **Scenario 2**

  - **Request**
    ```
    {
      "priority": "HIGH"
    }
    ```
  - **Response**

    ```
    Priority Updated
    ```

- **Scenario 3**

  - **Request**
    ```
    {
      "todo": "Some task"
    }
    ```
  - **Response**

    ```
    Todo Updated
    ```

### API 5

#### Path: `/todos/:todoId/`

#### Method: `DELETE`

#### Description:

Deletes a todo from the todo table based on the todo ID
=======
Player Details Updated
```



### API 4

#### Path: `/matches/:matchId/`

#### Method: `GET`

#### Description:

Returns the match details of a specific match

#### Response

```
{ 
  matchId: 18,
  match: "RR vs SRH",
  year: 2011
}
```

### API 5

#### Path: `/players/:playerId/matches`

#### Method: `GET`

#### Description:

Returns a list of all the matches of a player

#### Response

```
[
  { 
    matchId: 1,
    match: "SRH vs MI",
    year: 2016
  },

  ...
]
```


### API 6

#### Path: `/matches/:matchId/players`

#### Method: `GET`

#### Description:

Returns a list of players of a specific match

#### Response

```
[
  { 
    playerId: 2,
    playerName: "Joseph"
  },
  ...
]
```



### API 7

#### Path: `/players/:playerId/playerScores`

#### Method: `GET`

#### Description:

Returns the statistics of the total score, fours, sixes of a specific player based on the player ID
>>>>>>> 3f9cc10c364a0fb326817244fddbf8ddc4389aba

#### Response

```
<<<<<<< HEAD
Todo Deleted
=======
{
  playerId: 1,
  playerName: "Ram"
  totalScore: 3453,
  totalFours: 342,
  totalSixes: 98
}

>>>>>>> 3f9cc10c364a0fb326817244fddbf8ddc4389aba
```

<br/>

Use `npm install` to install the packages.

**Export the express instance using the default export syntax.**

**Use Common JS module syntax.**
<<<<<<< HEAD
=======
=======
# NodeJs-7
Node.js Coding Practice 7 [PLAYER MATCH SCORES]
>>>>>>> 9c8b67d1e2af9a60cad4eff42d10427dbc7e5859
>>>>>>> 3f9cc10c364a0fb326817244fddbf8ddc4389aba
