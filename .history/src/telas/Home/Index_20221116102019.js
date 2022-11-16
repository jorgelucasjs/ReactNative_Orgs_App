import React, {Fragment} from 'react';
import Topo from './Components/Topo';
import Produtores from './Components/Produtores';

const Index = () => {
  return (
    <Fragment>
      <Produtores topo={Topo} />
    </Fragment>
  );
};

export default Index;
