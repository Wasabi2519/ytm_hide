// ページが完全に読み込まれたら実行
window.addEventListener('load', function() {
    // main-panel 要素を無効化する
    let mainPanel = document.getElementById('main-panel');
    if (mainPanel) {
      mainPanel.style.display = 'none';
    }

    // 全てのimg要素のsrc属性を無効化する関数
    function disableAllImagesSrc() {
        let images = document.querySelectorAll("img");
        images.forEach(function(img) {
            img.src = '';
        });
    }

    // 初回のimg要素のsrc属性無効化処理
    disableAllImagesSrc();

    // DOMの変更を監視するMutationObserverを作成
    const observer = new MutationObserver(disableAllImagesSrc);

    // body要素の子ノードの変更を監視
    observer.observe(document.body, { childList: true, subtree: true });
});