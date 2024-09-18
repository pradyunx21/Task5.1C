import React from 'react';
import { Form, Input, TextArea } from 'semantic-ui-react';

const PostForm = () => (
  <Form style={{ padding: '10px' }}>
    {/* Title Input */}
    <Form.Field>
      <label>Title</label>
      <Input placeholder="Start your question or article title" />
    </Form.Field>

    {/* Description */}
    <Form.Field>
      <label>Describe your problem or content</label>
      <TextArea placeholder="Describe your problem or content here..." style={{ minHeight: 100 }} />
    </Form.Field>

    {/* Tags */}
    <Form.Field>
      <label>Tags</label>
      <Input placeholder="Please add up to 3 tags to describe your question" />
    </Form.Field>
  </Form>
);

export default PostForm;
