import { Checkbox, Col, Row } from 'antd';
import React, { useMemo, useState } from 'react';
import { useSelections } from '@pansy/react-hooks';

const data1 = [
  { label: 'item1', value: 1 },
  { label: 'item2', value: 2 },
  { label: 'item3', value: 3 },
  { label: 'item4', value: 4 },
  { label: 'item5', value: 5 },
  { label: 'item6', value: 6 },
  { label: 'item7', value: 7 },
  { label: 'item8', value: 8 },
];

const data2 = [
  { label: 'item2', value: 2 },
  { label: 'item4', value: 4 },
  { label: 'item6', value: 6 },
  { label: 'item8', value: 8 },
];

export default () => {
  const [hideOdd, setHideOdd] = useState(false);

  const list = useMemo(() => {
    if (hideOdd) {
      return data2;
    }
    return data1;
  }, [hideOdd]);

  const items = useMemo(() => {
    return list.map(item => item.value);
  }, [list]);

  const { selected, allSelected, isSelected, toggle, toggleAll, partiallySelected } = useSelections(
    items,
    [1],
  );

  return (
    <div>
      <div>Selected : {selected.join(',')}</div>
      <div style={{ borderBottom: '1px solid #E9E9E9', padding: '10px 0' }}>
        <Checkbox checked={allSelected} onClick={toggleAll} indeterminate={partiallySelected}>
          Check all
        </Checkbox>
        <Checkbox checked={hideOdd} onClick={() => setHideOdd((v) => !v)}>
          Hide Odd
        </Checkbox>
      </div>
      <Row style={{ padding: '10px 0' }}>
        {list.map((o, index) => (
          <Col span={12} key={index}>
            <Checkbox checked={isSelected(o.value)} onClick={() => toggle(o.value)}>
              {o.label}
            </Checkbox>
          </Col>
        ))}
      </Row>
    </div>
  );
}
