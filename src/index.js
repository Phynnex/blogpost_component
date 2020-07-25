 import React from 'react';
 import ReactDOM from 'react-dom';
 import faker from 'faker';
 import CommentDetail from './CommentDetail';
 import ApprovalCard from './ApprovalCard';

const App = () => {   
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail author="sam"  timeAgo="Today at 1:30am" info="That was so cool" avatar={faker.image.avatar()}/>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Fyne" timeAgo="Today at 2:50am" info="I had a great time" avatar={faker.image.avatar()}/>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Anne" timeAgo="Today at 3:20am" info="It is so awesome" avatar={faker.image.avatar()}/>
      </ApprovalCard>
    </div>
  );
};
 
ReactDOM.render(<App />, document.querySelector
('#root'));