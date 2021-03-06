const validScheme = require('../schemes.mock').validOneDeviceAndSession;
const noScheme = require('../schemes.mock').noScheme;
const noAppPathScheme = require('../schemes.mock').noAppPath;
const noDeviceScheme = require('../schemes.mock').noDevice;

describe('device', () => {
  let Client;
  let Device;
  let device;

  let argparse;

  beforeEach(() => {
    jest.mock('../utils/argparse');
    argparse = require('../utils/argparse');

    jest.mock('../client/client');
    Client = require('../client/client');
    Device = require('./device');
    device = new Device(new Client(), validScheme);
  });

  it(`reloadReactNative() - should trigger reloadReactNative in websocket client`, () => {
    device.reloadReactNative();
    expect(device.client.reloadReactNative).toHaveBeenCalledTimes(1);
  });

  it(`sendUserNotification() - should trigger sendUserNotification in websocket client`, () => {
    const params = {some: "params"};
    device.sendUserNotification(params);
    expect(device.client.sendUserNotification).toHaveBeenCalledWith(params);
  });
});
