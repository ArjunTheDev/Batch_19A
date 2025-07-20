import React from 'react';
import { render, screen } from '@testing-library/react';
import NewPage from '../../components/NewPage';
import { vi } from 'vitest';

vi.mock('../../components/ToggleTheme', () => ({
  __esModule: true,
  default: () => <button data-testid="toggle-theme">Toggle Theme</button>,
}));

vi.mock('antd', () => ({
  __esModule: true,
  Spin: () => <div data-testid="spin" />,
}));

describe('NewPage component', () => {
  it('renders heading, Spin, and ToggleTheme', () => {
    render(<NewPage />);

    expect(screen.getByText(/New Page/i)).toBeInTheDocument();
    expect(screen.getByTestId('spin2')).toBeInTheDocument();
    expect(screen.getByTestId('toggle-theme')).toBeInTheDocument();
  });
});
