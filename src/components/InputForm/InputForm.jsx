import React from 'react';
import 'antd/dist/antd.css';
import {
  Row,
  Col,
  Form,
  Input,
  Button,
  Cascader,
  DatePicker,
  Modal,
} from 'antd';
import { db } from '../../dbConfig/firebase';
import BrowserNotification from 'browser-notification-for-web-app';

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const formLayout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 10,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 4,
    span: 14,
  },
};

class InputForm extends React.Component {
  state = {
    startDate: '',
    endDate: '',
    destination: '',
    remarks: '',
  };

  onClick = () => {
    // TODO: store request with userID as key
    db.collection('USER_REQUESTS')
      .doc(Date.now().toString())
      .set(this.state)
      .then(function () {
        Modal.success({
          content: 'We have successfully received your request.',
        });
        BrowserNotification.notify({
          title: 'Success',
          message: 'We have successfully received your request.',
        });
      })
      // eslint-disable-next-line no-unused-vars
      .catch(function (error) {
        Modal.error({
          title: 'An error happened',
          content: 'Please try again later.',
        });
      });
  };

  render() {
    return (
      <div className="input-form">
        <div className="u-center-text">
          <h2 className="heading-secondary">
            Send a request to our local guiders
          </h2>
        </div>
        <Row>
          <Col span={18} push={6}>
            <Form {...formLayout} layout="horizontal">
              <Form.Item label="Date">
                <RangePicker
                  onChange={(value) => {
                    this.setState({
                      startDate: value[0].toString(),
                      endDate: value[1].toString(),
                    });
                  }}
                />
              </Form.Item>

              <Form.Item label="Destination">
                <Cascader
                  options={[
                    {
                      value: 'tokyo',
                      label: 'Tokyo',
                    },
                    {
                      value: 'kyoto',
                      label: 'Kyoto',
                    },
                    {
                      value: 'nagoya',
                      label: 'Nagoya',
                    },
                  ]}
                  onChange={(value) => {
                    this.setState({
                      destination: value.toString(),
                    });
                  }}
                />
              </Form.Item>

              <Form.Item label="Remarks">
                <TextArea
                  rows={4}
                  onChange={(e) => {
                    this.setState({
                      remarks: e.target.value,
                    });
                  }}
                />
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit" onClick={this.onClick}>
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Col>
          <Col span={6} pull={18}></Col>
        </Row>
      </div>
    );
  }
}

export default InputForm;
