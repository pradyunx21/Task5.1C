import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const PostTypeSelector = ({ setPostType }) => {
  const postOptions = [
    { key: 'question', text: 'Question', value: 'question' },
    { key: 'article', text: 'Article', value: 'article' }
  ];

  return (
    <div style={{ padding: '10px' }}>
      <h4>Select Post Type:</h4>
      <Dropdown
        placeholder="Select Post Type"
        fluid
        selection
        options={postOptions}
        onChange={(e, { value }) => setPostType(value)}
      />
    </div>
  );
};

export default PostTypeSelector;
