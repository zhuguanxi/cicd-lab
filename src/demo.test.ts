import { describe, it, expect } from 'vitest';

describe('作業失敗案例測試', () => {
  it('故意製造 1 + 1 = 3 的錯誤', () => {
    const sum = (a: number, b: number) => a + b;

    // 這裡就是我們要製造錯誤的地方
    // 預期結果是 2，但我故意寫 3
    expect(sum(1, 1)).toBe(3);
  });
});
