import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import useShowNavHeader from './useShowNavHeader';

describe('useShowNavHeader Hook', () => {
  // Store event listeners to manually trigger them
  let scrollEventCallback: EventListener | null = null;

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

  it('should initialize with showNavHeader as true', () => {
    const { result } = renderHook(() => useShowNavHeader());

    expect(result.current.showNavHeader).toBe(true);
  });

  it('should add scroll event listener on mount', () => {
    renderHook(() => useShowNavHeader());

    expect(window.addEventListener).toHaveBeenCalledWith('scroll', expect.any(Function));
  });

  it('should remove scroll event listener on unmount', () => {
    const { unmount } = renderHook(() => useShowNavHeader());

    unmount();

    expect(window.removeEventListener).toHaveBeenCalledWith('scroll', expect.any(Function));
  });

  it('should keep showNavHeader true when at top of page (scrollY === 0)', () => {
    const { result } = renderHook(() => useShowNavHeader());

    // Simulate scroll event at top of page
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true });
    act(() => {
      if (scrollEventCallback) {
        scrollEventCallback(new Event('scroll'));
      }
    });

    expect(result.current.showNavHeader).toBe(true);
  });

  it('should set showNavHeader to false when scrolling down', () => {
    const { result } = renderHook(() => useShowNavHeader());

    // First scroll event to set lastScrollY
    Object.defineProperty(window, 'scrollY', { value: 100, writable: true });
    act(() => {
      if (scrollEventCallback) {
        scrollEventCallback(new Event('scroll'));
      }
    });

    // Second scroll event with increased scrollY (scrolling down)
    Object.defineProperty(window, 'scrollY', { value: 200, writable: true });
    act(() => {
      if (scrollEventCallback) {
        scrollEventCallback(new Event('scroll'));
      }
    });

    expect(result.current.showNavHeader).toBe(false);
  });

  it('should set showNavHeader to true when scrolling up', () => {
    const { result } = renderHook(() => useShowNavHeader());

    // First scroll event to set lastScrollY
    Object.defineProperty(window, 'scrollY', { value: 200, writable: true });
    act(() => {
      if (scrollEventCallback) {
        scrollEventCallback(new Event('scroll'));
      }
    });

    // Second scroll event with decreased scrollY (scrolling up)
    Object.defineProperty(window, 'scrollY', { value: 100, writable: true });
    act(() => {
      if (scrollEventCallback) {
        scrollEventCallback(new Event('scroll'));
      }
    });

    expect(result.current.showNavHeader).toBe(true);
  });

  it('should track multiple scroll direction changes correctly', () => {
    const { result } = renderHook(() => useShowNavHeader());

    // Initial state
    expect(result.current.showNavHeader).toBe(true);

    // 1. Scroll down (0 to 100)
    Object.defineProperty(window, 'scrollY', { value: 100, writable: true });
    act(() => {
      if (scrollEventCallback) {
        scrollEventCallback(new Event('scroll'));
      }
    });
    expect(result.current.showNavHeader).toBe(false);

    // 2. Continue scrolling down (100 to 200)
    Object.defineProperty(window, 'scrollY', { value: 200, writable: true });
    act(() => {
      if (scrollEventCallback) {
        scrollEventCallback(new Event('scroll'));
      }
    });
    expect(result.current.showNavHeader).toBe(false);

    // 3. Start scrolling up (200 to 150)
    Object.defineProperty(window, 'scrollY', { value: 150, writable: true });
    act(() => {
      if (scrollEventCallback) {
        scrollEventCallback(new Event('scroll'));
      }
    });
    expect(result.current.showNavHeader).toBe(true);

    // 4. Continue scrolling up (150 to 50)
    Object.defineProperty(window, 'scrollY', { value: 50, writable: true });
    act(() => {
      if (scrollEventCallback) {
        scrollEventCallback(new Event('scroll'));
      }
    });
    expect(result.current.showNavHeader).toBe(true);

    // 5. Scroll back down (50 to 80)
    Object.defineProperty(window, 'scrollY', { value: 80, writable: true });
    act(() => {
      if (scrollEventCallback) {
        scrollEventCallback(new Event('scroll'));
      }
    });
    expect(result.current.showNavHeader).toBe(false);

    // 6. Scroll all the way to top (80 to 0)
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true });
    act(() => {
      if (scrollEventCallback) {
        scrollEventCallback(new Event('scroll'));
      }
    });
    expect(result.current.showNavHeader).toBe(true);
  });
});
