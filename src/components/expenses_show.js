/**
 * Created by jkret on 08/06/2017.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchExpense, deleteExpense } from '../actions';
import { Link } from 'react-router-dom';

class ExpensesShow extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchExpense(id);
    }

    onDeleteClick() {
        const { id } = this.props.match.params;
        this.props.deleteExpense(id, () => {
            this.props.history.push('/');
        })
    }

    render() {
        const { expense } = this.props;
        console.log(expense.title);

        return (
            expense ?
                <div>
                    <Link to="/" className="btn btn-primary">Back to posts</Link>
                    <button
                        className="btn btn-danger pull-xs-right"
                        onClick={this.onDeleteClick.bind(this)}
                    >
                        Delete Post
                    </button>
                    <h2>{expense.title}</h2>
                    <h3>Description: {expense.description}</h3>
                    <h3>Value: {expense.value}</h3>
                </div>
                : <div>Loading...</div>
        )
    }
}

function mapStateToProps({ expenses }, ownProps) {
    return {expense: expenses[ownProps.match.params.id]}
}

export default connect(mapStateToProps, { fetchExpense, deleteExpense })(ExpensesShow);

