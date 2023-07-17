export function SOCKET(
  client: import('ws').WebSocket,
  request: import('http').IncomingMessage,
  server: import('ws').WebSocketServer,
) {

  console.log('A client connected!');

  // client.on('message', message => {
  //     client.send(message);
  // });

  client.on('message', function message(data) {
    server.clients.forEach(function each(c) {
      if (c !== client && c.readyState === WebSocket.OPEN) {
        c.send(data);
      }
    });
  });

  client.on('close', () => {
    console.log('A client disconnected!');
  });
}