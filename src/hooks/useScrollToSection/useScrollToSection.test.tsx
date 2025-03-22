import { renderHook } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import useScrollToSection from './useScrollToSection';

describe('useScrollToSection Hook', () => {
  // Mock getElementById and scrollIntoView
  const mockScrollIntoView = vi.fn();

  beforeEach(() => {
    // Reset console.warn mock before each test
    console.warn = vi.fn();

    // Mock document.getElementById
    document.getElementById = vi.fn().mockImplementation((id) => {
      if (id === 'existing-section') {
        return {
          scrollIntoView: mockScrollIntoView,
        };
      }
      // Return null for non-existing section IDs
      return null;
    });

    // Clear all mocks
    vi.clearAllMocks();
  });

  it('should return a scrollToSection function', () => {
    const { result } = renderHook(() => useScrollToSection());

    expect(result.current).toHaveProperty('scrollToSection');
    expect(typeof result.current.scrollToSection).toBe('function');
  });

  it('should scroll to section when it exists', () => {
    const { result } = renderHook(() => useScrollToSection());

    // Call scrollToSection with an existing ID
    result.current.scrollToSection('existing-section');

    // Check if getElementById was called with the correct argument
    expect(document.getElementById).toHaveBeenCalledWith('existing-section');

    // Check if scrollIntoView was called with the correct behavior
    expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });

    // Ensure warning wasn't displayed
    expect(console.warn).not.toHaveBeenCalled();
  });

  it('should log a warning when section does not exist', () => {
    const { result } = renderHook(() => useScrollToSection());

    // Call scrollToSection with a non-existing ID
    result.current.scrollToSection('non-existing-section');

    // Check if getElementById was called with the correct argument
    expect(document.getElementById).toHaveBeenCalledWith('non-existing-section');

    // Check if scrollIntoView was not called
    expect(mockScrollIntoView).not.toHaveBeenCalled();

    // Ensure warning was displayed
    expect(console.warn).toHaveBeenCalledWith('Section with ID "non-existing-section" not found.');
  });

  it('should use consistent function reference (useCallback)', () => {
    const { result, rerender } = renderHook(() => useScrollToSection());

    // Get initial function reference
    const firstRenderFunction = result.current.scrollToSection;

    // Trigger re-render
    rerender();

    // Get function reference after re-render
    const secondRenderFunction = result.current.scrollToSection;

    // Function reference should remain the same due to useCallback
    expect(secondRenderFunction).toBe(firstRenderFunction);
  });
});
