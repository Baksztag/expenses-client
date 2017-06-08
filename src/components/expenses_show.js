/**
 * Created by jkret on 08/06/2017.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchExpense } from '../actions';
import { Link } from 'react-router-dom';

class ExpensesShow extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchExpense(id);
    }

    render() {
        const { expense } = this.props;
        console.log(expense.title);

        return (
            expense ?
                <div>
                    <Link to="/" className="btn btn-primary">Back to posts</Link>
                    <h3>{expense.title}</h3>
                    <h6>Description: {expense.description}</h6>
                    <p>Value: {expense.value}</p>
                </div>
                : <div>Loading...</div>
        )
    }
}

function mapStateToProps({ expenses }, ownProps) {
    return {expense: expenses[ownProps.match.params.id]}
}

export default connect(mapStateToProps, { fetchExpense })(ExpensesShow);

