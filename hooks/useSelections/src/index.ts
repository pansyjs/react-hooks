import { useMemo, useState } from 'react';
import { useMemoizedFn } from '@pansy/use-memoized-fn';

export type ItemVal = string | number;

/**
 * 常见联动 Checkbox 逻辑封装
 * @param items 所有可选项
 * @param defaultSelected 默认选中的项
 * @returns
 */
export function useSelections<ItemVal>(
  items: ItemVal[],
  defaultSelected: ItemVal[] = []
) {
  const [selected, setSelected] = useState<ItemVal[]>(defaultSelected);

  const selectedSet = useMemo(() => new Set(selected), [selected]);

  const isSelected = (item: ItemVal) => selectedSet.has(item);

  const select = (item: ItemVal) => {
    selectedSet.add(item);
    return setSelected(Array.from(selectedSet));
  };

  const unSelect = (item: ItemVal) => {
    selectedSet.delete(item);
    return setSelected(Array.from(selectedSet));
  };

  const toggle = (item: ItemVal) => {
    if (isSelected(item)) {
      unSelect(item);
    } else {
      select(item);
    }
  };

  const selectAll = () => {
    items.forEach((o) => {
      selectedSet.add(o);
    });
    setSelected(Array.from(selectedSet));
  };

  const unSelectAll = () => {
    items.forEach((o) => {
      selectedSet.delete(o);
    });
    setSelected(Array.from(selectedSet));
  };

  const noneSelected = useMemo(() => items.every((o) => !selectedSet.has(o)), [items, selectedSet]);

  const allSelected = useMemo(
    () => items.every((o) => selectedSet.has(o)) && !noneSelected,
    [items, selectedSet, noneSelected],
  );

  const partiallySelected = useMemo(
    () => !noneSelected && !allSelected,
    [noneSelected, allSelected],
  );

  const toggleAll = () => (allSelected ? unSelectAll() : selectAll());

  return {
    selected,
    noneSelected,
    allSelected,
    partiallySelected,
    setSelected,
    isSelected,
    select: useMemoizedFn(select),
    unSelect: useMemoizedFn(unSelect),
    toggle: useMemoizedFn(toggle),
    selectAll: useMemoizedFn(selectAll),
    unSelectAll: useMemoizedFn(unSelectAll),
    toggleAll: useMemoizedFn(toggleAll),
  } as const;
}
