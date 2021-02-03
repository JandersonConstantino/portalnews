import React from 'react';
import {render, waitFor} from '@testing-library/react-native';

import MockProvider from 'MockProvider';
import CardNews from './CardNews';

let mockNavigate = jest.fn();

jest.mock('@react-navigation/native', () => ({
  useNavigation: function () {
    return {
      navigate: mockNavigate,
    };
  },
}));

describe('CardNews', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('firstChild must be defined', async () => {
    const id = 'e84596a0-60ed-11eb-ae93-0242ac130002';
    const {getByTestId} = make({id});

    await waitFor(() => {
      const view = getByTestId(`container-card-${id}`);
      expect(view).toBeDefined();
    });
  });
});

function make(props = {}) {
  const mergedProps = {
    id: 'b0f57710-60ed-11eb-ae93-0242ac130002',
    title: 'Lorem Ipsum',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    author: 'Barack Obama',
    ...props,
  };

  return render(
    <MockProvider>
      <CardNews {...mergedProps} />
    </MockProvider>,
  );
}
