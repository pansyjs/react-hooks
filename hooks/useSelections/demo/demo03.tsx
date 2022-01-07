import React, { useMemo, useState } from 'react';
import { Checkbox, Col, Row, Space, Pagination } from 'antd';
import { useSelections } from '@pansy/react-hooks';

const list = [
  { label: 'item01', value: 1 },
  { label: 'item02', value: 2 },
  { label: 'item03', value: 3 },
  { label: 'item04', value: 4 },
  { label: 'item05', value: 5 },
  { label: 'item06', value: 6 },
  { label: 'item07', value: 7 },
  { label: 'item08', value: 8 },
  { label: 'item09', value: 9 },
  { label: 'item10', value: 10 },
  { label: 'item11', value: 11 },
  { label: 'item12', value: 12 },
  { label: 'item13', value: 13 },
  { label: 'item14', value: 14 },
  { label: 'item15', value: 15 },
  { label: 'item16', value: 16 },
];

export default () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(8);

  const dataSource = useMemo(() => {
    return list
      .slice((currentPage - 1) * pageSize, currentPage * pageSize);
  }, [currentPage, pageSize]);

  const items = dataSource.map(item => item.value)

  const {
    selected,
    allSelected,
    partiallySelected,
    isSelected,
    toggle,
    toggleAll,
  } = useSelections<number>(items, [1]);

  return (
    <div>
      <div style={{ borderBottom: '1px solid #E9E9E9', padding: '10px 0' }}>
        <Space>
          <Checkbox checked={allSelected} onClick={toggleAll} indeterminate={partiallySelected}>
            全选
          </Checkbox>

          <span>已选中 {selected.length} 项</span>
        </Space>
      </div>

      <Row style={{ padding: '10px 0' }}>
        {dataSource.map((o, index) => (
          <Col span={12} key={index}>
            <Checkbox checked={isSelected(o.value)} onClick={() => toggle(o.value)}>
              {o.label}
            </Checkbox>
          </Col>
        ))}
      </Row>

      <div style={{ paddingTop: 16 }}>
        <Pagination
          size="small"
          style={{
            float: 'right'
          }}
          total={list.length}
          onChange={(page) => {
            setCurrentPage(page);
          }}
          showTotal={(tptal) => {
            return `共 ${tptal} 项`;
          }}
        />
      </div>
    </div>
  );
}
