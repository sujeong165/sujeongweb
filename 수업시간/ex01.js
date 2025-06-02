<!DOCTYPE html>
<html>
<head>
    <title>자바스크립트 첫걸음</title>
</head>
<body>
    <button onclick="sayHello()">클릭해보세요!</button>
    <p id="message"></p>
    <script>
        function sayHello() {
            document.getElementById("message").innerText = "안녕하세요! 자바스크립트에 오신 것을 환영합니다.";
        }
    </script>
</body>
</html>
