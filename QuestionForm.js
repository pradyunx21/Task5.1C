import React from 'react';
import { Form, Input, TextArea } from 'semantic-ui-react';

const QuestionForm = () => (
  <Form style={{ padding: '10px' }}>
    {/* Title Input */}
    <Form.Field>
      <label>Title</label>
      <Input placeholder="Start your question title" />
    </Form.Field>

    {/* Describe Problem */}
    <Form.Field>
      <label>Describe your problem</label>
      <TextArea placeholder="Describe your problem here..." style={{ minHeight: 100 }} />
    </Form.Field>

    {/* Tags Input */}
    <Form.Field>
      <label>Tags</label>
      <Input placeholder="Please add up to 3 tags to describe your question" />
    </Form.Field>
  </Form>
);

export default QuestionForm;
