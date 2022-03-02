import httpSchema from '@jswork/web-http-schema';

const options = {
  transformResponse: ({ data }) => {
    return data;
  },
};

export default httpSchema(
  {
    host: 'https://api.github.com',
    request: ['', 'json'],
    items: [
      {
        items: {
          login: ['get', '/users/afeiship'],
        },
      },
    ],
  },
  options
);
