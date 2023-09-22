// 指定された画像を非表示にする関数
function hideImages() {
    // yt-img-shadow内の特定の画像 (YouTube画像) を非表示にする
    let ytImages = document.querySelectorAll("img[src^='https://i.ytimg.com/vi/']");
    ytImages.forEach(function(img) {
        let parent = img.closest('yt-img-shadow') || img.parentElement;
        parent.style.display = "none";
    });

    // yt-img-shadow内の特定の画像 (Google画像) を非表示にする
    let googleImages = document.querySelectorAll("img[src^='https://lh3.googleusercontent.com/'], img[src^='https://yt3.googleusercontent.com/'], img[src^='https://www.gstatic.com/music/']");
    googleImages.forEach(function(img) {
        let parent = img.closest('yt-img-shadow') || img.parentElement;
        parent.style.display = "none";
    });
}

// ページが完全に読み込まれたら実行
window.addEventListener('load', function() {
    // main-panel 要素を無効化する
    let mainPanel = document.getElementById('main-panel');
    if (mainPanel) {
      mainPanel.style.display = 'none';
    }
    
    // 初回の画像非表示処理
    hideImages();

    // DOMの変更を監視するMutationObserverを作成
    const observer = new MutationObserver(hideImages);
    
    // body要素の子ノードの変更を監視
    observer.observe(document.body, { childList: true, subtree: true });
});
