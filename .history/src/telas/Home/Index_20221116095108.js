import {View} from 'react-native';
import React, {Fragment} from 'react';
import Topo from './Components/Topo';
import Produtores from './Components/Produtores';

const Index = () => {
  return (
    <Fragment>
      <Topo />
      <Produtores />
    </Fragment>
  );
};

export default Index;
