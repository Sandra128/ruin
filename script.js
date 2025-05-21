// 平滑滾動功能
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 表單提交處理
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // 獲取表單數據
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // 這裡可以添加表單驗證邏輯
    
    // 模擬表單提交
    alert('感謝您的訊息！我們會盡快回覆您。');
    this.reset();
});

// 產品卡片點擊事件
document.querySelectorAll('.product-card .cta-button').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.parentElement.querySelector('h3').textContent;
        alert(`賣場正在整理更新`);
    });
});

// 頁面載入動畫
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// 滾動顯示動畫
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', reveal);

// 初始化頁面時執行一次
reveal();

// 為產品卡片添加 reveal 類
document.querySelectorAll('.product-card').forEach(card => {
    card.classList.add('reveal');
});

// 為聯絡表單添加 reveal 類
document.getElementById('contact').classList.add('reveal'); 