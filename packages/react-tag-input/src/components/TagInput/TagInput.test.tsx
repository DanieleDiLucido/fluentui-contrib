import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { TagInput } from './TagInput';

describe('TagInput', () => {
  it('should render', () => {
    const onTagsUpdated = jest.fn();
    render(<TagInput onTagsUpdated={onTagsUpdated} />);

    expect(onTagsUpdated).toHaveBeenCalledTimes(0);
  });
  it('should add a Tag', () => {
    const onTagsUpdated = jest.fn();
    const { getByRole } = render(<TagInput onTagsUpdated={onTagsUpdated} />);

    const input = getByRole('textbox');

    fireEvent.change(input, { target: { value: 'new tag' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    expect(onTagsUpdated).toHaveBeenCalledTimes(1);
    expect(onTagsUpdated).toHaveBeenCalledWith([
      { value: 'new tag', id: expect.any(String) },
    ]);
  });
  it('should remove a specific Tag', () => {
    const onTagsUpdated = jest.fn();
    const tags = [
      { value: 'tag1', id: '1' },
      { value: 'tag1', id: '2' },
    ];
    const { getAllByRole } = render(
      <TagInput onTagsUpdated={onTagsUpdated} tags={tags} />
    );

    const firstTag = getAllByRole('option')[0];
    fireEvent.click(firstTag);
    expect(onTagsUpdated).toHaveBeenCalledTimes(1);
    expect(onTagsUpdated).toHaveBeenCalledWith([{ value: 'tag1', id: '2' }]);
  });
  it('should remove the last Tag on backspace', () => {
    const onTagsUpdated = jest.fn();
    const tags = [
      { value: 'tag1', id: '1' },
      { value: 'tag1', id: '2' },
    ];
    const { getByRole } = render(
      <TagInput onTagsUpdated={onTagsUpdated} tags={tags} />
    );
    const input = getByRole('textbox');
    fireEvent.keyDown(input, { key: 'Backspace', code: 'Backspace' });
    expect(onTagsUpdated).toHaveBeenCalledTimes(1);
    expect(onTagsUpdated).toHaveBeenCalledWith([{ value: 'tag1', id: '1' }]);
  });
  it('should not add a new Tag when disabled', () => {
    const onTagsUpdated = jest.fn();

    const { getByRole } = render(
      <TagInput onTagsUpdated={onTagsUpdated} disabled />
    );
    const input = getByRole('textbox');
    fireEvent.change(input, { target: { value: 'new tag' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
    expect(onTagsUpdated).toHaveBeenCalledTimes(0);
  });
  it('should not remove the last Tag on backspace', () => {
    const onTagsUpdated = jest.fn();
    const tags = [
      { value: 'tag1', id: '1' },
      { value: 'tag1', id: '2' },
    ];
    const { getByRole } = render(
      <TagInput onTagsUpdated={onTagsUpdated} tags={tags} disabled />
    );
    const input = getByRole('textbox');
    fireEvent.keyDown(input, { key: 'Backspace', code: 'Backspace' });
    expect(onTagsUpdated).toHaveBeenCalledTimes(0);
  });
  it('should not remove a specific Tag when disabled', () => {
    const onTagsUpdated = jest.fn();
    const tags = [
      { value: 'tag1', id: '1' },
      { value: 'tag1', id: '2' },
    ];
    const { getAllByRole } = render(
      <TagInput onTagsUpdated={onTagsUpdated} tags={tags} disabled />
    );
    const option = getAllByRole('option')[0];
    fireEvent.click(option);
    expect(onTagsUpdated).toHaveBeenCalledTimes(0);
  });
});
