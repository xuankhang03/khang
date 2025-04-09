function logout() {
    localStorage.removeItem("userRole");
    window.location.href = "login.html";
  }
  
  function checkIn() {
    const now = new Date().toLocaleTimeString();
    document.getElementById('logChamCong').textContent = `Chấm công vào lúc: ${now}`;
  }
  
  function checkOut() {
    const now = new Date().toLocaleTimeString();
    document.getElementById('logChamCong').textContent = `Chấm công ra lúc: ${now}`;
  }
  
  function updateInfo() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('emailUpdate').value;
    const password = document.getElementById('passwordUpdate').value;
  
    document.getElementById('updateStatus').textContent = 'Cập nhật thông tin thành công!';
  }
  