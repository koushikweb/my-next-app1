const MyCustomButton = () => {
  const buttonStyle = {
    backgroundColor: '#0070f3',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  };

  return (
    <button style={buttonStyle}>
      Click Me
    </button>
  );
}

export default MyCustomButton;