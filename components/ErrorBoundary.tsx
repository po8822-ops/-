import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      let errorMessage = '알 수 없는 오류가 발생했습니다.';
      
      try {
        // Try to parse Firestore error JSON
        const firestoreError = JSON.parse(this.state.error?.message || '');
        if (firestoreError.error) {
          errorMessage = `데이터 처리 중 오류가 발생했습니다: ${firestoreError.error}`;
          if (firestoreError.error.includes('insufficient permissions')) {
            errorMessage = '권한이 없습니다. 관리자 계정으로 로그인해주세요.';
          }
        }
      } catch (e) {
        // Not a JSON error or other error
        if (this.state.error?.message) {
          errorMessage = this.state.error.message;
        }
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-[#0F1C2E] text-white p-6">
          <div className="max-w-md w-full bg-[#162436] p-12 rounded-[3rem] shadow-2xl border border-white/5 text-center">
            <h2 className="text-2xl font-black mb-6">오류가 발생했습니다</h2>
            <p className="text-slate-400 font-bold mb-8">{errorMessage}</p>
            <button 
              onClick={() => window.location.reload()}
              className="px-10 py-4 bg-[#2F6BFF] text-white rounded-full font-black text-sm hover:bg-white hover:text-[#0F1C2E] transition-all"
            >
              페이지 새로고침
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
