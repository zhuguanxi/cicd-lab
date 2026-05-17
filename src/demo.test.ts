import { describe, it, expect } from 'vitest';

describe('作業失敗案例測試', () => {
  it('故意製造 1 + 1 = 3 的錯誤', () => {
    const sum = (a: number, b: number) => a + b;
    expect(sum(1, 1)).toBe(3);
  });
});
