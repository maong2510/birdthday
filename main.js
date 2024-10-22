onload = () => {
  document.body.classList.remove("container"); 
};

document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('birthday-music');
    audio.play().catch(function(error) {
        console.log('Audio play failed:', error);
    });
});



const texts = [
  "𝓗𝓪𝓹𝓹𝔂 𝓫𝓲𝓻𝓽𝓱𝓭𝓪𝔂, 𝓜𝓪𝔂 𝓪𝓵𝓵 𝔂𝓸𝓾𝓻 𝔀𝓲𝓼𝓱𝓮𝓼 𝓬𝓸𝓶𝓮 𝓽𝓻𝓾𝓮!",
  "𝓗𝓪𝓿𝓮 𝓪 𝔀𝓸𝓷𝓭𝓮𝓻𝓯𝓾𝓵 𝓭𝓪𝔂 𝓯𝓲𝓵𝓵𝓮𝓭 𝔀𝓲𝓽𝓱 𝓳𝓸𝔂!"
];
const container = document.querySelector('.happy-woman-day');
let currentTextIndex = 0; // Chỉ số cụm văn bản hiện tại
let index = 0;
function type() {
    if (index < texts[currentTextIndex].length) {
        container.innerHTML += texts[currentTextIndex].charAt(index); // Thêm từng ký tự vào div
        index++;
        setTimeout(type, 120); // Đặt khoảng thời gian giữa mỗi ký tự (200ms)
    } else {
        // Khi hoàn thành cụm hiện tại
        if (currentTextIndex === 0) {
            // Nếu là cụm đầu tiên, đợi một chút rồi xóa
            setTimeout(() => {
                container.innerHTML = ""; // Xóa nội dung cụm đầu tiên
                currentTextIndex++; // Chuyển sang cụm văn bản tiếp theo
                index = 0; // Đặt lại chỉ số ký tự
                setTimeout(type, 500); // Bắt đầu gõ cụm mới sau 0.5 giây
            }, 1000); // Đợi 1 giây trước khi xóa
        }
    }
}

setTimeout(type, 1000); // Bắt đầu gõ chữ đầu tiên sau 2 giây