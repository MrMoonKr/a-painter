/**
 * 'a-scene' 의 'loaded' 이벤트 핸들러로 callback 함수 등록
 * @param {function} callback 
 */
module.exports = function (callback) {
  if (document.readyState === 'complete' || document.readyState === 'loaded') {
    onDomLoaded();
  } else {
    document.addEventListener('DOMContentLoaded', onDomLoaded);
  }

  function onDomLoaded() {
    var sceneEl = document.querySelector('a-scene');
    if (sceneEl.hasLoaded) {
      callback();
    } else {
      sceneEl.addEventListener('loaded', callback());
    }
  }
}