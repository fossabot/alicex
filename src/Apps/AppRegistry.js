/*        ExampleMaps Export Section */
export { default as CheezeWizards } from './CheezeWizards';
export { default as Fork } from './Fork';
export { default as Foam } from './Foam';
export { default as Test } from './Example';
export { default as Mintbase } from './Mintbase';
export { default as DAOstack } from './DAOstack';
export { default as E2E } from './E2E';
export { default as LocalEthereum } from './LocalEthereum';
export { default as Map } from './Map';

export const AppRegistry = [
  // // Your ExampleMaps ( uncomment the code below this line & delete this entire line of code )
  // {
  //   appName: 'Your App\'s Name',
  //   // can be either written or a hexadecimal or rgba
  //   backgroundColor: '#8e00ff' || 'blue' || 'rgba(0,0,0,0.5)',
  //   homeRoute: 'YourAppRoute',
  //   // your apps icon has to contain the require function to be rendered -> require('../Assets/your_app_logo.png')
  //   icon: require('../Assets/your_app_logo.png')
  // },
  {
    appName: 'Fork',
    backgroundColor: '#8e00ff',
    homeRoute: 'Fork',
    icon: require('../AliceAssets/fork-logo.png')
  },
  {
    appName: '#BUIDL',
    backgroundColor: '#ffffff',
    homeRoute: 'Test',
    icon: require('./Example/Assets/buidler.png')
  },
  {
    appName: 'DAOstack',
    backgroundColor: '#ffffff',
    homeRoute: 'DAOstack',
    icon: require('./DAOstack/Assets/daostack.png')
  },
  {
    appName: 'Foam',
    backgroundColor: '#ffffff',
    homeRoute: 'Foam',
    icon: require('../AliceAssets/foam.png')
  },
  {
    appName: 'E2E',
    backgroundColor: '#000',
    homeRoute: 'E2E',
    icon: require('./E2E/Assets/e2e-logo.png')
  },
  {
    appName: 'Cheeze Wizards',
    backgroundColor: '#fdef5d',
    homeRoute: 'CheezeWizards',
    icon: require('./CheezeWizards/Assets/logo.png')
  },
  {
    appName: 'localethereum',
    backgroundColor: '#dbe0ff',
    homeRoute: 'Map',
    icon: require('./LocalEthereum/Assets/localethereum.png')
  },
];
