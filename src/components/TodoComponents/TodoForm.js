import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            todo: ''
        }
    }
    render() {
        return (
            <div>
                <form>
                    <label htmlFor='form'></label>
                        <input 
                        name='todo'
                        id='todo'
                        type='text'
                        placeholder='Add New Todo'
                        />
                </form>
            </div>
        )
    }
}

export default TodoForm; 