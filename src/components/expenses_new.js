/**
 * Created by jkret on 08/06/2017.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { createExpense } from '../actions';

class ExpensesNew extends Component {
    renderField(field) {
        const { meta: { touched } } = field;
        return (
            <div>
                <label>{field.label}</label>
                <input type="text" {...field.input} />
                <div className="text-help">
                    {touched ? field.meta.error : ""}
                </div>
            </div>
        )
    }

    onSubmit(values) {
        this.props.createExpense(values, () => {
            this.props.history.push("/");
        });
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Title"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    label="Description"
                    name="description"
                    component={this.renderField}
                />
                <Field
                    label="Value"
                    name="value"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.title = "Enter a title!";
    }
    if (!values.description) {
        errors.description = "Enter description";
    }
    if (!values.value) {
        errors.value = "Enter value";
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'ExpensesNewForm'
})(
    connect(null, { createExpense })(ExpensesNew)
);