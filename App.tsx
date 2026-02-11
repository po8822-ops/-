import React from 'react';

// 모든 복잡한 설정을 다 지우고 아래 내용만 넣어보세요.
const App: React.FC = () => {
  return (
    <div style={{ 
      backgroundColor: '#0F1C2E', 
      color: 'white', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center', 
      alignItems: 'center',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>홀린페이지 테스트</h1>
      <p style={{ fontSize: '1.5rem', color: '#4d7fff' }}>이 글자가 보인다면 리액트는 정상입니다!</p>
      <button 
        onClick={() => alert('작동 확인!')}
        style={{ marginTop: '20px', padding: '10px 20px', fontSize: '1rem', cursor: 'pointer' }}
      >
        클릭해서 테스트
      </button>
    </div>
  );
};

export default App;