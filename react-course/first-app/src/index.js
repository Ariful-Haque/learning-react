import React from 'react';
import ReactDom from 'react-dom';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments" >
            <ApprovalCard>
                <h4>Warning!</h4>
                Are you sure you want to do this?
            </ApprovalCard>

            <ApprovalCard> 
            <CommentDetail 
            author="Sam" 
            timeAgo="Today at 4:00PM" 
            commentText="Nice post!" 
            imgSrc={faker.image.avatar()}
            />
            </ApprovalCard>

            <ApprovalCard>
            <CommentDetail 
            author="Jane" 
            timeAgo="Today at 6:00PM" 
            commentText="Very helpful!" 
            imgSrc={faker.image.avatar()}
            /> 
            </ApprovalCard> 

            <ApprovalCard>
            <CommentDetail 
            author="Max" 
            timeAgo="Yesterday at 4:00PM" 
            commentText="What a nice article!" 
            imgSrc={faker.image.avatar()}
            />
            </ApprovalCard>

        </div>
    )
}

ReactDom.render(<App />, document.querySelector('#root'))

