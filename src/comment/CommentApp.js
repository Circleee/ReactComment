import React,{Component} from 'react' ;
import CommentInput from './CommentInput.js'
import CommentList from './CommentList.js'
// import PropTypes from 'prop-types'

class ComponentApp extends Component{
    constructor ()
    {
        super()
        this.state = {
            comments : [
            ]
        }
    }
    /* 提交评论内容 */
    hanndleSubmitComment(comment)
    {
        this.state.comments.push(comment)
        this.setState({
           comments : this.state.comments
       })
    }
    /*删除评论 */
    handleDeleteComment (index) {
        var arr = this.state.comments
        this.state.comments.splice(index,1)
        this.setState (
            {
                comments : arr
            }
        )
    }

    render()
    {
        return (
            <div>
                <CommentInput onSubmit = {this.hanndleSubmitComment.bind(this)}/>
                <CommentList comments = {this.state.comments} onDeleteComment = {this.handleDeleteComment.bind(this)}/>
            </div>
        )
    }
}

export default ComponentApp;