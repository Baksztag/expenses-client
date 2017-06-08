/**
 * Created by jkret on 08/06/2017.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchExpenses } from '../actions';
import _ from 'lodash';

class ExpensesIndex extends Component {
    componentDidMount() {
        this.props.fetchExpenses();
    }

    renderExpenses() {
        return _.map(this.props.expenses, expense => {
            return (
                <li className="list-group-item" key={expense._id}>
                    <Link to={`/expenses/${expense._id}`}>{expense.title}</Link>
                </li>
            )
        })
    }

    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link to="/expenses/new" className="btn btn-primary">
                        Add expense
                    </Link>
                </div>
                <ul className="list-group">
                    {this.renderExpenses()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state.expenses);
    return {expenses: state.expenses};
}

export default connect(mapStateToProps, { fetchExpenses })(ExpensesIndex);