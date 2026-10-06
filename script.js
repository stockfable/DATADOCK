// ১. ট্যাব পরিবর্তন করার ফাংশন
const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // আগের অ্যাক্টিভ ট্যাব মুছে ফেলা
        tabs.forEach(t => t.classList.remove('active'));
        // নতুন ট্যাবে অ্যাক্টিভ ক্লাস যোগ করা
        tab.classList.add('active');
    });
});

// ২. ফুটার অ্যাকর্ডিয়ন টগল করার ফাংশন
const accordions = document.querySelectorAll('.accordion-item');
accordions.forEach(acc => {
    acc.addEventListener('click', () => {
        // এখানে ভবিষ্যতে অ্যাকর্ডিয়ন খোলা/বন্ধ করার কোড বসানো যাবে
        console.log("Accordion clicked: " + acc.innerText);
    });
});

// ৩. জেনারেট বাটনে ক্লিক করলে অ্যালার্ট (ডেমো)
const generateBtn = document.querySelector('.btn-generate');
if(generateBtn) {
    generateBtn.addEventListener('click', () => {
        alert("Generating AI Image... (এটি একটি ডেমো বাটন)");
    });
}