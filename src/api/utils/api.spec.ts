import { api } from './api';
import fetchMock from 'jest-fetch-mock';

// Mock the global fetch function to simulate HTTP requests
fetchMock.enableMocks();

describe('api function tests', () => {
    beforeEach(() => {
        // Clear fetch mock between tests
        fetchMock.resetMocks();
    });

    it('should fetch data successfully', async () => {
        fetchMock.mockResponse(JSON.stringify({ data: 'sample data' }));

        // Act: Call the api function
        const result = await api('/sample-url');

        // Assert: Check if the function returns the expected data
        expect(result).toEqual({ data: 'sample data' });

        // Verify that fetch was called with the correct URL
        expect(fetchMock).toHaveBeenCalledWith('/sample-url');

        // Verify that fetch was called once
        expect(fetchMock).toHaveBeenCalledTimes(1);
    });

});
