import React,{Component} from 'react'

class Comment extends Component{
    // 删除评论函数
    deleteComment()
    {
        this.props.onDeleteComment(this.props.index)
    }

    constructor () {
        super()
        this.state = { timeString: '' }
      }
    _updateTimeString () {
        const comment = this.props.comment
        const duration = (+Date.now() - comment.createTime) / 1000
        this.setState({
          timeString: duration > 60
            ? `${Math.round(duration / 60)} 分钟前`
            : `${Math.round(Math.max(duration, 1))} 秒前`
        })
    }
    componentWillMount () {
        this._updateTimeString()
        this._timer = setInterval(
          this._updateTimeString.bind(this),
          5000
        )
    }

    render()
    {
        return (
            <div  className= 'comment'>
                <div className = 'comment-user'>
                    <p><span>{this.props.comment.username}</span></p>
                </div>
                <p>{this.props.comment.content}</p>
                <span onClick = {this.deleteComment.bind(this)} className="comment-delete">删除</span>
                <span className="comment-createdtime">{this.state.timeString}分钟前</span>
            </div>

        )
    }
}

export default Comment;