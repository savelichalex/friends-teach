var modules={'react-native': require('react-native'), 'react': require('react')};modules['react-native-linear-gradient']=require('react-native-linear-gradient');modules['react-native-controllers']=require('react-native-controllers');modules['react-native-navigation']=require('react-native-navigation');modules['react-native-blur']=require('react-native-blur');modules['./images/back-icon.png']=require('./images/back-icon.png');modules['./images/cover.png']=require('./images/cover.png');modules['./images/menu-icon.png']=require('./images/menu-icon.png');modules['./images/search-icon.png']=require('./images/search-icon.png');
require('figwheel-bridge').withModules(modules).start('TeachByFriends','ios','localhost');