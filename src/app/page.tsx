<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alef</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;700&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            background: #0a0a0a;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Vazirmatn', Arial, sans-serif;
            overflow: hidden;
            position: relative;
        }

        body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: 
                radial-gradient(circle at 20% 80%, rgba(50, 50, 50, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(70, 70, 70, 0.2) 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, rgba(30, 30, 30, 0.4) 0%, transparent 50%);
            pointer-events: none;
            z-index: 1;
        }

        .container {
            text-align: center;
            z-index: 2;
            position: relative;
            padding: 2rem;
        }

        .main-text {
            font-size: 4rem;
            font-weight: 700;
            color: #ffffff;
            text-shadow: 
                0 0 20px rgba(255, 255, 255, 0.3),
                0 0 40px rgba(255, 255, 255, 0.2),
                0 0 60px rgba(255, 255, 255, 0.1);
            margin-bottom: 1rem;
            animation: glow 3s ease-in-out infinite alternate;
        }

        .sub-text {
            font-size: 1.5rem;
            color: #999;
            text-shadow: 0 0 10px rgba(153, 153, 153, 0.5);
            opacity: 0.8;
        }

        @keyframes glow {
            from {
                text-shadow: 
                    0 0 20px rgba(255, 255, 255, 0.3),
                    0 0 40px rgba(255, 255, 255, 0.2),
                    0 0 60px rgba(255, 255, 255, 0.1);
            }
            to {
                text-shadow: 
                    0 0 30px rgba(255, 255, 255, 0.5),
                    0 0 50px rgba(255, 255, 255, 0.3),
                    0 0 70px rgba(255, 255, 255, 0.2);
            }
        }

        .smoke {
            position: fixed;
            width: 100px;
            height: 100px;
            background: rgba(100, 100, 100, 0.1);
            border-radius: 50%;
            filter: blur(20px);
            animation: float 20s infinite ease-in-out;
        }

        .smoke:nth-child(1) {
            top: 10%;
            left: 20%;
            animation-delay: 0s;
            animation-duration: 15s;
        }

        .smoke:nth-child(2) {
            top: 60%;
            right: 10%;
            animation-delay: 5s;
            animation-duration: 18s;
        }

        .smoke:nth-child(3) {
            bottom: 20%;
            left: 70%;
            animation-delay: 10s;
            animation-duration: 22s;
        }

        @keyframes float {
            0%, 100% {
                transform: translateY(0px) translateX(0px);
                opacity: 0.3;
            }
            25% {
                transform: translateY(-30px) translateX(20px);
                opacity: 0.5;
            }
            50% {
                transform: translateY(-10px) translateX(-15px);
                opacity: 0.2;
            }
            75% {
                transform: translateY(-40px) translateX(10px);
                opacity: 0.4;
            }
        }

        @media (max-width: 768px) {
            .main-text {
                font-size: 20.5rem;
            }
            .sub-text {
                font-size: 10.2rem;
            }
        }
    </style>
</head>
<body>
    <div class="smoke"></div>
    <div class="smoke"></div>
    <div class="smoke"></div>
    
    <div class="container">
        <h1 class="main-text">Alef</h1>
    </div>
</body>
</html>
