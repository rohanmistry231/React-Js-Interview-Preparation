const ReactQueryDemo = () => {
    // Initialize React Query client (loaded via CDN in index.html)
    const queryClient = new ReactQuery.QueryClient();

    return (
        <ReactQuery.QueryClientProvider client={queryClient}>
            <DataFetcher />
        </ReactQuery.QueryClientProvider>
    );
};

const DataFetcher = () => {
    const { data, error, isLoading } = ReactQuery.useQuery('post', async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/5');
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
    });

    return (
        <div className="p-4 border rounded-lg shadow-md">
            <h2 className="text-xl font-bold">React Query for Data Fetching</h2>
            <div className="mt-2">
                {isLoading && <p className="text-blue-500">Loading...</p>}
                {error && <p className="text-red-500">Error: {error.message}</p>}
                {data && !isLoading && (
                    <div>
                        <h3 className="font-semibold">Post Title:</h3>
                        <p>{data.title}</p>
                    </div>
                )}
            </div>
        </div>
    );
};