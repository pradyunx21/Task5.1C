import React from 'react';
import { Header } from 'semantic-ui-react';

const PostHeader = ({ title }) => (
  <Header as="h2" attached="top" style={{ backgroundColor: 'lightgrey', padding: '10px' }}>
    {title}
  </Header>
);

export default PostHeader;
