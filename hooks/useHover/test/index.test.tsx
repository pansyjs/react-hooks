import React from 'react';
import { render, fireEvent, renderHook, act } from '@testing-library/react';
import { useHover }  from '../src/index';

describe('useHover', () => {
  it('should be defined', () => {
    expect(useHover).toBeDefined();
  });

  it('should work', () => {
    const { getByText } = render(<button>Hover</button>);
    let trigger = 0;
    const { result } = renderHook(() =>
      useHover(getByText('Hover'), {
        onEnter: () => {
          trigger++;
        },
        onLeave: () => {
          trigger++;
        },
      }),
    );

    expect(result.current).toBe(false);

    act(() => {
      fireEvent.mouseOver(getByText('Hover'), () => {
        expect(result.current).toBe(true);
        expect(trigger).toBe(1);
      });
    });

    act(() => {
      fireEvent.mouseLeave(getByText('Hover'), () => {
        expect(result.current).toBe(false);
        expect(trigger).toBe(2);
      });
    });
  });
});
