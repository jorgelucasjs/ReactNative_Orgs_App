import React, {Fragment} from 'react';
import Topo from './Components/Topo';
import Produtores from './Components/Produtores';

const Index = () => {
  return (
    <Fragment>
      <Topo />
      <Produtores top={Topo} />
    </Fragment>
  );
};

export default Index;
