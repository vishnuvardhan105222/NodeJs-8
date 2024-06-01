<<<<<<< HEAD
const express = require('express')
const {open} = require('sqlite')
const sqlite3 = require('sqlite3')
const path = require('path')

const databasePath = path.join(__dirname, 'todoApplication.db')

const app = express()
app.use(express.json())

let database = null
=======
const express = require('express');
const { open } = require('sqlite');
const sqlite3 = require('sqlite3');
const path = require('path');

const databasePath = path.join(__dirname, 'cricketMatchDetails.db');
const app = express();

app.use(express.json());

let database = null;
>>>>>>> 3f9cc10c364a0fb326817244fddbf8ddc4389aba

const initializeDbAndServer = async () => {
  try {
    database = await open({
      filename: databasePath,
      driver: sqlite3.Database,
<<<<<<< HEAD
    })
    app.listen(3000, () =>
      console.log('Server Running at http://localhost:3000/'),
    )
  } catch (error) {
    console.log(`DB Error: ${error.message}`)
    process.exit(1)
  }
}

initializeDbAndServer()

const hasPriorityAndStatusProperties = requestQuery => {
  return (
    requestQuery.priority !== undefined && requestQuery.status !== undefined
  )
}

const hasPriorityProperty = requestQuery => {
  return requestQuery.priority !== undefined
}

const hasStatusProperty = requestQuery => {
  return requestQuery.status !== undefined
}

app.get('/todos/', async (request, response) => {
  let data = null
  let getTodoQuery = ''
  const {search_q = '', priority, status} = request.query

  switch (true) {
    case hasPriorityAndStatusProperties(request.query):
      getTodoQuery = `
        SELECT * FROM todo
        WHERE todo LIKE '%${search_q}%'
        AND status = '${status}'
        AND priority = '${priority}';
      `
      break
    case hasPriorityProperty(request.query):
      getTodoQuery = `
        SELECT * FROM todo
        WHERE todo LIKE '%${search_q}%'
        AND priority = '${priority}';
      `
      break
    case hasStatusProperty(request.query):
      getTodoQuery = `
        SELECT * FROM todo
        WHERE todo LIKE '%${search_q}%'
        AND status = '${status}';
      `
      break
    default:
      getTodoQuery = `
        SELECT * FROM todo
        WHERE todo LIKE '%${search_q}%';
      `
  }

  data = await database.all(getTodoQuery)
  response.send(data)
})

app.get('/todos/:todoId/', async (request, response) => {
  const {todoId} = request.params
  const getTodoQuery = `
    SELECT * FROM todo WHERE id = ${todoId};
  `
  const todo = await database.get(getTodoQuery)
  response.send(todo)
})

app.post('/todos/', async (request, response) => {
  const {id, todo, priority, status} = request.body
  const postTodoQuery = `
    INSERT INTO todo (id, todo, priority, status)
    VALUES (${id}, '${todo}', '${priority}', '${status}');
  `
  await database.run(postTodoQuery)
  response.send('Todo Successfully Added')
})

app.put('/todos/:todoId/', async (request, response) => {
  const {todoId} = request.params
  const {status, priority, todo} = request.body

  let updateColumn = ''
  let updateTodoQuery = ''

  if (status !== undefined) {
    updateColumn = 'Status'
    updateTodoQuery = `
      UPDATE todo
      SET status = '${status}'
      WHERE id = ${todoId};
    `
  } else if (priority !== undefined) {
    updateColumn = 'Priority'
    updateTodoQuery = `
      UPDATE todo
      SET priority = '${priority}'
      WHERE id = ${todoId};
    `
  } else if (todo !== undefined) {
    updateColumn = 'Todo'
    updateTodoQuery = `
      UPDATE todo
      SET todo = '${todo}'
      WHERE id = ${todoId};
    `
  }

  await database.run(updateTodoQuery)
  response.send(`${updateColumn} Updated`)
})

