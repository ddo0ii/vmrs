import { QueryClient } from 'react-query';

export const queryClient = new QueryClient();
queryClient.setDefaultOptions({
  queries: {
    staleTime: 1000 * 60, // 쿼리 결과가 1분 동안은 "신선"한 것으로 간주됩니다.
    cacheTime: 1000 * 60 * 5, // 성공한 쿼리 데이터가 5분 동안 캐시에 남아있습니다.
    retry: 1, // 쿼리 실패시 1번 재시도합니다.
  },
  mutations: {
    // 뮤테이션에 대한 기본 설정
  },
});
