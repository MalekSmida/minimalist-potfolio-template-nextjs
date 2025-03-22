import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import useShowBackToTop from './useShowBackToTop';

describe('useShowBackToTop Hook', () => {
  // Store event listeners to manually trigger them
  let scrollEventCallback: EventListener | null = null;

  // Mock addEventListener and removeEventListener
  beforeEach(() => {
    // Mock window.scrollY
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      value: 0,
    });

    // Capture the event listener when it's added
    window.addEventListener = vi.fn((event, callback) => {
      if (event === 'scroll') {
        scrollEventCallback = callback as EventListener;
      }
    });

    window.removeEventListener = vi.fn();
  });

  it('should initialize with showArrowButton as false', () => {
    const { result } = renderHook(() => useShowBackToTop());

    expect(result.current.showArrowButton).toBe(false);
  });

  it('should add scroll event listener on mount', () => {
    renderHook(() => useShowBackToTop());

    expect(window.addEventListener).toHaveBeenCalledWith('scroll', expect.any(Function));
  });

  it('should remove scroll event listener on unmount', () => {
    const { unmount } = renderHook(() => useShowBackToTop());

    unmount();

    expect(window.removeEventListener).toHaveBeenCalledWith('scroll', expect.any(Function));
  });

  it('should set showArrowButton to true when scroll position > 300', () => {
    const { result } = renderHook(() => useShowBackToTop());

    // Initially false
    expect(result.current.showArrowButton).toBe(false);

    // Set scroll position > 300
    Object.defineProperty(window, 'scrollY', { value: 301, writable: true });

    // Trigger the scroll event
    act(() => {
      if (scrollEventCallback) {
        scrollEventCallback(new Event('scroll'));
      }
    });

    // Now showArrowButton should be true
    expect(result.current.showArrowButton).toBe(true);
  });

  it('should set showArrowButton to false when scroll position <= 300', () => {
    const { result } = renderHook(() => useShowBackToTop());

    // First set to true by setting scroll position > 300
    Object.defineProperty(window, 'scrollY', { value: 301, writable: true });
    act(() => {
      if (scrollEventCallback) {
        scrollEventCallback(new Event('scroll'));
      }
    });
    expect(result.current.showArrowButton).toBe(true);

    // Then set to scroll position <= 300
    Object.defineProperty(window, 'scrollY', { value: 300, writable: true });
    act(() => {
      if (scrollEventCallback) {
        scrollEventCallback(new Event('scroll'));
      }
    });

    // Now showArrowButton should be false
    expect(result.current.showArrowButton).toBe(false);
  });

  it('should toggle showArrowButton correctly on multiple scroll events', () => {
    const { result } = renderHook(() => useShowBackToTop());

    // Test multiple transitions

    // 1. Start at 0
    expect(result.current.showArrowButton).toBe(false);

    // 2. Scroll down past threshold
    Object.defineProperty(window, 'scrollY', { value: 350, writable: true });
    act(() => {
      if (scrollEventCallback) {
        scrollEventCallback(new Event('scroll'));
      }
    });
    expect(result.current.showArrowButton).toBe(true);

    // 3. Scroll up but stay above threshold
    Object.defineProperty(window, 'scrollY', { value: 310, writable: true });
    act(() => {
      if (scrollEventCallback) {
        scrollEventCallback(new Event('scroll'));
      }
    });
    expect(result.current.showArrowButton).toBe(true);

    // 4. Scroll below threshold
    Object.defineProperty(window, 'scrollY', { value: 299, writable: true });
    act(() => {
      if (scrollEventCallback) {
        scrollEventCallback(new Event('scroll'));
      }
    });
    expect(result.current.showArrowButton).toBe(false);

    // 5. Scroll back up to exactly the threshold
    Object.defineProperty(window, 'scrollY', { value: 300, writable: true });
    act(() => {
      if (scrollEventCallback) {
        scrollEventCallback(new Event('scroll'));
      }
    });
    expect(result.current.showArrowButton).toBe(false);
  });
});
