import React, { useState } from 'react';
import Card from '@ant-design/pro-card';
import { Button, Space, Form, Input, Row, Col, Divider, Select } from 'antd';
import { useMqtt, useBoolean } from '@pansy/react-hooks';
import type { Options } from '@pansy/use-mqtt';

const spans = {
  xs: 12,
  sm: 12,
  md: 12,
  lg: 8,
  xl: 8,
  xxl: 6,
}

const defaultTopicList = ['testtopic/react', 'topic/browser', 'topic/mqttx'].map(item => ({ value: item, label: item, isSubscribe: false }));

export default () => {
  const [form] = Form.useForm();
  const [subscribeForm] = Form.useForm();
  const [publishForm] = Form.useForm();

  const [url, setUrl] = useState<string>('');
  const [topicList, setTopicList] = useState(defaultTopicList);
  const [subscribeLoading, subscribeLoadingAction] = useBoolean(false);
  const [unsubscribeLoading, unsubscribeLoadingAction] = useBoolean(false);
  const [isSubscribe, isSubscribeAction] = useBoolean(false);
  const [opts, setOpts] = useState<Options>({
    manual: true,
    onMessage: (topic, payload) => {
      console.log(topic);
      console.log(payload.toString());
    }
  });

  const {
    mqttIns,
    messageMap,
    publish,
    connect,
    subscribe,
    unsubscribe,
    disconnect,
  } = useMqtt(url, opts);

  const handlerConnect = () => {
    form.validateFields()
      .then((values) => {
        const { host, clientId, port, username, password } = values;

        Promise.resolve()
          .then(() => {
            setUrl(`ws://${host}${port ? ':' + port : ''}/mqtt`);

            setOpts((prev) => ({
              ...prev,
              clientId,
              username,
              password
            }))
          })
          .then(() => {
            connect();
          })
      })
  }

  const handlerDisconnect = () => {
    disconnect();
  }

  const handlerSubscribe = () => {
    subscribeForm.validateFields()
      .then((values) => {
        subscribeLoadingAction.setTrue();
        subscribe(values.topic)
          .then(() => {
            setTopicList((prev) => prev.map(item => {
              if (item.value === values.topic) {
                item.isSubscribe = true;
              }

              return item;
            }))
            isSubscribeAction.setTrue();
          })
          .finally(() => {
            subscribeLoadingAction.setFalse();
          });
      });
  }

  const handlerUnSubscribe = () => {
    subscribeForm.validateFields()
      .then((values) => {
        unsubscribeLoadingAction.setTrue();
        unsubscribe(values.topic)
          .then(() => {
            setTopicList((prev) => prev.map(item => {
              if (item.value === values.topic) {
                item.isSubscribe = false;
              }

              return item;
            }))
            isSubscribeAction.setTrue();
          })
          .finally(() => {
            unsubscribeLoadingAction.setFalse();
          });
      });
  }

  const handlePublish = () => {
    publishForm.validateFields().then((values) => {
      const { topic, payload } = values;

      publish(topic, payload);
    })
  }

  return (
    <>
      <Card
        bodyStyle={{ padding: '16px 0 0' }}
        headStyle={{ padding: 0 }}
        title="连接"
        extra={
          <Space>
            <Button type="primary" onClick={handlerConnect} disabled={mqttIns?.connected}>连接</Button>
            {isSubscribe && (
              <Button onClick={handlerDisconnect}>断开</Button>
            )}
          </Space>
        }
      >
        <Form form={form} layout="vertical">
          <Row gutter={16}>
            <Col {...spans}>
              <Form.Item
                name="host"
                label="Host"
                initialValue="broker.emqx.io"
                rules={[
                  { required: true, message: '此字段不能为空' }
                ]}
              >
                <Input placeholder="请输入" />
              </Form.Item>
            </Col>
            <Col {...spans}>
              <Form.Item name="port" label="Port" initialValue="8083">
                <Input placeholder="请输入" />
              </Form.Item>
            </Col>
            <Col {...spans}>
              <Form.Item name="clientId" label="Client ID" initialValue={`mqtt_${Math.random().toString(16).slice(2, 8)}`}>
                <Input placeholder="请输入" />
              </Form.Item>
            </Col>
            <Col {...spans}>
              <Form.Item name="username" label="Username">
                <Input placeholder="请输入" />
              </Form.Item>
            </Col>
            <Col {...spans}>
              <Form.Item name="password" label="Password">
                <Input placeholder="请输入" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>

      <Divider />
      <Card
        bodyStyle={{ padding: '16px 0 0' }}
        headStyle={{ padding: 0 }}
        title="订阅"
        extra={
          <Space>
            <Button
              type="primary"
              onClick={handlerSubscribe}
              loading={subscribeLoading}
              disabled={
                !mqttIns?.connected || topicList.filter((topic) => topic.isSubscribe).length === topicList.length
              }
            >
              订阅
            </Button>
            {topicList.filter((topic) => topic.isSubscribe).length > 0 && (
              <Button loading={unsubscribeLoading} onClick={handlerUnSubscribe}>取消订阅</Button>
            )}
          </Space>
        }
      >
        <Form form={subscribeForm} layout="vertical">
          <Row gutter={16}>
            <Col {...spans}>
              <Form.Item
                name="topic"
                label="Topic"
                rules={[
                  { required: true, message: '此字段不能为空' }
                ]}
              >
                <Select
                  options={topicList}
                  placeholder="请选择"
                />
              </Form.Item>
            </Col>

          </Row>
        </Form>
      </Card>

      <Divider />
      <Card
        bodyStyle={{ padding: '16px 0 0' }}
        headStyle={{ padding: 0 }}
        title="推送消息"
        extra={
          <Button type="primary" onClick={handlePublish} disabled={!mqttIns?.connected}>推送</Button>
        }
      >
        <Form form={publishForm} layout="vertical">
          <Row gutter={16}>
            <Col {...spans}>
              <Form.Item
                name="topic"
                label="Topic"
                rules={[
                  { required: true, message: '此字段不能为空' }
                ]}
              >
                <Select
                  options={topicList.map(item => ({ ...item, disabled: !item.isSubscribe }))}
                  placeholder="请选择"
                />
              </Form.Item>
            </Col>
            <Col {...spans}>
              <Form.Item
                label="Payload"
                name="payload"
              >
                <Input placeholder="请输入" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>

      <Divider />
      <Card
        bodyStyle={{ padding: '16px 0 0' }}
        headStyle={{ padding: 0 }}
        title="消息"
      >
        {JSON.stringify(messageMap)}
      </Card>
    </>
  )
}

