$(document).ready(function() {
  var DoorStatus;
  var port = 'com3';
  var baudRate = 9600;
  var serialPortName = 'COM3'; // Replace with the actual serial port name

  // Function to send data to Arduino
  function sendToArduino(data) {
    if (port && port.writable) {
      port.write(data);
      console.log('Sent data to Arduino:', data);
    } else {
      console.error('Serial port is not open or writable.');
    }
  }

  // Function to update the door status display
  function updateDoorStatusDisplay() {
    if (DoorStatus === 'open') {
      document.getElementById('unact').style.display = 'none';
      document.getElementById('act').style.display = 'block';
      if (port && port.writable) {
        sendToArduino('1'); // Send 1 to Arduino when the door is open
      }
    } else {
      document.getElementById('unact').style.display = 'block';
      document.getElementById('act').style.display = 'none';
      if (port && port.writable) {
        sendToArduino('0'); // Send 0 to Arduino when the door is closed
      }
    }
  }

  // Request access to the serial port
  async function requestSerialPort() {
    try {
      port = new serialport(serialPortName, { baudRate });
      console.log('Serial port opened:', port);

      // Listen for data from Arduino
      port.on('data', function(data) {
        console.log('Received data from Arduino:', data.toString());
        // Handle received data if needed
      });

      updateDoorStatusDisplay();
    } catch (error) {
      console.error('Error opening serial port:', error);
    }
  }

  // Handle click on Connect button
  $('#connect-btn').click(function() {
    requestSerialPort();
  });

  // Handle click on toggle button
  $('.toggle-btn').click(function() {
    if (DoorStatus === 'open') {
      DoorStatus = 'closed';
      if (port && port.writable) {
        sendToArduino('0'); // Send 0 to Arduino when the door is manually closed
      }
    } else {
      DoorStatus = 'open';
      if (port && port.writable) {
        sendToArduino('1'); // Send 1 to Arduino when the door is manually opened
        print('data sent2')
      }
    }
    updateDoorStatusDisplay();
  });
});
