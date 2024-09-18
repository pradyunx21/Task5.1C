import React, { useState } from 'react';
import PostHeader from './PostHeader';
import PostTypeSelector from './PostTypeSelector';
import PostButton from './PostButton';
import QuestionForm from './QuestionForm';
import ArticleForm from './ArticleForm';

const PostPage = () => {
  const [postType, setPostType] = useState('');

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      {/* Header */}
      <PostHeader title="New Post" />
      
      {/* Post Type Selector */}
      <PostTypeSelector postType={postType} setPostType={setPostType} />
      
      {/* Conditionally Render QuestionForm or ArticleForm */}
      {postType === 'question' && (
        <div>
          <PostHeader title="What do you want to ask?" />
          <p style={{ padding: '10px' }}>This section is designed based on the type of post.</p>
          <QuestionForm />
        </div>
      )}
      
      {postType === 'article' && (
        <div>
          <PostHeader title="What do you want to share?" />
          <p style={{ padding: '10px' }}>This section is designed based on the type of post.</p>
          <ArticleForm />
        </div>
      )}

      {/* Post Button */}
      <PostButton />
    </div>
  );
};

export default PostPage;
