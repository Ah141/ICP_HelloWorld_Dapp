import { useState } from 'react';
import { backend } from 'declarations/backend'; 

export default function HelloWorld() {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleSubmit = async () => {
    if (!name.trim()) return;
    
    const greetingMessage = await backend.greet(name);
    setGreeting(greetingMessage);
  };

  return (
    <div style={{
      padding: '10px 60px',
      fontFamily: 'sans-serif',
      fontSize: '1.5rem',
      // New beautiful styling added
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 0
    }}>
      
      {/* Beautiful container wrapper */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.95)',
        borderRadius: '30px',
        padding: '40px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,255,255,0.2)',
        maxWidth: '500px',
        width: '100%',
        transform: 'translateY(0)',
        transition: 'all 0.3s ease',
        position: 'relative',
        overflow: 'hidden'
      }}>
        
        {/* Decorative elements */}
        <div style={{
          position: 'absolute',
          top: '-50px',
          left: '-50px',
          width: '100px',
          height: '100px',
          background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
          borderRadius: '50%',
          opacity: '0.3',
          animation: 'float 3s ease-in-out infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '-30px',
          right: '-30px',
          width: '60px',
          height: '60px',
          background: 'linear-gradient(45deg, #A8E6CF, #FFD93D)',
          borderRadius: '50%',
          opacity: '0.4',
          animation: 'float 4s ease-in-out infinite reverse'
        }}></div>

        <main>
          {/* Enhanced title */}
          <div style={{
            textAlign: 'center',
            marginBottom: '30px',
            background: 'linear-gradient(45deg, #667eea, #764ba2)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontSize: '2rem',
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
          }}>
            <span style={{ fontSize: '3rem', marginRight: '10px' }}>👋</span>
            Hi This Is My First ICP Dapp
          </div>
          
          <div style={{ textAlign: 'center', marginBottom: '25px' }}>
            <label htmlFor="name" style={{
              display: 'block',
              marginBottom: '15px',
              color: '#4a4a4a',
              fontWeight: '600',
              fontSize: '1.2rem'
            }}>
              <span style={{ fontSize: '1.5rem', marginRight: '8px' }}>✨</span>
              Enter your name: &nbsp;
            </label>
            
            <div style={{ position: 'relative', display: 'inline-block', width: '100%', maxWidth: '300px' }}>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                style={{
                  padding: '15px 20px',
                  fontSize: '1.2rem',
                  border: '3px solid #e0e7ff',
                  borderRadius: '25px',
                  outline: 'none',
                  width: '100%',
                  background: 'rgba(255,255,255,0.8)',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#667eea';
                  e.target.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.3)';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e0e7ff';
                  e.target.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                  e.target.style.transform = 'translateY(0)';
                }}
                placeholder="Your beautiful name here... 🌟"
              />
            </div>
            
            <button 
              onClick={handleSubmit}
              style={{
                marginTop: '20px',
                padding: '15px 35px',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                color: 'white',
                background: 'linear-gradient(45deg, #667eea, #764ba2)',
                border: 'none',
                borderRadius: '25px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: '0 8px 20px rgba(102, 126, 234, 0.3)',
                display: 'inline-block',
                minWidth: '160px',
                textAlign: 'center'
              }}
              onMouseOver={(e) => {
                e.target.style.background = 'linear-gradient(45deg, #5a67d8, #6b46c1)';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 12px 25px rgba(102, 126, 234, 0.4)';
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'linear-gradient(45deg, #667eea, #764ba2)';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 8px 20px rgba(102, 126, 234, 0.3)';
              }}
              onMouseDown={(e) => {
                e.target.style.transform = 'translateY(1px)';
                e.target.style.boxShadow = '0 4px 10px rgba(102, 126, 234, 0.4)';
              }}
              onMouseUp={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 12px 25px rgba(102, 126, 234, 0.4)';
              }}
            >
              Click Me! 🚀
            </button>
          </div>
          
          <section 
            style={{
              margin: '10px auto',
              padding: '10px 60px',
              border: '1px solid #222',
              display: greeting ? 'block' : 'none',
              // Enhanced styling for greeting
              background: 'linear-gradient(45deg, #A8E6CF, #DCEDC1)',
              borderRadius: '20px',
              border: '2px solid #A8E6CF',
              textAlign: 'center',
              fontSize: '1.3rem',
              fontWeight: '600',
              color: '#2d5a3d',
              boxShadow: '0 10px 25px rgba(168, 230, 207, 0.3)',
              animation: greeting ? 'slideIn 0.5s ease-out' : '',
              position: 'relative'
            }}
          >
            <span style={{ fontSize: '2rem', marginRight: '10px' }}>🎉</span>
            {greeting}
            <span style={{ fontSize: '2rem', marginLeft: '10px' }}>✨</span>
          </section>
        </main>
      </div>

      {/* CSS Animations */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
          
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(30px) scale(0.9);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
          
          input::placeholder {
            color: #a0a0a0;
            opacity: 0.8;
          }
          
          @media (max-width: 768px) {
            body {
              padding: 20px !important;
            }
          }
        `}
      </style>
    </div>
  );
}