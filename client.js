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
