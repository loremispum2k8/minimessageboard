const {Client} = require('pg')

const SQL = `
CREATE TABLE IF NOT EXISTS usernames (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 )
);

INSERT INTO usernames (username) 
VALUES
  ('Bryan'),
  ('Odin'),
  ('Damon');
`;

async function main(){
    const client = new Client({
        connectionString: "postgresql://postgres:1234@localhost:5432/top_users"
    })
    await client.connect()
    await client.query(SQL)
    await client.end()
}

main()