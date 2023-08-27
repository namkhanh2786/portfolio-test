// Lấy phần tử âm thanh và phần tử thân bảng
var audio = document.querySelector(".audio-player");
var tbody = document.querySelector(".music-list-section-tbody");

// Thêm trình nghe sự kiện nhấp vào phần tử thân bảng
tbody.addEventListener("click", function(event) {
  // Lấy phần tử mục tiêu của sự kiện nhấp, ví dụ nút nhấp là ▶️ thì target = ▶️
  var target = event.target;
  // Kiểm tra xem phần tử mục tiêu có phải là phần tử td với lớp "audioNumber" không, TD là tên thẻ
  if (target.tagName === "TD" && target.classList.contains("audioNumber")) {
    // Lấy thuộc tính data-music-src của phần tử mục tiêu
    var src = target.dataset.musicSrc;
    // Đặt thuộc tính src của phần tử âm thanh bằng giá trị data-music-src
    audio.src = src;
    // Tải và phát nguồn âm thanh mới
    audio.load();
    audio.play();
  }
});