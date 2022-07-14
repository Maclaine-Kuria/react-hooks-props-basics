import React from "react";

// BlogPost.js
// PARENT COMPONENT
function BlogPost() {
  return (
    <div>
      {/* BlogContent is being returned from BlogPost */}
      {/* Therefore, BlogContent is a child of BlogPost */}
      <BlogContent articleText="Dear Reader: Bjarne Stroustrup has the perfect lecture oration." />
    </div>
  );
}

// BlogContent.js
// CHILD COMPONENT
function BlogContent(props) {
  return <div>{props.articleText}</div>;
}
 
export default BlogContent;
