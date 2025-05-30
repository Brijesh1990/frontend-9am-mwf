import React,{useState,useEffect} from "react";

const LoaderApp = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) 
    {

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div className="loader" style={{ width: '100px', height: '100px', borderRadius: '50%', border: '8px solid #ccc', borderTopColor: '#3498db', animation: 'spin 1s linear infinite' }}></div>
            <style>{`
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );

 
 }
else 
{

    return (
        <div className="container w-50 mt-5 shadow p-5">
        <style>
            {`
                .container {
                    background-color: #f8f9fa;
                    border-radius: 10px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                }
            `}</style>
        <h1>Welcome to the App!</h1>
        <p>This is the main content of the application.</p>
        <p><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDHhjGEpsbkPi8WBLVnhjxA5ncefVpap6Jiw&s" className="img-fluid" /></p>
        </div>
    );
}

};

export default LoaderApp;
