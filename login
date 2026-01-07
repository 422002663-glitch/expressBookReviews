# Save both the POST command and its output to login
(
  echo 'curl -X POST http://localhost:3000/login -H "Content-Type: application/json" -d "{\"email\":\"newuser@example.com\",\"password\":\"Password123\"}"'
  curl -X POST http://localhost:3000/login -H "Content-Type: application/json" -d '{"email":"newuser@example.com","password":"Password123"}'
) > login
