import * as React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { LayoutPage } from './../../common';
import { NewStudentForm } from './NewStudentForm';
import { IStudentViewModel } from './../../../models';
import * as studentActionCreators from './../../../flux/student';

class NewStudentPageComponent extends React.Component<any, any> {
    render() {
        return (
            <LayoutPage title="New Student">
                <Row>
                    <Col md={12}>
                        <NewStudentForm onSubmit={this.onFormSubmit} />
                    </Col>
                </Row>
            </LayoutPage>
        );
    }
    
    onFormSubmit = (newStudent: IStudentViewModel) => {
        this.props.dispatch(studentActionCreators.saveStudent(newStudent));
    }
}

export const NewStudentPage = connect()(NewStudentPageComponent);
