import React from 'react';
import { Form, Input, TextArea } from 'semantic-ui-react';

const ArticleForm = () => (
  <Form style={{ padding: '10px' }}>
    {/* Title Input */}
    <Form.Field>
      <label>Title</label>
      <Input placeholder="Start your article title" />
    </Form.Field>

    {/* Article Content */}
    <Form.Field>
      <label>Content</label>
      <TextArea placeholder="Share your article content here..." style={{ minHeight: 150 }} />
    </Form.Field>

    {/* Tags Input */}
    <Form.Field>
      <label>Tags</label>
      <Input placeholder="Please add up to 3 tags to describe your article" />
    </Form.Field>
  </Form>
);

export default ArticleForm;
