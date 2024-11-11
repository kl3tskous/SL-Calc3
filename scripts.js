/* General Layout */
body {
    font-family: Arial, sans-serif;
    background-color: #181b28;
    color: #d1d5db;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
}

.dashboard-container {
    background: #1f2334;
    border-radius: 12px;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.3);
    padding: 25px;
    max-width: 500px;
    width: 100%;
    color: #e5e7eb;
    text-align: center;
}

h1 {
    font-size: 1.8em;
    color: #ffffff;
    margin-bottom: 25px;
    font-weight: 700;
    letter-spacing: 1px;
}

.crypto-selection {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

.crypto-button {
    background: #2a2e43;
    padding: 12px;
    border-radius: 10px;
    color: #00d1ff;
    font-weight: bold;
    cursor: pointer;
    width: 30%;
    text-align: center;
    transition: background 0.3s ease;
}

.crypto-button:hover {
    background: #3a3f5c;
}

.input-section {
    background: #232738;
    padding: 20px;
    border-radius: 10px;
    margin-top: 20px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
}

.input-group {
    margin-bottom: 15px;
    text-align: left;
}

.input-group label {
    font-size: 0.9em;
    color: #9ca3af;
    display: block;
    margin-bottom: 5px;
    font-weight: 600;
}

input {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #3a3f5c;
    background-color: #2a2e43;
    color: #ffffff;
}

input::placeholder {
    color: #6b7280;
}

.calculate-btn {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 12px;
    font-size: 1em;
    border-radius: 8px;
    cursor: pointer;
    width: 100%;
    font-weight: bold;
    margin-top: 10px;
    transition: background 0.3s ease;
}

.calculate-btn:hover {
    background-color: #0056b3;
}

.result-section {
    background: #232738;
    padding: 15px;
    border-radius: 10px;
    margin-top: 15px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}

#stop-loss-result {
    font-size: 1.2em;
    color: #00d1ff;
}
