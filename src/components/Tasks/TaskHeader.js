import React from 'react';
import Card from '../UI/Card';
import classes from './TaskHeader.module.css';

const TaskHeader = (props) => {
    return (
        <Card className={classes.taskheader}>
            <div>
                <h1 >Tasks</h1>
                <form>
                    <label htmlFor="task">Task</label>
                    <input id="task" type="text"></input>
                </form>
                <button>Add Task</button>
            </div>
        </Card>
    )
};

export default TaskHeader;