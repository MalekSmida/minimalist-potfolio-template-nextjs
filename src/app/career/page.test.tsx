import { expect, test, describe, afterEach, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

// Mock the services
vi.mock('@/services', () => ({
  getCareerData: vi.fn().mockResolvedValue({
    descriptionList: ['Career journey description'],
    experienceList: [
      {
        _id: '1',
        contractType: 'Full-time',
        position: 'Senior Developer',
        company: 'Tech Company',
        summary: 'Led development team',
        contributions: ['Improved performance', 'Mentored junior developers'],
        iconPath: '/icon.png',
        iconHeight: 32,
        iconWidth: 32,
        dates: '2020-2023',
      },
    ],
  }),
}));

// Mock ExperienceCard
vi.mock('@/components/ExperienceCard', () => ({
  default: ({ position, company }: { position: string; company: string }) => (
    <div data-testid="experience-card">
      {position} at {company}
    </div>
  ),
}));

// Import after mocking
import Career from './page';

describe('Career Page', () => {
  afterEach(() => {
    cleanup();
  });

  test('should render career page with heading', async () => {
    const CareerElement = await Career();
    render(CareerElement);

    expect(screen.getByText('My Career Journey')).toBeDefined();
    expect(screen.getByText('Career journey description')).toBeDefined();
  });

  test('should render experience cards', async () => {
    const CareerElement = await Career();
    render(CareerElement);

    expect(screen.getByTestId('experience-card')).toBeDefined();
    expect(screen.getByText('Senior Developer at Tech Company')).toBeDefined();
  });

  test('should have proper semantic structure', async () => {
    const CareerElement = await Career();
    render(CareerElement);

    const heading = screen.getByRole('heading', { name: 'My Career Journey' });
    expect(heading.tagName).toBe('H1');

    const section = screen.getByRole('region', { name: /career/i });
    expect(section).toBeDefined();
  });
});