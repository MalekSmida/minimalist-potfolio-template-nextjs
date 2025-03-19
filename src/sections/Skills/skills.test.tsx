import { expect, test, describe, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

// local files
import Skills from './Skills';
import { ISkill } from './skills.types';

// mock data
const mockBlockList: Array<{ title: string; skillList: Array<ISkill> }> = [
  {
    title: 'First block',
    skillList: [],
  },
  {
    title: '',
    skillList: [
      {
        localPath: '/skill.png',
        label: 'Second block first skill',
        level: 'Beginner',
      },
    ],
  },
  {
    title: 'Third block',
    skillList: [
      {
        localPath: '/skill.png',
        label: 'Third block first skill',
        level: 'Intermediate',
      },
      {
        localPath: '/skill.png',
        label: 'Third block second skill',
        level: 'Advanced',
      },
    ],
  },
];

describe('Career Component', () => {
  /**
   * Important:
   * When having multiple test you should add cleanup as Vitest does not cleanup by default, leaving previously mounted components to be accessed by later tests
   * Github issue : https://github.com/testing-library/vue-testing-library/issues/296
   */
  afterEach(() => {
    cleanup();
  });

  test('1- should renders nothing when no data is provided', () => {
    const { container } = render(<Skills blockList={[]} />);
    // In React, when a component returns null, React does not remove the parent container.
    // Instead, it renders an empty container (<div></div> by default when using render() from @testing-library/react).
    // We should check if the container is empty
    expect(container.firstChild).toBeNull();
  });

  test('2- should renders heading correctly', () => {
    render(<Skills blockList={mockBlockList} />);

    expect(screen.getByRole('heading', { level: 1, name: 'Technical Expertise' })).toBeDefined();
  });

  test('3- should not render block when skillList is empty', () => {
    render(<Skills blockList={mockBlockList} />);

    expect(screen.queryByText(mockBlockList[0].title)).toBeNull();
  });

  test('4- should render block of skillList even when title is empty', () => {
    render(<Skills blockList={mockBlockList} />);

    mockBlockList[1].skillList.forEach((skill) => {
      expect(screen.getByText(skill.label)).toBeDefined();
    });
  });

  test('5- should renders skills block when provided', () => {
    render(<Skills blockList={mockBlockList} />);

    expect(screen.getByText(mockBlockList[2].title)).toBeDefined();

    mockBlockList[2].skillList.forEach((skill) => {
      expect(screen.getByText(skill.label)).toBeDefined();
    });
  });
});
