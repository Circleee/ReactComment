import React , {Component} from 'react';

class ComponentInput extends Component{
    /* 初始化数据 */
    constructor()
    {
        super();
        this.state = {
            username :  '',
            content : '',
            username_desc:'请填写用户名称',
            content_desc :'请填写留言内容'
        }
    }
    /* Dom挂载完成以后 */
    componentDidMount () {
        this.textarea.focus()
    }
    /* 修改用户名事件 */
    changeName(event)
    {
        this.setState({
            username :  event.target.value
        })
    }
    /* 修改评论内容事件 */
    changeContent(event)
    {
        this.setState({
            content :  event.target.value
        })
    }
    /* 提交评论内容 */
    submit(event)
    {
        // console.log(this.props.onSubmit);
        /* 判断props是否传递了onSubmit属性 */
        if(this.props.onSubmit)
        {
            /* 将内容传入变量 */
            const {username,content} = this.state;
            if(username === "" )
            {
                alert(this.state.username_desc)
                return ;
            }
            if(content === "")
            {
                alert(this.state.content_desc)
                return ;
            }
            const createTime  = + new Date();
            /* 触发父组件onSubmit方法 */
            this.props.onSubmit({username,content,createTime})
            /* 将评论内容清除 */
            this.setState({username : '' ,content:''})
        }
    }
    render()
    {
        return (
            <div>
                {/* <ComponentInput /> */}
                <div className='comment-input'>
                    <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input placeholder={this.state.username_desc} value = {this.state.username} onChange = {this.changeName.bind(this)} />
                    </div>
                    </div>
                    <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea  placeholder={this.state.content_desc} ref = {(textarea) => {this.textarea = textarea}} value = {this.state.content} onChange = {this.changeContent.bind(this)}/>
                    </div>
                    </div>
                    <div className='comment-field-button' onClick = {this.submit.bind(this)}>
                    <button>
                        发布
                    </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ComponentInput;