app.delete('/todos/:todoId/', async (request, response) => {
  const {todoId} = request.params
  const deleteTodoQuery = `
    DELETE FROM todo WHERE id = ${todoId};
  `
  await database.run(deleteTodoQuery)
  response.send('Todo Deleted')
})

module.exports = app
=======
    });

    app.listen(3000, () => console.log('Server Running at http://localhost:3000/'));
  } catch (error) {
    console.log(`DB Error: ${error.message}`);
    process.exit(1);
  }
};

initializeDbAndServer();

const convertPlayerDbObjectToResponseObject = (dbObject) => {
  return {
    playerId: dbObject.player_id,
    playerName: dbObject.player_name,
  };
};

const convertMatchDetailsDbObjectToResponseObject = (dbObject) => {
  return {
    matchId: dbObject.match_id,
    match: dbObject.match,
    year: dbObject.year,
  };
};

// Test Case 1: GET request to '/players/:playerId/'
app.get('/players/:playerId/', async (request, response) => {
  const { playerId } = request.params;
  const getPlayerQuery = `
    SELECT * FROM player_details WHERE player_id = ${playerId};
  `;
  const player = await database.get(getPlayerQuery);
  response.send(convertPlayerDbObjectToResponseObject(player));
});

// Test Case 2: GET request to '/players/:playerId/playerScores/'
app.get('/players/:playerId/playerScores/', async (request, response) => {
  const { playerId } = request.params;
  const getPlayerScoresQuery = `
    SELECT 
      player_id AS playerId,
      player_name AS playerName,
      SUM(score) AS totalScore,
      SUM(fours) AS totalFours,
      SUM(sixes) AS totalSixes
    FROM player_match_score
    NATURAL JOIN player_details
    WHERE player_id = ${playerId};
  `;
  const playerScores = await database.get(getPlayerScoresQuery);
  response.send(playerScores);
});

app.get('/players/', async (request, response) => {
  const getPlayerQuery = `
    SELECT * FROM player_details;
  `;
  const playersArray = await database.all(getPlayerQuery);
  response.send(playersArray.map(eachPlayer => convertPlayerDbObjectToResponseObject(eachPlayer)));
});

app.put('/players/:playerId/', async (request, response) => {
  const { playerId } = request.params;
  const { playerName } = request.body;
  const updatePlayerQuery = `
    UPDATE player_details SET player_name = '${playerName}'
    WHERE player_id = ${playerId};
  `;
  await database.run(updatePlayerQuery);
  response.send('Player Details Updated');
});

app.get('/matches/:matchId/', async (request, response) => {
  const { matchId } = request.params;
  const matchDetailsQuery = `
    SELECT * FROM match_details WHERE match_id = ${matchId};
  `;
  const matchDetails = await database.get(matchDetailsQuery);
  response.send(convertMatchDetailsDbObjectToResponseObject(matchDetails));
});

app.get('/players/:playerId/matches/', async (request, response) => {
  const { playerId } = request.params;
  const getPlayerMatchesQuery = `
    SELECT * FROM player_match_score
    NATURAL JOIN match_details
    WHERE player_id = ${playerId};
  `;
  const playerMatches = await database.all(getPlayerMatchesQuery);
  response.send(playerMatches.map(eachMatch => convertMatchDetailsDbObjectToResponseObject(eachMatch)));
});

app.get('/matches/:matchId/players/', async (request, response) => {
  const { matchId } = request.params;
  const getMatchPlayersQuery = `
    SELECT * FROM player_match_score
    NATURAL JOIN player_details
    WHERE match_id = ${matchId};
  `;
  const playersArray = await database.all(getMatchPlayersQuery);
  response.send(playersArray.map(eachPlayer => convertPlayerDbObjectToResponseObject(eachPlayer)));
});

module.exports = app;
>>>>>>> 3f9cc10c364a0fb326817244fddbf8ddc4389aba
