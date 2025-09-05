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
      fontSize: '1.5rem'
    }}>
      <main>
        <div>
          <label htmlFor="name">Enter your name: &nbsp;</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
          />
          <button onClick={handleSubmit}>
            Click Me!
          </button>
        </div>
        
        <section 
          style={{
            margin: '10px auto',
            padding: '10px 60px',
            border: '1px solid #222',
            display: greeting ? 'block' : 'none'
          }}
        >
          {greeting}
        </section>
      </main>
    </div>
  );
}
