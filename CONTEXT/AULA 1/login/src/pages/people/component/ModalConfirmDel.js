import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, Modal, Space } from 'antd';
import React from 'react';

const { confirm } = Modal;

const showConfirm = (values) => {
    confirm({
        title: 'Do you Want to delete these items?',
        icon: <ExclamationCircleOutlined />,
        content: 'Some descriptions',

        onOk(values) {
            console.log('OK');
        },

        onCancel() {
            console.log('Cancel');
        },
    });
};
function ModalConfirmDel() {
    return (
        <Space wrap>
            <Button onClick={showConfirm}>Confirm</Button>
        </Space>
    )

}
export default ModalConfirmDel