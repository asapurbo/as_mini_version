const useMap = (mapData, fn) => {
    const { data, isError, isLoading, error } = mapData ?? {};
    let content = {};
    let contents = [];

    if (Array.isArray(mapData)) {
        for (let i = 0; i <= mapData.length; i++) {
            if (
                mapData[i]?.isError &&
                !mapData[i]?.isLoading &&
                !mapData[i]?.data
            ) {
                contents.push(error);
            } else if (
                mapData[i]?.isLoading &&
                !mapData[i]?.isError &&
                !mapData[i]?.data
            ) {
                contents.push('Loading....');
            } else if (
                !mapData[i]?.isLoading &&
                !mapData[i]?.isError &&
                mapData[i]?.data?.length === 0
            ) {
                contents.push('Item is not able');
            } else if (
                !mapData[i]?.isLoading &&
                !mapData[i]?.isError &&
                mapData[i]?.data?.length > 0
            ) {
                contents.push(mapData[i].data);
            }
        }
    } else {
        if (isError && !isLoading && !data) {
            content.error = error;
        } else if (isLoading && !isError && !data) {
            content.loading = 'Loading....';
        } else if (!isLoading && !isError && data?.length === 0) {
            content.isAble = 'Item is not able';
        } else if (!isLoading && !isError && data?.length > 0) {
            content.data = data;
        }
    }

    if (Array.isArray(mapData)) {
        return fn(contents, mapData);
    } else {
        return fn(content, mapData);
    }
};

export default useMap;
