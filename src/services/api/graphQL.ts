import axios from 'axios';

export async function fetchGraphQL(
  query: string
): Promise<{ success: boolean; errors: any; data: any; status: number }> {
  try {
    const response = await axiosClient.post('', { query });
    const status = response.status;
    if (status !== 200 || response.data.errors) {
      console.error('GraphQL Error:', response.data.errors);
      return {
        success: false,
        errors: response.data.errors || `Unexpected status code: ${status}`,
        data: null,
        status,
      };
    }
    return {
      success: true,
      errors: null,
      data: response.data.data,
      status,
    };
  } catch (error: any) {
    const status = error?.response?.status ?? 500;
    console.error('Network or Axios Error:', error.message || error);
    return {
      success: false,
      errors: error,
      data: null,
      status,
    };
  }
}

const axiosClient = axios.create({
  baseURL: 'https://api.tarkov.dev/graphql',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
