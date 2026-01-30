import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../api/products';

export function useProducts() {
    return useQuery({
       queryKey: ['products'],
       queryFn: fetchProducts,
       staleTime: 1000 * 60 * 5     //5분 동안 재요청 안 함
                                    //캐시 데이터 재사용
    });
}