import useQuery from "./useQuery";

export const useAPIGet = (url: string, params?: any) => {
    return useQuery({
        url,
        method: 'GET',
        params
    });
}

export const useAPIDelete = (url: string, params?: any) => {
    return useQuery({
        url,
        method: 'DELETE',
        params
    });
}
export const useAPIPost = (url: string, data: object) => {
    return useQuery({
        url,
        method: 'POST',
        data: data,
    });
}

export const useAPIPut = (url: string, data: object) => {
    return useQuery({
        url,
        method: 'PUT',
        data: data,
    });
}

