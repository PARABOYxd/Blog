import { createClient } from '@sanity/client';

const client = createClient({
    projectId: '3j94hd6b',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-01-01',
});

export default client;
