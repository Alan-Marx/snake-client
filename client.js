const net = require('net');

const connect = () => {
  const connection = net.createConnection({
      host: '192.168.88.177',
      port: 50541
    });  
  connection.setEncoding('utf8');
  
  connection.on('data', (data) => {
    console.log(data);
  });

  connection.on('connect', () => {
    console.log('The connection has been successfully established!');
    connection.write('Name: ASM');
  });
  
  return connection;
};

module.exports = {
  connect
  };

// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)