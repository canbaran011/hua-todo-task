import React, { Component } from 'react'
import moment from 'moment'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import HuaTodoDataService from '../../api/huatodo/HuaTodoDataService.js'
import AuthenticationService from './AuthenticationService';

class TodoComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            name: '',
            description: '',
            status: false,
            deadline: moment(new Date()).format('YYYY-MM-DD')
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }

    componentDidMount() {
        if (this.state.id === -1) {
            return
        }

        let username = AuthenticationService.getLoggedInUserName()

        HuaTodoDataService.retrieveTodo(username, this.state.id)
            .then(response => this.setState({
                name: response.data.name,
                description: response.data.description,
                status: response.data.status,
                deadline: moment(response.data.deadline).format('YYYY-MM-DD')
            }))
    }

    validate(values) {
        let errors = {}
        if (!values.description) {
            errors.description = 'Enter a Description'
        } else if (values.description.length < 1) {
            errors.description = 'Enter atleast 1 Characters in Description'
        }

        if (!moment(values.targetDate).isValid()) {
            errors.targetDate = 'Enter a valid Target Date'
        }

        return errors

    }

    onSubmit(values) {
        let username = AuthenticationService.getLoggedInUserName()
        if (this.state.id === -1) {
            HuaTodoDataService.createTodo(username, {
                id: this.state.id,
                name: values.name,
                description: values.description,
                status: values.status,
                deadline: values.deadline
            }).then(() => this.props.history.push(`/todos`))
        }
        else {
            HuaTodoDataService.updateTodo(username, this.state.id, {
                id: this.state.id,
                name: values.name,
                description: values.description,
                status: values.status,
                deadline: values.deadline
            }).then(() => this.props.history.push(`/todos`))
        }
        console.log(values);

    }


    render() {
        let { name, description, status, date } = this.state

        return (
            <div>
                <h1>HuaToDo</h1>
                <h5>CHANGES FOR  {this.props.match.params.id}</h5>

                <div className="container">
                    <Formik
                        initialValues={{ name, description, status, date }}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div"
                                        className="alert alert-warning" />
                                    <ErrorMessage name="targetDate" component="div"
                                        className="alert alert-warning" />

                                    <fieldset className="form-group">
                                        <label>Name</label>
                                        <Field className="form-control" type="text" name="name" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Status</label>
                                        <Field className="form-control" type="checkbox" name="status" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Deadline</label>
                                        <Field className="form-control" type="date" name="deadline" />
                                    </fieldset>
                                    <button className="btn btn-success" type="submit" >Apply Update</button>




                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        )
    }
}

export default TodoComponent