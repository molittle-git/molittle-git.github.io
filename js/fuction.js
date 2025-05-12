// 分享本页
function share() {
    let url = window.location.origin + window.location.pathname
    new ClipboardJS(".share", { text: function() { return '标题：' + document.title + '\n链接：' + url } });
    btf.snackbarShow("本页链接已复制到剪切板，快去分享吧~")
}
window.onscroll = percent;// 执行函数

// 页面百分比
function percent() {
    // 检查页面中是否存在 card-toc 元素
    const cardToc = document.getElementById('card-toc');
    if (!cardToc) {
        return; // 如果不存在，直接返回，不执行后续代码
    }

    // 获取百分比文本内容
    const percentage = cardToc.querySelector('.toc-percentage').textContent.trim();

    // 获取 go-up 元素
    let up = document.querySelector("#go-up");

    // 根据百分比设置样式和内容
    if (percentage <= 99) {
        up.childNodes[0].style.display = 'none'
        up.childNodes[1].style.display = 'block'
        up.childNodes[1].innerHTML = percentage;
    } else {
        up.childNodes[1].style.display = 'none'
        up.childNodes[0].style.display = 'block'
    }
}