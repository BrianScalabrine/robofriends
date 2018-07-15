import { 
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED 
} from './constants';

import * as reducers from './reducers';

describe('searchRobots', () => {
  const initialStateSearch = {
    searchField: ''
  };

  it('should return the initial state', () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: '' });
  })

  it('should handle CHANGE_SEARCH_FIELD', () => {
    expect(reducers.searchRobots(initialStateSearch, {
      type: CHANGE_SEARCH_FIELD,
      payload: 'test'
    })).toEqual({ searchField: 'test' });
  })
})

describe('requestRobots', () => {
  const initialStateRobots = {
    isPending: false,
    robots: [],
    error: ''
  };

  it('should return the initial state', () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
  })

  it('should handle REQUEST_ROBOTS_PENDING action', () => {    
    expect(reducers.requestRobots(initialStateRobots, {
      type: REQUEST_ROBOTS_PENDING
    })).toEqual({ 
      isPending: true,
      error: '',
      robots: []
    });
  })

  it('should handle REQUEST_ROBOTS_SUCCESS action', () => {    
    const mockPayload = [{
      id: '123',
      name: 'test',
      email: 'test@gmail.com'
    }];

    expect(reducers.requestRobots(initialStateRobots, {
      type: REQUEST_ROBOTS_SUCCESS,
      payload: mockPayload
    })).toEqual({ 
      isPending: false,
      error: '',
      robots: mockPayload
    });
  })

  it('should handle REQUEST_ROBOTS_FAILED action', () => {    
    expect(reducers.requestRobots(initialStateRobots, {
      type: REQUEST_ROBOTS_FAILED,
      payload: 'test'
    })).toEqual({ 
      isPending: false,
      error: 'test',
      robots: []
    });
  })
})