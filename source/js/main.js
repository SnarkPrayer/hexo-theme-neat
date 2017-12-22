(function() {
    var arc = document.querySelector('.article-entry'),
        arcimg = arc.querySelectorAll('img')
    arcimg.forEach(ele => {
        if (ele.getAttribute("alt")) {
            ele.insertAdjacentHTML('afterEnd', '<span class="caption">' + ele.getAttribute("alt") + '</span>')
        }
    });
    var symbols = '<svg style="display:none; width:0; height:0; visibility:hidden;position:absolute;z-index:-1"><symbol id="icon-tag" viewBox="0 0 512 512"><title>tag</title><g><g class="icon-wrapper" fill="currentColor"><path d="M464 32H304L48 320l160 160 256-288V32zm-16 152L208.125 456 72.062 320 311.587 48H448v136z" /><path d="M368 160c17.645 0 32-14.355 32-32s-14.355-32-32-32-32 14.355-32 32 14.355 32 32 32zm0-48c8.836 0 16 7.163 16 16s-7.164 16-16 16-16-7.163-16-16 7.164-16 16-16z" /></g></g></symbol><symbol id="heart" viewBox="0 0 512 512"><title>heart</title><g><g class="nc-icon-wrapper" fill="currentColor"><path d="M429.9 95.6c-40.4-42.1-106-42.1-146.4 0L256 124.1l-27.5-28.6c-40.5-42.1-106-42.1-146.4 0-45.5 47.3-45.5 124.1 0 171.4L256 448l173.9-181c45.5-47.3 45.5-124.1 0-171.4z"/></g></g></symbol></svg>'
    document.body.insertAdjacentHTML("afterBegin", symbols)
})()
