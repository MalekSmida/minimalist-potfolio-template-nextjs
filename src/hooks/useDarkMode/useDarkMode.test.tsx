import { renderHook, act } from '@testing-library/react';
import { describe, expect, beforeEach, vi, test } from 'vitest';

// Local files
import useDarkMode from './useDarkMode';

describe('useDarkMode Hook', () => {
  // Mock localStorage
  const localStorageMock = (() => {
    let store: Record<string, string> = {};
    return {
      getItem: vi.fn((key: string) => store[key] || null),
      setItem: vi.fn((key: string, value: string) => {
        store[key] = value;
      }),
      clear: vi.fn(() => {
        store = {};
      }),
    };
  })();

  // Mock document.documentElement
  const documentElementMock = {
    classList: {
      add: vi.fn(),
      remove: vi.fn(),
      contains: vi.fn(),
    },
  };

  beforeEach(() => {
    // Setup mocks before each test
    vi.stubGlobal('localStorage', localStorageMock);
    Object.defineProperty(document, 'documentElement', {
      value: documentElementMock,
      writable: true,
    });

    // reset mocks
    vi.clearAllMocks();
  });

  test('should initialize with light theme by default', () => {
    const { result } = renderHook(() => useDarkMode());

    expect(result.current.isDark).toBe(false);
    expect(localStorageMock.getItem).toHaveBeenCalledWith('theme');
    expect(documentElementMock.classList.add).not.toHaveBeenCalled();
  });

  test('should initialize with dark theme if saved in localStorage', () => {
    localStorageMock.getItem.mockReturnValueOnce('dark');

    const { result } = renderHook(() => useDarkMode());

    expect(result.current.isDark).toBe(true);
    expect(localStorageMock.getItem).toHaveBeenCalledWith('theme');
    expect(documentElementMock.classList.add).toHaveBeenCalledWith('dark');
  });

  test('should toggle from light to dark theme', () => {
    const { result } = renderHook(() => useDarkMode());

    // Initially in light mode
    expect(result.current.isDark).toBe(false);

    // Toggle to dark mode
    act(() => {
      result.current.toggleDarkMode();
    });

    expect(result.current.isDark).toBe(true);
    expect(localStorageMock.setItem).toHaveBeenCalledWith('theme', 'dark');
    expect(documentElementMock.classList.add).toHaveBeenCalledWith('dark');
    expect(documentElementMock.classList.remove).not.toHaveBeenCalled();
  });

  test('should toggle from dark to light theme', () => {
    // Start with dark theme
    localStorageMock.getItem.mockReturnValueOnce('dark');

    const { result } = renderHook(() => useDarkMode());

    // Initially in dark mode
    expect(result.current.isDark).toBe(true);

    // Toggle to light mode
    // The primary goal of act() is to ensure that all updates related to React components (such as state changes, effects, etc.) are processed and applied before moving on to the next operation in your test
    act(() => {
      result.current.toggleDarkMode();
    });

    expect(result.current.isDark).toBe(false);
    expect(localStorageMock.setItem).toHaveBeenCalledWith('theme', 'light');
    expect(documentElementMock.classList.remove).toHaveBeenCalledWith('dark');
  });

  test('should correctly handle multiple toggles in sequence', () => {
    const { result } = renderHook(() => useDarkMode());

    // Toggle to dark
    act(() => {
      result.current.toggleDarkMode();
    });
    expect(result.current.isDark).toBe(true);
    expect(localStorageMock.setItem).toHaveBeenCalledWith('theme', 'dark');

    // Toggle back to light
    act(() => {
      result.current.toggleDarkMode();
    });
    expect(result.current.isDark).toBe(false);
    expect(localStorageMock.setItem).toHaveBeenCalledWith('theme', 'light');

    // Toggle back to dark
    act(() => {
      result.current.toggleDarkMode();
    });
    expect(result.current.isDark).toBe(true);
    expect(localStorageMock.setItem).toHaveBeenCalledWith('theme', 'dark');

    // Check that the className manipulations happened the expected number of times
    expect(documentElementMock.classList.add).toHaveBeenCalledTimes(2);
    expect(documentElementMock.classList.remove).toHaveBeenCalledTimes(1);
  });
});
