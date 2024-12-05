import { StrictMode, useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClientProvider } from 'react-query';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createAppTheme } from '@/configs/themes/theme';
import { queryClient } from '@/configs/query-client';

import('./apps/vcpx/app.jsx').then(({ App }) => {
  const MainApp = () => {
    // 로컬 스토리지에서 모드 읽기 (없으면 기본값 'system')
    const [mode, setMode] = useState(() => {
      return localStorage.getItem('themeMode') || 'system';
    });

    // 모드 변경 시 로컬 스토리지에 저장
    useEffect(() => {
      localStorage.setItem('themeMode', mode);
    }, [mode]);

    // 시스템 모드 확인
    const theme = useMemo(() => {
      const systemMode = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light';
      return createAppTheme(mode === 'system' ? systemMode : mode);
    }, [mode]);

    return (
      <StrictMode>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {/* App에 mode와 setMode 전달 */}
            <App mode={mode} setMode={setMode} />
          </ThemeProvider>
        </QueryClientProvider>
      </StrictMode>
    );
  };

  createRoot(document.getElementById('root')).render(<MainApp />);
});
