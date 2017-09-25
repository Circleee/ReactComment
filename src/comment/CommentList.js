import React , {Component} from 'react';
import Comment from './Comment';

class CommentList extends Component{
    handDeleteComment (index)
    {
        this.props.onDeleteComment(index)
    }
    render()
    {
        return (
            <div className = 'list'>
                {
                    this.props.comments.reverse().map((item,i)=>{
                        return (
                            <Comment  comment = {item}  index = {i}  key = {i} onDeleteComment = {this.handDeleteComment.bind(this)} />
                        )
                    })
                }
            </div>
        )
    }
}

export default CommentList;