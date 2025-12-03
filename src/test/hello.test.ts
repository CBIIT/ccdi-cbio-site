import { describe, it, expect } from 'vitest';

describe('Hello World Test', () => {
  it('should return hello world', () => {
    const greeting = 'Hello World';
    expect(greeting).toBe('Hello World');
  });

  it('should add two numbers correctly', () => {
    const sum = 2 + 2;
    expect(sum).toBe(4);
  });

  it('should check if array contains value', () => {
    const fruits = ['apple', 'banana', 'orange'];
    expect(fruits).toContain('banana');
  });
});
