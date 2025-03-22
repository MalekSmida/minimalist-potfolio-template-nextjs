import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';

// Local files
import useMesureVerticalScroll from './useMesureVerticalScroll';

describe('useMesureVerticalScroll Hook', () => {
  // Mock window and document properties
  beforeEach(() => {
    // Mock window.scrollY
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      value: 0,
    });

    // Mock window.screen
    Object.defineProperty(window, 'screen', {
      writable: true,
      value: {
        height: 1000,
      },
    });

    // Mock document.body.offsetHeight
    Object.defineProperty(document.body, 'offsetHeight', {
      writable: true,
      value: 5000,
    });

    // Mock addEventListener and removeEventListener
    window.addEventListener = vi.fn();
    window.removeEventListener = vi.fn();
  });

  it('should initialize with 0 scroll progress', () => {
    const { result } = renderHook(() => useMesureVerticalScroll());

    expect(result.current.scrollProgress).toBe(0);
    expect(window.addEventListener).toHaveBeenCalledWith('scroll', expect.any(Function));
  });

  it('should add scroll event listener on mount', () => {
    renderHook(() => useMesureVerticalScroll());

    expect(window.addEventListener).toHaveBeenCalledWith('scroll', expect.any(Function));
  });

  it('should remove scroll event listener on unmount', () => {
    const { unmount } = renderHook(() => useMesureVerticalScroll());

    unmount();

    expect(window.removeEventListener).toHaveBeenCalledWith('scroll', expect.any(Function));
  });

  it('should calculate scroll progress correctly when scrolling', () => {
    // Get reference to the event handler
    const { result } = renderHook(() => useMesureVerticalScroll());
    const scrollHandler = vi.mocked(window.addEventListener).mock.calls[0][1] as EventListener;

    // Test case 1: No scroll (top of page)
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true });
    act(() => {
      scrollHandler(new Event('scroll'));
    });
    expect(result.current.scrollProgress).toBe(0);

    // Test case 2: Scroll down 1000px
    Object.defineProperty(window, 'scrollY', { value: 1000, writable: true });
    act(() => {
      scrollHandler(new Event('scroll'));
    });

    // Calculate expected value: (scrollPosition + screenHeight * scrollRate) / pageHeight * 100
    // scrollRate = (scrollPosition + screenHeight) / pageHeight = (1000 + 1000) / 5000 = 0.4
    // screenHeightByRate = screenHeight * scrollRate = 1000 * 0.4 = 400
    // finalEquation = ((scrollPosition + screenHeightByRate) / pageHeight) * 100 = ((1000 + 400) / 5000) * 100 = 28
    expect(result.current.scrollProgress).toBeCloseTo(28, 0);

    // Test case 3: Scroll down 2500px (middle of page)
    Object.defineProperty(window, 'scrollY', { value: 2500, writable: true });
    act(() => {
      scrollHandler(new Event('scroll'));
    });

    // Calculate expected value: (scrollPosition + screenHeight * scrollRate) / pageHeight * 100
    // scrollRate = (scrollPosition + screenHeight) / pageHeight = (2500 + 1000) / 5000 = 0.7
    // screenHeightByRate = screenHeight * scrollRate = 1000 * 0.7 = 700
    // finalEquation = ((scrollPosition + screenHeightByRate) / pageHeight) * 100 = ((2500 + 700) / 5000) * 100 = 64
    expect(result.current.scrollProgress).toBeCloseTo(64, 0);

    // Test case 4: Scroll to bottom
    Object.defineProperty(window, 'scrollY', { value: 4000, writable: true });
    act(() => {
      scrollHandler(new Event('scroll'));
    });

    // Calculate expected value: (scrollPosition + screenHeight * scrollRate) / pageHeight * 100
    // scrollRate = (scrollPosition + screenHeight) / pageHeight = (4000 + 1000) / 5000 = 1
    // screenHeightByRate = screenHeight * scrollRate = 1000 * 1 = 1000
    // finalEquation = ((scrollPosition + screenHeightByRate) / pageHeight) * 100 = ((4000 + 1000) / 5000) * 100 = 100
    expect(result.current.scrollProgress).toBeCloseTo(100, 0);
  });
});
