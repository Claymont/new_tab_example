document.addEventListener('DOMContentLoaded', updateUrl);

function updateUrl() {
  browser.tabs.update({ url:"https://www.reddit.com/r/firefox/comments/m0jmmn/how_to_set_new_tab_to_a_web_page/", loadReplace: true });
}